import { style } from "@mui/system";
import React from "react";
import { Small_Logo } from "../../assets";
import { card } from "../../constants";
import styles from "./card.module.scss";

const ProductCard = ({ img, logo, title, differenceInTime }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <img className={styles.brand_image} src={img} alt="" />
          <img className={styles.small_logo} src={logo} alt="" />
          <span className={styles.time_out}>son {differenceInTime} gün</span>
        </div>
        <div className={styles.card_text}>
          <span dangerouslySetInnerHTML={{ __html: title }}></span>
          <button className={styles.more_button}>{card.more_button}</button>
        </div>
      </div>
      <span className={styles.sub_color}>
        <p></p>
      </span>
    </div>
  );
};

export default ProductCard;
