import cls from "./header.module.scss";
import "../../../styles/app.scss";

export default function Header() {
  return (
    <section className={`${cls.wrapper}`}>
      <div className={cls.ad}>
        <p>new arrival</p>
        <h1> discover our <br />new collection</h1>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          quisquam dignissimos, fugit sapiente omnis modi, eligendi aut
        </span>
        <button>buy now</button>
      </div>
    </section>
  );
}
