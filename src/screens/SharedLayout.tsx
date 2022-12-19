import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import appinfoimg from "../components/images/appinfo.png";
import downloadnow from "../components/images/downloadnow.png";

function SharedLayout() {
  return (
    <div className="shared-container">
      <Navbar />
      <div className="appinfo">
        <img src={appinfoimg} width={"95%"} height={"100%"} alt="" />
        <div className="downloadnow">
          <img src={downloadnow} width={"100%"} height={"100%"} alt="" />
          <a
            href="https://www.google.com/"
            className="appstorelink"
            role="link"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.google.com/"
            className="googleplaylink"
            role="link"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.google.com/"
            className="downloadnowlink"
            role="link"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default SharedLayout;
