import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./detail.module.scss";
import { useDispatch } from "react-redux";
import {
  fetchDetailFailure,
  fetchDetailSuccess,
  fetchDetailRequest,
} from "../actions/detailsActions";
import { useParams } from "react-router-dom";
import { Left_Arrow } from "../assets";
import { useSelector } from "react-redux";
import Time from "../components/Time/Time";
import Loading from "../components/loading/Loading";
import { URLS } from "../constants";

const Detail = ({ setIsVisible }) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  // useParams hookunu kullanarak url'den id'yi alıyoruz.
  const { id } = useParams();

  const handleGoBack = () => {
    setIsVisible(false);
    navigate(-1);
  };

  useEffect(() => {
    const getDetail = async () => {
      dispatch(fetchDetailRequest());
      try {
        const response = await axios.get(`${URLS.DETAILS_URL}${id}`, {
          headers: {
            Authorization: "Bearer your-api-key",
            "Content-Type": "application/json",
            "X-Country-Id": "TR",
            "X-Language-Id": "TR",
          },
        });
        const data = response.data;
        setDetails(data);
        dispatch(fetchDetailSuccess(data));
      } catch (error) {
        dispatch(fetchDetailFailure(error));
      }
    };
    getDetail();
  }, [dispatch]);

  if (details.length === 0) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.time_wrapper}>
          <Time />
        </div>
        <div onClick={handleGoBack} className={styles.back_button_wrapper}>
          <img
            className={styles.back_button}
            src={Left_Arrow}
            alt="Back Button"
          />
        </div>
        <img
          className={styles.brand_image}
          src={details.ImageUrl}
          alt="Brand Image"
        />
        <img
          className={styles.brand_icon}
          src={details.BrandIconUrl}
          alt="Brand Icon"
        />
      </div>
      <div className={`container ${styles.bottom}`}>
        <h2 dangerouslySetInnerHTML={{ __html: details.Title }}></h2>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: details.Description }}
        ></div>
      </div>
      <div className={styles.btn_wrapper}>
        <div
          className={styles.sub_btn}
          dangerouslySetInnerHTML={{
            __html: details.BrandPromotionCardParticipationText,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Detail;
