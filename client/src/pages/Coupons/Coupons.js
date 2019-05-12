import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Choice } from "../../components/Choice";
import { Input, FormBtn } from "../../components/Form";

class Coupons extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  

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
    API.getCoupons()
      .then(res =>
        this.setState({ Coupons: res.data, title: "", source: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCoupon = id => {
    API.deleteCoupon(id)
      .then(res => this.loadCoupons())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.source) {
      API.saveCoupon({
        title: this.state.title,
        source: this.state.source,
        description: this.state.description
      })
        .then(res => this.loadCoupons())
        .catch(err => console.log(err));
    }
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Coupons Based on Your Interests</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="search"
                placeholder="search your coupons (not required)"
              />
              <FormBtn
                disabled={!(this.state.REPLACE && this.state.REPLACE)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Final Coupon Results</h1>
            </Jumbotron>
            {this.state.coupons.length ? (
              <Choice>
                <List>
                  {this.state.coupons.map(coupon => (
                    <ListItem key={coupon._id}>
                      <Link to={"/coupons/" + coupon._id}>
                        <strong>
                          {coupon.title} by {coupon.source}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteCoupon(coupon._id)} />
                    </ListItem>
                  ))}
                </List>
                <ShoppingBtn onClick={() => this.ShoppingListBtn(coupon._id)} />
                {/* Change both buttons to submit all coupons to either list onClick */}
                <WishBtn onClick={() => this.WishListBtn(coupon._id)} />
              </Choice>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Coupons;
