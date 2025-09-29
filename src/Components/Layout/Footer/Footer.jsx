import "../../../styles/app.scss";
import cls from "./footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={cls.wrapper}>
        <div className={cls.first}>
          <h3>Funiro.</h3>
          <p>400 University Drive Suite 200 Coral<br /> Gables,<br /> FL 33134 USA</p>
        </div>
        <div className={cls.links}>
          <p className={cls.title}>Links</p>
          <Link className={cls.link} to="/">
            Home
          </Link>
          <Link className={cls.link} to="/shop">
            Shop
          </Link>
          <Link className={cls.link} to="/about">
            About
          </Link>
          <Link className={cls.link} to="/contact">
            Contact
          </Link>
        </div>
        <div className={cls.help}>
            <p className={cls.title}>Help</p>
          <Link className={cls.link} to="/">
            payment Options
          </Link>
          <Link className={cls.link} to="/shop">
            returns
          </Link>
          <Link className={cls.link} to="/about">
            privacy policies
          </Link>
        </div>
        <div>
            <p className={cls.title}>Newsletter</p>
            <div className={cls.inputfeild}>
                <input placeholder="Enter Your Email Address" type="text" />
                <button>SUBCSRIBE</button>
            </div>
        </div>
      </div>
      <div className={cls.copyRight}>
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}
