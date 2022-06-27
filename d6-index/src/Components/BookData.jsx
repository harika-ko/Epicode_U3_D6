import { Component } from "react"
import { Card } from "react-bootstrap"


class BookData extends Component {
    render() {
        return (
            <Card onClick={() => { this.props.handleBooks(this.props.book.asin) }}>
                <Card.Img style={{ height: "220px", objectFit: "cover", width: "auto" }} src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
export default BookData