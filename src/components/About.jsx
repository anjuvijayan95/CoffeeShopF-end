import React from 'react'
import css from './About.module.css'
const About = () => {
  return (
    <section id='about'>
        <h1 className={css.heading}><span>about</span> us</h1>

        <div className={css.row}>
            <div className={css.image}>
                <img src="https://cdn.pixabay.com/photo/2020/04/18/20/50/seeds-of-roasted-coffee-5060988_960_720.jpg" alt="" />
            </div>

            <div className={css.content}>
                <h3>what makes our coffee special?</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis hic iusto? Quisquam, accusantium eveniet ipsa, dolore voluptatem voluptatum ullam sint iste nam aut assumenda alias aliquam commodi, nisi sit?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure nulla delectus facere adipisci natus. Sit iusto id nam doloribus.</p>
                <a href="" className={css.btn}>learn more</a>
            </div>
        </div>
    </section>
  )
}

export default About
