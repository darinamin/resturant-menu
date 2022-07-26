import style from "@/styles/submenu.module.css";
import Image from "next/image";
function Submenu() {
  return (
    <div className={style.container}>
      <div>
        <div>
          <Image
            src={"/burger.png"}
            width={400}
            height="400px"
            layout="fixed"
          />
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
          <Image src={"/burger.png"} height="100px" layout="fixed" width={80} />
        </div>
        <div className={style.meal}>
          <Image
            src={"/Potatos.png"}
            height="100px"
            layout="fixed"
            width={80}
          />
        </div>
        <div className={style.meal}>Pizza</div>
        <div className={style.meal}>4</div>
        <div className={style.meal}>5</div>
      </div>
    </div>
  );
}
export default Submenu;
