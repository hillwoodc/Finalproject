import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

class ShoppingList extends Component {
  state = {
    coupons: [],
    title: "",
    source: "",
    description: ""
  };

  componentDidMount() {
    this.loadCoupons();
  }

  loadCoupons = () => {
    API.saveBuy()
      .then(res =>
        this.setState({ Coupons: res.data, title: "", source: "", description: "" })
      )
      .catch(err => console.log(err));
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Your Shopping List
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <List>
          <ListItem>
            <Row>
              <Col size="md-10 md-offset-1">
                <article>
                  <h3>{this.state.coupon.title} from {this.state.coupon.source}</h3>
                  <p>
                    {this.state.coupon.description}
                  </p>
                </article>
              </Col>
            </Row>
          </ListItem>
        </List>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search Results</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShoppingList;
