import React from 'react'
import css from './Hero.module.css';


const Hero = () => {
  return (
    <section className={css.heroImage}>
        <div className={css.content}>
        <h3>Fresh Coffee in the Morning</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus adipisci esse consectetur facilis quos! </p>
        <a href="" className={css.btn}>get your's now</a>
        </div>

    </section>
  )
}

export default Hero
