import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <div className="footer-item-heading">CONTACT US</div>
        <div className="footer-item-text">
          287A Outram Road, Singapore 169070
        </div>
        <div className="footer-item-text">chat@noodlefactory.ai</div>
      </div>
      <div className="footer-item">
        <div className="footer-item-heading">INFORMATION</div>
        <div className="footer-item-text">Privacy Policy</div>
        <div className="footer-item-text">End User License Agreement</div>
        <div className="footer-item-text">Terms of Service</div>
      </div>
      <div className="footer-item">
        <div className="footer-item-text">LinkedIn</div>
        <div className="footer-item-text">Facebook</div>
        <div className="footer-item-text">Twitter</div>
        <div className="footer-item-text">Instagram</div>
        <div className="footer-item-text">Youtube</div>
      </div>
      <div className="footer-item-form">
        <div className="footer-item-heading">
          {" "}
          SUBSCRIBE TO OUR MAILING LIST
        </div>
        <div className="footer-item-text">
          Every month, we share with you tips and news on AI teaching
          assistants. Get first dibs on our latest updates too!
        </div>
        <div>
          <input
            className="footer-item-email-input"
            placeholder="Email Address"
          />
          <button className="footer-item-subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
