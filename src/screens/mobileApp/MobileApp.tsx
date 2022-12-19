import React from "react";
import mobileapp from "../../components/images/mobileapp.png";
import card1 from "../../components/images/card1.png";
import card2 from "../../components/images/card2.png";
import card3 from "../../components/images/card3.png";
import card4 from "../../components/images/card4.png";
import card5 from "../../components/images/card5.png";
import card6 from "../../components/images/card6.png";

function MobileApp() {
  return (
    <div className="mobileapp-container">
      <div className="mobileapp-title">GOAL RADAR Mobil Uygulaması</div>
      <div className="mobileapp-body">
        <div>
          <img src={mobileapp} width={"100%"} height={"100%"} alt="" />
        </div>
        <div>
          <div className="card-container-title">GOAL RADAR VIP ÖZELLİKLERİ</div>
          <div className="card-container">
            <div className="card">
              <img src={card1} width={"100%"} alt="" />
              <div className="card-text">
                FV - Tips yapay zeka algoritması ile maç önü ve canlı bahis
                tahminleri
              </div>
            </div>
            <div className="card">
              <img src={card2} width={"100%"} alt="" />
              <div className="card-text">
                Profesyoneller için detaylı canlı maç istatikleri & oran
                degisimleri
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <img src={card3} width={"100%"} alt="" />
              <div className="card-text">
                Bahis oyuncuları için maç sonucu & gol, korner, kart yüzdeleri
              </div>
            </div>
            <div className="card">
              <img src={card4} width={"100%"} alt="" />
              <div className="card-text">
                Goal Radar: Canlı bahis takip sistemi
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <img src={card5} width={"100%"} alt="" />
              <div className="card-text">
                Günün gol, korner ve kart istatistigi en yuksek maclari
              </div>
            </div>
            <div className="card">
              <img src={card6} width={"100%"} alt="" />
              <div className="card-text">Gol, korner, kart tahminleri</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
