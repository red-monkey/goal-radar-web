import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsTelegram,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-socialmedia-container">
        <div className="footer-socialmedia">
          <a
            href="https://www.facebook.com/goalradarapp/"
            role="link"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook fill="#FFFFFF" size={"4vw"} />
          </a>
          <a href="#" role="link">
            <BsTelegram fill="#FFFFFF" size={"4vw"} />
          </a>
          <a
            href="https://mobile.twitter.com/goalradarapp"
            role="link"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter fill="#FFFFFF" size={"4vw"} />
          </a>
          <a
            href="https://www.instagram.com/goalradarapp/"
            role="link"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram fill="#FFFFFF" size={"4vw"} />
          </a>
          <a
            href="https://www.youtube.com/@goalradar6633/featured"
            role="link"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube fill="#FFFFFF" size={"4vw"} />
          </a>
        </div>
      </div>
      <div className="footer-info-container">
        <div className="footer-info-text">
          Goalradar.com.tr’de yer alan tüm sayısal veriler, 1200'den fazla
          futbol liginden canlı skorlar, gol atan oyuncular, futbol ilk yarı
          sonuçları kırmızı ve sarı kartlar, korner ve şut bilgileri, iddaa
          oranları, iddaa programı, maç sonuçları, statik ve tahmin bilgileri
          sadece bilgilendirme amaçlıdır. Bilgilerin doğruluğunu sağlamak için
          gereken gayret gösterilmektedir. Ancak bilgilerin doğruluğunun
          kontrolü kullanıcıların kendi sorumluluğundadır. Oluşabilecek
          hatalardan, maddi/manevi zararlardan goalradar.com.tr sorumlu
          tutulamaz.
        </div>
        <hr />
        <div className="footer-info-copyright">
          2022 GOALRADAR Tüm Hakları Saklıdır. All Right Reserved to
          GOALRADAR.com.tr 2022
        </div>
      </div>
    </div>
  );
}

export default Footer;
