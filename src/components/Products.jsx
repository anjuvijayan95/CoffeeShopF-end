import React from 'react'
import css from "./Products.module.css";
import { GiShoppingBag } from "react-icons/gi";
import { GiHeartDrop } from "react-icons/gi";
import { BsFillEyeFill } from "react-icons/bs";
import {BsStarFill} from "react-icons/bs"
import {BsStarHalf} from "react-icons/bs"


const Products = () => {
  return (
    <section id='products'>
      <h1 className={css.heading}>our <span>products</span></h1>
      <div className={css.boxContainer}>

        <div className={css.box}>
            <div className={css.icons}>
                <GiShoppingBag className={css.icon}/>
                <GiHeartDrop  className={css.icon}/>
                <BsFillEyeFill className={css.icon}/>
            </div>
            <div className={css.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR699eK_WMoHvXVDGRDomwamT1I7S9trK-mAA&usqp=CAU" alt="" />
            </div>
            <div className={css.content}>
              <h1>choose your's</h1>
              <div className={css.star}>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarHalf className={css.s}/>
              </div>
              <h3>$12.3 <span> $32.8</span></h3>
              <button className={css.btn} href="">add to  cart</button>
            </div>
        </div>

        <div className={css.box}>
            <div className={css.icons}>
                <GiShoppingBag  className={css.icon}/>
                <GiHeartDrop  className={css.icon}/>
                <BsFillEyeFill  className={css.icon}/>
            </div>
            <div className={css.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVreywbImLymuoL3Da7hGoIjLlJUmj3zQidQ&usqp=CAU" alt="" />
            </div>
            <div className={css.content}>
              <h1>choose your's</h1>
              <div className={css.star}>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarHalf className={css.s}/>
              </div>
              <h3>$12.3 <span> $32.8</span></h3>
              <button className={css.btn} href="">add to  cart</button>
            </div>
        </div>

        <div className={css.box}>
            <div className={css.icons}>
                <GiShoppingBag  className={css.icon}/>
                <GiHeartDrop  className={css.icon}/>
                <BsFillEyeFill  className={css.icon}/>
            </div>
            <div className={css.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADRib4FnezQPXZbxF06KUT8Y3GZlkRQz08g&usqp=CAU" alt="" />
            </div>
            <div className={css.content}>
              <h1>choose your's</h1>
              <div className={css.star}>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarHalf className={css.s}/>
              </div>
              <h3>$12.3 <span> $32.8</span></h3>
              <button className={css.btn} href="">add to  cart</button>
            </div>
        </div>

        <div className={css.box}>
            <div className={css.icons}>
                <GiShoppingBag  className={css.icon}/>
                <GiHeartDrop  className={css.icon}/>
                <BsFillEyeFill  className={css.icon}/>
            </div>
            <div className={css.image}>
                <img src="https://media.istockphoto.com/vectors/coffee-packaging-design-with-coffee-tree-branch-with-leaves-and-beans-vector-id1129532077" alt="" />
            </div>
            <div className={css.content}>
              <h1>choose your's</h1>
              <div className={css.star}>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarHalf className={css.s}/>
              </div>
              <h3>$12.3 <span> $32.8</span></h3>
              <button className={css.btn} href="">add to  cart</button>
            </div>
        </div>

        <div className={css.box}>
            <div className={css.icons}>
                <GiShoppingBag  className={css.icon}/>
                <GiHeartDrop  className={css.icon}/>
                <BsFillEyeFill  className={css.icon}/>
            </div>
            <div className={css.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l7FTQ_GmdAF0rGDRQ-Hx0tkK_Uhtd45RhA&usqp=CAU" alt="" />
            </div>
            <div className={css.content}>
              <h1>choose your's</h1>
              <div className={css.star}>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarHalf className={css.s}/>
              </div>
              <h3>$12.3 <span> $32.8</span></h3>
              <button className={css.btn} href="">add to  cart</button>
            </div>
        </div>

        <div className={css.box}>
            <div className={css.icons}>
                <GiShoppingBag  className={css.icon}/>
                <GiHeartDrop  className={css.icon}/>
                <BsFillEyeFill  className={css.icon}/>
            </div>
            <div className={css.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTQW1tk9kZSEMfnY6wgx4xSbOJKibLYNT3Q&usqp=CAU" alt="" />
            </div>
            <div className={css.content}>
              <h1>choose your's</h1>
              <div className={css.star}>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarFill className={css.s}/>
              <BsStarHalf className={css.s}/>
              </div>
              <h3>$12.3 <span> $32.8</span></h3>
              <button className={css.btn} href="">add to  cart</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Products
