import { style } from "@mui/system";
import React from "react";
import { Small_Logo } from "../../assets";
import { card } from "../../constants";
import styles from "./card.module.scss";

const ProductCard = ({ img, logo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_wrapper}>
        <img className={styles.brand_image} src={img} alt="" />
        <img className={styles.small_logo} src={logo} alt="" />
        <span className={styles.time_out}>son 12 gün</span>
      </div>
      <div className={styles.card_text}>
        <span>2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!</span>
        <button className={styles.more_button}>{card.more_button}</button>
      </div>
    </div>
  );
};

export default ProductCard;
