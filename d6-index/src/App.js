import './App.css';
import BookList from './Components/BookList';
import HorrorArray from './Data/horror.json'
import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import CommentArea from './Components/CommentArea';
import { Container, Row, Col } from "react-bootstrap"


class App extends Component {
  state = {
    asin: ""
  }

  handleBooks = (newBookAsin) => {
    this.setState({
      asin: newBookAsin
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={6}>
              <BookList books={HorrorArray} handleBooks={this.handleBooks} />
            </Col>

            <Col md={6}>
              <CommentArea asin={this.state.asin} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
