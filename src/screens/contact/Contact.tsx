import React from "react";
import logo from "../../components/images/GoalRadarLogo.png";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">GOAL RADAR’A ULAŞIN</div>
      <div className="contact-logo-container">
        <img src={logo} width={"100%"} alt="logo" />
      </div>
      <div className="contact-body">
        <p className="contact-text">
          Tüm öneri ve şikayetleriniz için iletişim formunu doldurabilir ve
          bizlere ulaşabilirsiniz. En kısa sürede size dönüş sağlanacaktır.
        </p>
        <form className="contact-form-container">
          <label>
            <input
              type="text"
              name="name"
              placeholder="isim,Soyad:"
              className="form-label"
            />
          </label>
          <label>
            <input
              type="text"
              name="name"
              placeholder="E-posta Adresi:"
              className="form-label"
            />
          </label>
          <label>
            <input
              type="text"
              name="name"
              className="form-label"
              placeholder="Mesajınızı buraya yazabilirsiniz:"
            />
          </label>
          <input type="submit" value="Gönder" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
