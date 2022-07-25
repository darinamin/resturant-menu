import style from "styles/submenu.module.css";
function Submenu() {
  return (
    <div className={style.container}>
      <div>
        <div>
          <img src="burger.png" width={500} />
          <div className={style.details}>
            <h2>Cheeseburger</h2>
            <p>weight - 350 g</p>
            <h1 className={style.price}>$7.99</h1>
            <p>Cheeseburger , Double Cheeseburger</p>
          </div>
        </div>
      </div>
      <div className={style.mealContainer}>
        <div className={style.meal}>
          <img src="burger.png" width={80} />
        </div>
        <div className={style.meal}>
          <img src="Potatos.png" width={80} />
        </div>
        <div className={style.meal}>Pizza</div>
        <div className={style.meal}>4</div>
        <div className={style.meal}>5</div>
        <div className={style.meal}>6</div>
        <div className={style.meal}>7</div>
        <div className={style.meal}>8</div>
        <div className={style.meal}>9</div>
        <div className={style.meal}>10</div>
      </div>
    </div>
  );
}
export default Submenu;
