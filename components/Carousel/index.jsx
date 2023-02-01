import styles from "./styles.module.css";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Carousel(props) {
  const [xPos, setXPos] = useState(0);
  const LastCardPosition = 2850;

  function handleRightClick() {
    if (xPos * -1 >= LastCardPosition) {
      setXPos(0);
      return;
    }
    setXPos(xPos - 950);
  }

  function handleLeftClick() {
    if (xPos * -1 <= 0) {
      setXPos(-LastCardPosition);
      return;
    }
    setXPos(xPos + 950);
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
