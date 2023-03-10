import React from "react";
import css from "./Blog.module.css";

const Blog = () => {
  return (
    <>
      <section className={css.blogs} id='blog'>
        <h1 className={css.heading}>
          our <span>blogs</span>
        </h1>

        <div className={css.boxContainer}>
          <div className={css.box}>
            <div className={css.image}>
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>

            <div className={css.content}>
              <a href="">tasty and refreshing coffee</a>
              <br />
              <span>by admin/21st may, 2022</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, ullam?
              </p>
              <button className={css.btn}>read more</button>
            </div>
          </div>

          <div className={css.box}>
            <div className={css.image}>
              <img
                src="https://media.istockphoto.com/id/884330976/photo/brown-beans-with-burlap-bag-on-the-wooden-table-harvest-of-coffee-in-different-countries.jpg?s=612x612&w=0&k=20&c=cKA4qEXH28HlAG3ucNBnQgAvLB0W96ABjFCagFdGxck="
                alt=""
              />
            </div>

            <div className={css.content}>
              <a href="">tasty and refreshing coffee</a>
              <br />
              <span>by admin/21st may, 2022</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, ullam?
              </p>
              <button className={css.btn}>read more</button>
            </div>
          </div>

          <div className={css.box}>
            <div className={css.image}>
              <img
                src="https://media.istockphoto.com/id/880466816/photo/ladys-hands-holding-cup-with-sth-heart-shaped.jpg?s=612x612&w=0&k=20&c=bfwjYYaUcHtwjCua__YIwOoD7NCVpBgCcfL3y7E3018="
                alt=""
              />
            </div>

            <div className={css.content}>
              <a href="">tasty and refreshing coffee</a>
              <br />
              <span>by admin/21st may, 2022</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, ullam?
              </p>
              <button className={css.btn}>read more</button>
            </div>
          </div>

          <div className={css.box}>
            <div className={css.image}>
              <img
                src="https://media.istockphoto.com/id/1139917357/photo/another-one-thank-you.jpg?s=612x612&w=0&k=20&c=5cTSbRP9HDCc7ApMRs077Xv_Fvnfi8WZq8tFpQfgqH0="
                alt=""
              />
            </div>

            <div className={css.content}>
              <a href="">tasty and refreshing coffee</a>
              <br />
              <span>by admin/21st may, 2022</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, ullam?
              </p>
              <button className={css.btn}>read more</button>
            </div>
          </div>

          <div className={css.box}>
            <div className={css.image}>
              <img
                src="https://media.istockphoto.com/id/1150956580/photo/come-join-us-for-a-coffee.jpg?s=612x612&w=0&k=20&c=mMK5B_dMiOEoMR8f9CFhjZS8CT5yZ07zXiThc5StzYs="
                alt=""
              />
            </div>

            <div className={css.content}>
              <a href="">tasty and refreshing coffee</a>
              <br />
              <span>by admin/21st may, 2022</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, ullam?
              </p>
              <button className={css.btn}>read more</button>
            </div>
          </div>

          <div className={css.box}>
            <div className={css.image}>
              <img
                src="https://media.istockphoto.com/id/1151784433/photo/coffee-break.jpg?s=612x612&w=0&k=20&c=9hMZtHuOSVFnI95omtjghE_pK1q2Rmv4kbx8I4XWFeQ="
                alt=""
              />
            </div>

            <div className={css.content}>
              <a href="">tasty and refreshing coffee</a>
              <br />
              <span>by admin/21st may, 2022</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, ullam?
              </p>
              <button className={css.btn}>read more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
