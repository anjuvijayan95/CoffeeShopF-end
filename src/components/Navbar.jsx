import React, { useState } from "react";
import css from "./Navbar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";
import {GrFormClose} from "react-icons/gr"

// import { IconContext } from 'react-icons'
import { BsMenuButtonWideFill } from "react-icons/bs";
import coffeeBean1 from "./images/coffeeBean1.png";
import coffeeBean2 from "./images/coffeeBean2.png";
import coffeeBean3 from "./images/coffeeBean3.png";
import coffeeBean4 from "./images/coffeeBean4.png";


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const [menu, setMenu] = useState(false);

  const searchFun = () => {
    setShowSearch((showSearch) => !showSearch);
  };

  const showCartItem = () => {
    setShowCart((showCart) => !showCart);
  };

  const showMenuFun=()=>{
    setMenu(menu=>!menu)
  }

  return (
    <>
      <header id={css.navigation}>
        <a href="" className={css.logo}>
          <img
            className={css.logoImage}
            src="https://cdn.pixabay.com/photo/2022/03/09/05/05/coffee-7057030_1280.png"
            alt=""
          />
        </a>

        <nav className={css.navbar}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contacts</a>
          <a href="#blog">blog</a>
        </nav>
        

{menu&&   <nav className={css.navbar1}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contacts">contacts</a>
          <a href="#blog">blog</a>
        </nav>}

        {/* <IconContext.Provider value={{size:"2.5rem", color:"#fff"}}> */}
        <div className={css.icons}>
          <BiSearchAlt
            style={{
              color: "#fff",
              marginLeft: "2rem",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
            className={css.icon}
            onClick={searchFun}
          />
          <GiShoppingBag
            style={{
              color: "#fff",
              marginLeft: "2rem",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
            className={css.icon}
            onClick={showCartItem}
          />
          <BsMenuButtonWideFill
            style={{
              color: "#fff",
              marginLeft: "2rem",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
            className={css.icon}
            id={css.menu}
            onClick={showMenuFun}
          />
        </div>
        {/* </IconContext.Provider> */}

        {showSearch && (
          <div className={css.searchForm}>
            <input
              type="search"
              id={css.searchBox}
              placeholder="seach here..."
            />
            <label for="searchBox">
              <BiSearchAlt />
            </label>
          </div>
        )}

        {showCart && (
          <div className={css.cartItem}>
            <div className={css.item}>
              <img src={coffeeBean1} alt="" />
              <div className={css.content}>
                <h3>cart item 1</h3>
                <div className={css.price}> $15.99/-</div>
              </div>
              <GrFormClose className={css.close}/>
            </div>
            <hr />
            <div className={css.item}>
              <img src={coffeeBean2} alt="" />
              <div className={css.content}>
                <h3>cart item 2</h3>
                <div className={css.price}> $18.78/-</div>
              </div>
              <GrFormClose className={css.close}/>
            </div>
            <hr />
            <div className={css.item}>
              <img src={coffeeBean3} alt="" />
              <div className={css.content}>
                <h3>cart item 3</h3>
                <div className={css.price}> $25.39/-</div>
              </div>
              <GrFormClose  className={css.close}/>
            </div>
            <hr />
            <div className={css.item}>
              <img src={coffeeBean4} alt="" />
              <div className={css.content}>
                <h3>cart item 4</h3>
                <div className={css.price}> $25.39/-</div>
              </div>
              <GrFormClose className={css.close}/>
            </div>
            <button className={css.btn}>Checkout</button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
