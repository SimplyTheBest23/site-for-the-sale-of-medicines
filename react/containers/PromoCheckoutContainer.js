import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { Footer } from 'react/components/common';
import { OrderActions } from 'redux/actions';
import { PromoCheckoutPaymentForm } from 'react/components/promo/desktop';
import { packages, normalizePhone } from 'helpers';
import moment from 'moment';

class PromoCheckout extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      selected: packages[0],
    };
  }

  submitBillingForm = values => {
    if (values.same === 'Yes') {
      values.address = this.props.initialValues.address;
      values.address2 = this.props.initialValues.address2;
      values.city = this.props.initialValues.city;
      values.email = this.props.initialValues.email;
      values.firstName = this.props.initialValues.firstName;
      values.lastName = this.props.initialValues.lastName;
      values.phoneNumber = this.props.initialValues.phoneNumber;
      values.postalCode = this.props.initialValues.postalCode;
      values.state = this.props.initialValues.state;
    }
    this.props.placeOrder({
      values,
      pack: this.state.selected,
      router: this.props.router,
      nextUrl: '/promo/desktop/upsell-1',
    });
  };

  render() {
    const { selected } = this.state;
    const shippingDate = moment(this.props.order.dateCreated).add(5, 'day');
    return (
      <React.Fragment>
        <div className="secone">
          <div className="container">
            <div className="s1inner">
              <div className="chktop">
                <img
                  src="/static/promo/desktop/images/ck-logo.png"
                  alt="Logo"
                  className="ck-logo"
                />
                <img
                  src="/static/promo/desktop/images/chktop.png"
                  alt="Steps"
                  className="chktop-img"
                />
                <img
                  src="/static/promo/desktop/images/ck-seal.png"
                  alt="Seal"
                  className="ck-ab"
                />
              </div>
              <div className="chk-lft">
                <p className="chklft-hding">
                  SELECT YOUR PACKAGE TODAY &amp; SAVE MORE!
                </p>
                {packages.map(pack => (
                  <div key={pack.id} className="pkg">
                    <a
                      href="javascript:void(0);"
                      className={pack.id === this.state.selected.id && 'picked'}
                      onClick={() => {
                        this.setState({ selected: pack });
                      }}
                    >
                      <div className="pkg-hdbox">
                        <p className="pkg-hding">{pack.title}</p>
                        <div className="freeship">
                          <p>Free Shipping</p>
                        </div>
                      </div>
                      <div className="pkg-contbox">
                        <div className="pkg-contboxlft">
                          <img
                            src={`/static/promo/desktop/images/${
                              pack.desktopImg
                            }`}
                            alt="Bottle Package"
                            className="pkg-bt0"
                          />
                        </div>
                        <div className="pkg-contboxrgt">
                          <p className="pkgtype-hding">{pack.msg}</p>
                          <p className="pkgcont-hding">
                            REGULAR PRICE {pack.regularPrice}
                          </p>
                          <p className="pkgcont-price">
                            {pack.price}
                            <span>/ea</span>
                          </p>

                          <div
                            className="select-btn"
                            style={{
                              display:
                                selected.id !== pack.id ? 'block' : 'none',
                            }}
                          />
                          <div
                            className="select-btn-selected"
                            style={{
                              display:
                                selected.id === pack.id ? 'block' : 'none',
                            }}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <div className="summary-box">
                  <p className="smry-hding">Order Summary</p>
                  <div className="clearall" />
                  <div className="smry-lft">
                    <p className="smry-lfttxt">
                      Your Order is estimated
                      <br /> to arrive by {shippingDate.format('dddd')},
                      <br /> <span>{shippingDate.format('ll')}</span>
                    </p>{' '}
                    <img
                      src="/static/promo/desktop/images/smryimg.png"
                      alt="Delivery Icon"
                      className="smryimg"
                    />{' '}
                  </div>
                  <div className="smry-rgt">
                    <ul className="smrylist">
                      <li>
                        american science
                        <br />{' '}
                        <span id="pkg-name">{this.state.selected.title}</span>
                      </li>
                      <li id="" style={{ fontWeight: 400 }} />
                      <li>Shipping and Handling</li>
                      <li id="shp">$0.00</li>
                      <li>Total</li>
                      <li id="total" style={{ fontWeight: 600 }}>
                        {this.state.selected.packagePrice}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chk-rgt">
                <div className="chkfrm-top">
                  <div className="sldrtxt" id="fades">
                    <p>
                      <img
                        src="/static/promo/desktop/images/eye.png"
                        alt="Eye Icon"
                      />{' '}
                      13 others are viewing this offer right now!
                    </p>
                    <p>
                      <img
                        src="/static/promo/desktop/images/eye.png"
                        alt="Eye Icon"
                      />{' '}
                      25 people purchased this in the last hour
                    </p>
                  </div>
                </div>
                <PromoCheckoutPaymentForm onSubmit={this.submitBillingForm} />
                <div className="chkfrm-btm">
                  <img
                    src="/static/promo/desktop/images/chk-frmbtm.png"
                    alt="Secure icon"
                  />
                </div>
                <div className="clearall" />
                <div className="moneyback-box">
                  <img
                    src="/static/promo/desktop/images/moneyback.jpg"
                    alt="Money Back Icon"
                    className="moneyback-seal"
                  />
                  <p className="moneyback-txt1">100% Money Back Guarantee </p>
                  <p className="moneyback-txt">
                    Your purchase is insured by our 90 Day Money Back Guarantee,
                    which ensures that if you are completely satisfied with the
                    results, we will refund your money, no questions asked.{' '}
                  </p>
                </div>
                <img
                  src="/static/promo/desktop/images/shop.png"
                  alt="Shop Icon"
                  className="shop"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer promo />
      </React.Fragment>
    );
  }
}

const PromoCheckoutWithRouter = withRouter(PromoCheckout);

const mapStateToProps = reduxState => {
  const {
    orderId,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    postalCode,
    phoneNumber,
    emailAddress,
  } = reduxState.order.order;
  const initialValues = {
    same: 'Yes',
    orderId,
    firstName,
    lastName,
    address: address1,
    address2,
    city,
    state,
    postalCode,
    phoneNumber: normalizePhone(phoneNumber),
    email: emailAddress,
  };
  return {
    order: reduxState.order.order,
    initialValues,
  };
};

const PromoCheckoutContainer = connect(mapStateToProps, { ...OrderActions })(
  PromoCheckoutWithRouter,
);

export { PromoCheckoutContainer };
