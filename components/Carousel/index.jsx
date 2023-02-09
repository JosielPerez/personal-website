import styles from "./styles.module.css";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Carousel(props) {
  // (Card Width + Gap Width)
  const CardWidthPlusGap = 900 + 50;
  // (Card Width + Gap Width)
  const CardWidthPlusGapMobile = 450 + 50;
  const TotalCards = 4;

  // How to get Last card position

  const [xPos, setXPos] = useState(0);
  const LastCardPosition = CardWidthPlusGap * (TotalCards - 1);

  function handleRightClick() {
    console.log(xPos);
    console.log("Last:" + LastCardPosition);
    if (xPos * -1 >= LastCardPosition) {
      setXPos(0);
      return;
    }
    setXPos(xPos - CardWidth);
  }

  function handleLeftClick() {
    console.log(xPos);
    if (xPos * -1 <= 0) {
      setXPos(-LastCardPosition);
      return;
    }
    setXPos(xPos + CardWidth);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <BsFillArrowRightCircleFill
          onClick={handleRightClick}
          className={styles.right_button}
        />
        <BsFillArrowRightCircleFill
          onClick={handleLeftClick}
          className={styles.left_button}
        />
        <div className={styles.container}>
          <div
            style={{ transform: `translate(${xPos}px)` }}
            className={styles.bar}
          >
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
