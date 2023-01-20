import React,{useState,useEffect} from "react";
import axios from 'axios'
import logo from "../../components/images/GoalRadarLogo.png";

const Contact=()=> {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const contactUsHandler=async(to:string,subject:string,text:string)=> { 
    await axios.get(
      `http://goalradar.com.tr:3000/v1/email/send?to=${to}&subject=${subject}&text=${text}`,
    );
  };
  
  const submitHandler = async (e:any) => {
    e.preventDefault()
    console.log(name,email,message)
    await contactUsHandler("goalradardev@gmail.com", name + "-" + email, message)
    alert("Mesaj basari ile gonderildi!")
    setName('')
    setEmail('')
    setMessage('')
  }

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
}

export default Contact;
