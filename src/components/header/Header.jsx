import styles from "./header.module.scss";
import { Logo, User } from "../../assets/index";
import { buttonTexts } from "../../constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <Link to="/" className={styles.left_side}>
        <img src={Logo} alt="Main Logo" />
      </Link>
      <div className={styles.right_side}>
        <button className={styles.login_btn}>
          <span>{buttonTexts.login}</span>
        </button>
        <button className={styles.user_btn}>
          <img src={User} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
