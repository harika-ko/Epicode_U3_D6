import { Component } from 'react'
import { Card, Container, Row, Col } from "react-bootstrap"

let options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTU5ODM0OTksImV4cCI6MTY1NzE5MzA5OX0.FVezzfR-MwArRrxMi8U3lRh44jeNrRDlY6_z6TeJKIw",
    },
};


class CommentArea extends Component {

    state = {
        comment: []
    }

    componentDidMount = () => {
        if (this.props.asin)
            this.fetchComments(this.props.asin)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.asin && prevProps.asin !== this.props.asin) {
            this.fetchComments(this.props.asin)
        }

    }

    fetchComments = async (asin) => {
        try {

            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, options)

            if (response.ok) {
                let data = await response.json()
                //console.log(data)
                this.setState({ comment: data })
            } else {
                console.log("Error while fetching data")
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <Container>
                <h2 className="heading">Comments For the books</h2>
                <Row>

                    {this.state.comment.slice(0, 20).map((review) => (
                        <Col xs={6}>
                            <Card className="mb-2">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Rating ={review.rate}</Card.Subtitle>
                                    <Card.Text>
                                        Comments:{review.comment}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>))}

                </Row>
            </Container>
        )
    }
}

export default CommentArea