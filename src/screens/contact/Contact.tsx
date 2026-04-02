import { FormEvent, useState } from "react";
import axios from "axios";
import logo from "../../components/images/GoalRadarLogo.png";
import { appConfig } from "../../config";

const SUPPORT_EMAIL = "goalradardev@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUsHandler = async (to: string, subject: string, text: string) => {
    if (!appConfig.API_URL) {
      throw new Error("API URL is not configured");
    }

    const params = new URLSearchParams({
      to,
      subject,
      text,
    });

    await axios.get(`${appConfig.API_URL}/email/send?${params.toString()}`);
  };

  const openMailClient = (subject: string, text: string) => {
    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(text)}`;

    window.location.href = mailtoUrl;
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `${name} - ${email}`;

    try {
      await contactUsHandler(SUPPORT_EMAIL, subject, message);
      alert("Mesaj basari ile gonderildi!");
    } catch (error) {
      alert("Mesaj servisine ulasilamadi. E-posta uygulamaniz aciliyor.");
      openMailClient(subject, message);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

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
        <form className="contact-form-container" onSubmit={submitHandler}>
          <label>
            <input
              type="text"
              name="name"
              placeholder="isim,Soyad:"
              className="form-label"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="E-posta Adresi:"
              className="form-label"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              name="message"
              className="form-label"
              placeholder="Mesajınızı buraya yazabilirsiniz:"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <input type="submit" value="Gönder" className="submitButton" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
