import React from "react";
import css from "./Menu.module.css";

const Menu = () => {
  return (
    <section className={css.menu} id='menu'>
      <h1 className={css.heading}>
        our <span>menu</span>
      </h1>

      <div className={css.boxContainer}>
        <div className={css.box}>
          <img
            src="https://images.unsplash.com/photo-1572309026054-37e5541a5cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzU5fHxjb2ZmZWUlMjBjdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>tasty and healthy</h3>
          <div className={css.price}>
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className={css.btn}>
            add to cart
          </a>
        </div>

        <div className={css.box}>
          <img
            src="https://images.unsplash.com/photo-1576169884631-382813d0090e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzYwfHxjb2ZmZWUlMjBjdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>tasty and healthy</h3>
          <div className={css.price}>
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className={css.btn}>
            add to cart
          </a>
        </div>

        <div className={css.box}>
          <img
            src="https://images.unsplash.com/photo-1617799852831-614b910885e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzgzfHxjb2ZmZWUlMjBjdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>tasty and healthy</h3>
          <div className={css.price}>
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className={css.btn}>
            add to cart
          </a>
        </div>

        <div className={css.box}>
          <img
            src="https://images.unsplash.com/photo-1588535955562-af5a3b1b69ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTk1fHxjb2ZmZWUlMjBjdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>tasty and healthy</h3>
          <div className={css.price}>
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className={css.btn}>
            add to cart
          </a>
        </div>

        <div className={css.box}>
          <img
            src="https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjQyfHxjb2ZmZWUlMjBjdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>tasty and healthy</h3>
          <div className={css.price}>
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className={css.btn}>
            add to cart
          </a>
        </div>

        <div className={css.box}>
          <img
            src="https://images.unsplash.com/photo-1560108878-8147b6c871d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjI4fHxjb2ZmZWUlMjBjdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>tasty and healthy</h3>
          <div className={css.price}>
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className={css.btn}>
            add to cart
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
