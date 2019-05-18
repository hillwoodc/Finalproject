// *** I don't think we need a Post Form. Please double check****

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCoupons } from "../../actions/coupons";

var request = new XMLHttpRequest()
 
      componentDidMount() {
        request.open('GET', 'https://discountapi.com/', true)
      };

        request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
          data.forEach = coupon => {
            return(
              <container>
               `<card>
                  <h1>
                  ${coupon.title}
                  </h1>
                  <div>
                  ${coupon.image}
                  </div>
                  <p>
                  ${coupon.description}
                  </p>
                  <div>
                  ${coupon.expires}
                  </div>
                  <button className='left'>
                  ${coupon.shop} 
                  </button>
                  <button className='right'>
                  ${coupon.wish}
                  </button>
                </card>`
              </container>
              
            );
          }}}

      const GetAllCoupons = ({addCoupons}) => { 
      request.send()
      };
  

    GetAllCoupons.propTypes = {
      addCoupons: PropTypes.func.isRequired
    };
    
    export default connect(
      null,
      { addCoupons }
    )(GetAllCoupons);
  

  } else {

    const GetAllCoupons = ({addCoupons}) => {
      return (
        <container className='container'>
          <div className=''>
            <h3>YOUR COUPONS...</h3>
          </div>
        </container>
      );
    }
  
  GetAllCoupons.propTypes = {
    addCoupons: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { addCoupons }
  )(GetAllCoupons);
  }

  





