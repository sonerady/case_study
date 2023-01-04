import { useState } from "react";
import { Discover, Navbar_Logo, Star } from "../../assets";
import { navbar } from "../../constants";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isDisable, setIsDisable] = useState(true);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.item_wrapper}>
        <div className={styles.left_btn}>
          <img src={Discover} alt="Discover" />
          <span>{navbar.discover}</span>
        </div>
        <div className={styles.center_btn}>
          <img src={Navbar_Logo} alt="" />
        </div>
        <div
          className={`${styles.right_btn} ${isDisable && styles.btn_disable}`}
        >
          <img src={Star} alt="" />
          <span>{navbar.wallet}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
