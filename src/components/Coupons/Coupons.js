import React from 'react';
import './Coupons.css';

const Coupons = () => {
    return (
        <div className="coupouns" id="coup">
            <div className="coupon-container">
                <img src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/coupon.jpg" alt="img" />
            </div>
            <div className="coupon-info">
                <h3>Coupons</h3>
                <p>You can apply different coupons to get extra discount on selected courses.Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.
                </p>
                <span>Already have Coupon?</span>
                <hr/>
                <a href="./"> 
                <i className="fas fa-chevron-right"></i> Redeem 
                </a>
            </div>
        </div>
    );
}

export default Coupons;
