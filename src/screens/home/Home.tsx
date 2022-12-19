import React from "react";
import pascalnouma from "../../components/images/pascalnouma.png";
import ahmetercanlar from "../../components/images/ahmetercanlar.png";
import cantongo from "../../components/images/cantongo.png";
import umitkaran from "../../components/images/umitkaran.png";
import ahmetercanlar2 from "../../components/images/ahmetercanlar2.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-title">GOAL RADAR EDİTÖRLERİMİZ</div>
      <div className="home-text">
        <b>Pascal Nouma ve Ümit Karan</b> gibi Türk futboluna damga vuran
        futbolcular, Türk Futboluna yön veren yazarlarımızdan
      </div>
      <div className="home-text">
        <b>
          Can Tongo, Ahmet Ercanlar, Atakan Kurt, Serhan Türk, Uğur Demirkırdı,
          Ahmet Selim Kul,
        </b>
        Türkiye'nin en iyi spor spikerlerinden biri <b>Emre Tilev</b>
      </div>
      <div className="home-text">
        Türkiyede iddaa denince akla isimlerden biri <b>Genco Boran</b> Goal
        Radar uygulamasında sizlerle olacak
      </div>
      <div className="editors-container">
        <div className="editor-container">
          <img src={pascalnouma} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">ESKİ FUTBOLCU</div>
        </div>
        <div className="editor-container">
          <img src={umitkaran} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
        <div className="editor-container">
          <img src={cantongo} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
        <div className="editor-container">
          <img src={ahmetercanlar} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
        <div className="editor-container">
          <img src={ahmetercanlar2} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
        <div className="editor-container">
          <img src={pascalnouma} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL TV SPİKERİ</div>
        </div>
        <div className="editor-container">
          <img src={pascalnouma} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
        <div className="editor-container">
          <img src={pascalnouma} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
        <div className="editor-container">
          <img src={pascalnouma} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
        <div className="editor-container">
          <img src={pascalnouma} width={"100%"} height={"85%"} alt="" />
          <div className="editor-text">FUTBOL YAZARI</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
