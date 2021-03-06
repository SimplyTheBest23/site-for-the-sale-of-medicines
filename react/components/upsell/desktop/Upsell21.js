import React from 'react';
import { PromoSession } from 'react/components/common';
import { getQueryString } from 'helpers';

class Upsell21 extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(215, '/promo/desktop/thankyou');
  };
  skipUpsell = () => {
    window.location.assign(`/promo/desktop/thankyou?${getQueryString()}`);
  };
  render() {
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage2" />
        <div className="upsell-strip">
          <h3>WAIT! YOU QUALIFY FOR A LIMITED TIME DISCOUNT</h3>
          <p>
            Add 1 Bottle Of <strong>CBD Pain Relief Warming Balm</strong> To
            Your Order Today!{' '}
          </p>
        </div>
        <div className="up-mid-box-right">
          <img
            src="/static/assets/images/upsell2/single-jar.png"
            alt="Single Jar"
            className="up-product-4"
          />
          <img
            src="/static/assets/images/upsell2/up-arw1.png"
            style={{ position: 'absolute', left: '220px', top: '400px' }}
            alt="Upsell Arrow"
          />
          <div className="up-rgt-content-opt2">
            <p className="up-txt1">Get Instant Pain Relief</p>
            <p className="with-txt">with</p>
            <p className="up-txt2">CBD Warming Balm</p>
            <div className="price-box">
              <p className="price-box-txt1">
                Buy 1 Jar Of CBD Pain Relief Balm
              </p>
              <p className="price-box-txt2">Save 30% Today</p>
              <p className="price-box-txt3">
                <img
                  src="/static/assets/images/upsell2/arrow-left.png"
                  alt="Arrow Left"
                  className="arrow-left"
                  width="77"
                  height="33"
                />
                $97.00{' '}
                <img
                  src="/static/assets/images/arrow-right.png"
                  alt="Arrow Right"
                  className="arrow-right"
                  width="77"
                  height="33"
                />
              </p>
            </div>
            <div className="bnt-sec">
              <a href="javascript:void(0)" onClick={this.upgrade}>
                <img
                  src="/static/assets/images/upsell2/ord-btn.png"
                  alt="Order Button"
                  className="ord-btn pulse"
                  width="370"
                  height="71"
                />
              </a>
              <p className="thanks-txt">
                <a href="javascript:void(0)" onClick={this.skipUpsell}>
                  <img
                    src="/static/assets/images/upsell2/cut-icon.png"
                    alt="Cut Icon"
                    className="cut-icon"
                    width="15"
                    height="15"
                  />
                  {"No, I don't want better results."}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="upsell-strip">
          <h4 className="strip-txt3">
            BENEFITS OF CBD WARMING BALM INCLUDE ...
          </h4>
        </div>
        <div className="clearall" />
        <div className="up-bottom-box box1" style={{ height: '410px' }}>
          <img
            src="/static/assets/images/upsell2/full-spect.jpg"
            alt="Full Spect"
          />
          <p className="box-txt1">FULL SPECTRUM FORMULA</p>
          <p className="box-txt2">
            CBD Warming Balm is INFUSED with highly a concentrated CBD which is
            known for its medicinal properties and yields a more effective
            solution than any balm in the world.
          </p>
        </div>

        <div className="up-bottom-box" style={{ height: '410px' }}>
          <img
            src="/static/assets/images/upsell2/up-bx2-bg.jpg"
            alt="Upsell Box Bg"
          />
          <p className="box-txt1">OFFERS ANTIOXIDANT SUPPORT</p>
          <p className="box-txt2">
            CBD Warming Balm works at a cellular level to combat free radical
            damage, boost overall immunity, and provides healing as well as
            aromatherapy benefits.
          </p>
        </div>

        <div className="up-bottom-box" style={{ height: '410px' }}>
          <img
            src="/static/assets/images/upsell2/pain-releaf.jpg"
            alt="Pain Releaf"
          />
          <p className="box-txt1">INSTANTLY RELIEVES Chronic Pain</p>
          <p className="box-txt2">
            Melt away muscle fatigue, pain, swelling, and discomfort with
            American Science CBD WARMING {"BALM'S"} deep, penetrating warmth
            providing FAST relief that will amaze you.
          </p>
        </div>

        <div className="bnt-sec">
          <a href="javascript:void(0)" onClick={this.upgrade}>
            <img
              src="/static/assets/images/upsell2/ord-btn.png"
              alt="Oder Button"
              className="ord-btn pulse"
              width="370"
              height="71"
            />
          </a>
          <p className="thanks-txt">
            <a href="javascript:void(0)" onClick={this.skipUpsell}>
              <img
                src="/static/assets/images/upsell2/cut-icon.png"
                alt="Cut Icon"
                className="cut-icon"
                width="15"
                height="15"
              />
              {"No, I don't want better results."}
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export { Upsell21 };
