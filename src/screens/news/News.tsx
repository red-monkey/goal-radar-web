import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../../components/images/Football.jpg";

function News() {
  return (
    <div className="news-container">
      <div className="news-title">GOAL RADAR’DAN HABERLER</div>
      <div className="news-body">
        <div className="news-body-ad-column">
          <p className="news-body-ad-text">
            Google Youtube Marketing Reklam Alanı
          </p>
        </div>
        <div className="news-body-column">
          <div className="news-body-row1">
            <div className="row1-item">
              <img src={image} alt="" width={"100%"} height={"100%"} />
              <p className="row1-item-text">Yeni Hoca Belli Oldu!</p>
            </div>
            <div className="row1-item">
              <img src={image} alt="" width={"100%"} height={"100%"} />
              <p className="row1-item-text">Gökhan Zan:"En iyisi o"</p>
            </div>
            <div className="row1-item">
              <img src={image} alt="" width={"100%"} height={"100%"} />
              <p className="row1-item-text">Merih Demiral Şoku</p>
            </div>
            <div className="row1-item">
              <img src={image} alt="" width={"100%"} height={"100%"} />
              <p className="row1-item-text">
                Ayak Bileği Kırıldı! Dünya Kupası...
              </p>
            </div>
          </div>
          <div className="news-body-row2">
            <div className="row2-item">
              <Carousel className="h-100">
                <Carousel.Item className="h-100">
                  <img
                    className="d-block w-100 h-100"
                    src={image}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="h-100">
                  <img
                    className="d-block w-100 h-100"
                    src={image}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="h-100">
                  <img
                    className="d-block w-100 h-100"
                    src={image}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="news-body-column">
              <div className="row2-1-item">
                <p className="news-body-ad-text">
                  Google Youtube Marketing Reklam Alanı
                </p>
              </div>
              <div className="row2-2-item">
                <img src={image} width={"100%"} height={"100%"} alt="" />
                <p className="row2-item-text">
                  Dünya Kupası elemelerinde dev heyecan! işte A millilerin
                  kadrosu
                </p>
              </div>
            </div>
          </div>
          <div className="news-body-row3">
            <div className="row3-item">
              <img src={image} width={"100%"} height={"70%"} alt="" />
              <p className="row3-item-text">
                A milli takımda iskoçya mesaisi başladı
              </p>
            </div>
            <div className="row3-item">
              <img src={image} width={"100%"} height={"70%"} alt="" />
              <p className="row3-item-text">
                Claveland Kaybetmeye devam ediyor
              </p>
            </div>
            <div className="row3-item">
              <img src={image} width={"100%"} height={"70%"} alt="" />
              <p className="row3-item-text">
                TFF Fiar-Play / Adil Oyun Ödülleri töreni yapıldı
              </p>
            </div>
          </div>
        </div>
        <div className="news-body-ad-column">
          <p className="news-body-ad-text">
            Google Youtube Marketing Reklam Alanı
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
