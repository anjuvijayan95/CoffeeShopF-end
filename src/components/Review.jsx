import React from "react";
import css from "./Review.module.css";
import reviewSmile from "./images/review.png";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Review = () => {
  return (
    <>
      <section className={css.review} id='review'>
        <h1 className={css.heading}>
          customer's <span>reviews</span>
        </h1>
        <div className={css.boxContainer}>
          <div className={css.box}>
            <img src={reviewSmile} alt="" className={css.smile}/>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              distinctio omnis fugiat unde maxime sed, nisi ratione placeat
              eveniet accusamus dolorum nesciunt. Ipsam et earum impedit magnam
            </p>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
              alt="" className={css.customer}
            />
            <h3>john doe</h3>
            <div className={css.star}>
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarHalf className={css.s} />
            </div>
          </div>

          <div className={css.box}>
          <img src={reviewSmile} alt="" className={css.smile}/>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              distinctio omnis fugiat unde maxime sed, nisi ratione placeat
              eveniet accusamus dolorum nesciunt. Ipsam et earum impedit magnam
            </p>
            <img
              src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
              alt="" className={css.customer}
            />
            <h3>john doe</h3>
            <div className={css.star}>
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarHalf className={css.s} />
            </div>
          </div>

          <div className={css.box}>
          <img src={reviewSmile} alt="" className={css.smile}/>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              distinctio omnis fugiat unde maxime sed, nisi ratione placeat
              eveniet accusamus dolorum nesciunt. Ipsam et earum impedit magnam
            </p>
            <img
              src="https://images.unsplash.com/photo-1516824012805-8fc7965afdbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA2fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="" className={css.customer}
            />
            <h3>john doe</h3>
            <div className={css.star}>
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarFill className={css.s} />
              <BsStarHalf className={css.s} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
