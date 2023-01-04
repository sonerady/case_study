import React from "react";
import { Brand_logo } from "../../assets";
import styles from "./switch.module.scss";

const Switch = () => {
  return (
    <div className={` ${styles.wrapper} container`}>
      <ul>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
        <li>
          <img src={Brand_logo} alt="brand logo" />
          <span>Burger King</span>
        </li>
      </ul>
    </div>
  );
};

export default Switch;
