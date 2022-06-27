import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookData from "./BookData";


class BookList extends Component {

    render() {
        return (

            <Container>
                <h2 className="heading">Books</h2>
                <Row>
                    {
                        this.props.books.slice(0, 20).map(singleBook => (
                            <Col xs={6} key={singleBook.asin}>
                                <BookData book={singleBook}
                                    handleBooks={this.props.handleBooks}
                                />
                            </Col>
                        )
                        )}
                </Row>
            </Container>

        )
    }
}
export default BookList