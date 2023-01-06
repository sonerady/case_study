import { useEffect, useState } from "react";
import { Brand_logo } from "../../assets";
import styles from "./switch.module.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Loading from "../loading/Loading";
import {
  fetchTagsRequest,
  fetchTagsSuccess,
  fetchTagsFailure,
} from "../../actions/tagsActions";

const Switch = () => {
  const dispatch = useDispatch();
  const { tags, isLoading, error } = useSelector((state) => state.tags);
  const [switchData, setSwitchData] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      dispatch(fetchTagsRequest());
      try {
        const response = await axios.get(
          "https://api.extrazone.com/tags/list",
          {
            headers: {
              Authorization: "Bearer your-api-key",
              "Content-Type": "application/json",
              "X-Country-Id": "TR",
              "X-Language-Id": "TR",
            },
          }
        );
        const data = response.data;
        dispatch(fetchTagsSuccess(data));
        setSwitchData(data);
      } catch (error) {
        dispatch(fetchTagsFailure(error));
      }
    };
    fetchTags();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className={` ${styles.wrapper} container`}>
      <ul>
        {switchData.map((item, index) => {
          return (
            <li key={index}>
              <div className={styles.image_wrapper}>
                <img src={item.IconUrl} alt="brand logo" />
              </div>
              <span>{item.Name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Switch;
