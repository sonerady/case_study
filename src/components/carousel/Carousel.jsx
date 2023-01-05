import React, { useCallback, useState, useEffect } from "react";
import styles from "./carousel.module.css";
import ProductCard from "../card/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPromotionsRequest,
  fetchPromotionsSuccess,
  fetchPromotionsFailure,
} from "../../actions/promotionsActions";
import { Link } from "react-router-dom";

const defaultCardItems = [0, 1, 3];

const setCardStatus = (indexes, cardIndex) => {
  if (indexes.currentIndex === cardIndex) {
    return styles.active;
  } else if (indexes.nextIndex === cardIndex) {
    return styles.next;
  } else if (indexes.previousIndex === cardIndex) {
    return styles.prev;
  }
  return styles.inactive;
};

const CardWrapper = ({ containerClassName, children }) => {
  const cardItems = children || defaultCardItems;
  const [indexes, setIndexes] = useState({
    previousIndex: cardItems.length - 1,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  const handleLeftButton = useCallback(() => {
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: cardItems.length - 2,
        currentIndex: cardItems.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes((prevState) => ({
        nextIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        previousIndex:
          prevState.currentIndex - 1 <= 0
            ? cardItems.length - 1
            : prevState.currentIndex - 2,
      }));
    }
  }, [indexes.currentIndex]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? handleCardTransition() : handleLeftButton();
  };

  const dispatch = useDispatch();
  const [promotions, setPromotions] = useState([]);

  // FETCH DATA FROM API
  useEffect(() => {
    const getPromotion = async () => {
      dispatch(fetchPromotionsRequest());
      try {
        const response = await axios.get(
          "https://api.extrazone.com/promotions/list?Channel=PWA",
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
        // Burada elimde tek bir markanının datası olduğu için verileri çoğaltıyorum.
        const multipliedData = [];
        for (let i = 0; i < 3; i++) {
          multipliedData.push(...data);
        }
        dispatch(fetchPromotionsSuccess(multipliedData));
        setPromotions(multipliedData);
      } catch (error) {
        dispatch(fetchPromotionsFailure(error));
      }
    };
    getPromotion();
  }, [dispatch]);

  // DIFFRENCE TIME
  const now = new Date();
  const futureDate = new Date(2023, 1, 14);
  const differenceInTime = futureDate.getTime() - now.getTime();
  const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

  return (
    <div className={`${styles.container} `}>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`${styles.cardCarousel} ${
          containerClassName ? containerClassName : styles.carouselDefault
        }`}
      >
        {promotions.map((item, index) => {
          return (
            <Link
              to={`/campaign/${item.SeoName}/${item.Id}`}
              key={index}
              className={` ${styles.card} ${setCardStatus(indexes, index)}`}
            >
              <ProductCard
                img={item.ImageUrl}
                logo={item.BrandIconUrl}
                title={item.Title}
                differenceInTime={differenceInDays.toFixed()}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardWrapper;
