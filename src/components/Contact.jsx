import React from 'react'
import css from './Contact.module.css'
import {BsFillFileEarmarkPersonFill,BsMailbox2,BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <section className={css.contact} id='contact'>
        <h1 className={css.heading}>
            <span>contact</span> us
        </h1>
        <div className={css.row}>
        <img src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

        <form action="">
            <h3>get in touch</h3>
            <div className={css.inputBox}>
                <span><BsFillFileEarmarkPersonFill/></span>
                <input type="text" placeholder='name'/>
            </div>

            <div className={css.inputBox}>
                <span><BsMailbox2/></span>
                <input type="email" placeholder='enter your email'/>
            </div>

            <div className={css.inputBox}>
                <span><BsFillTelephoneFill/></span>
                <input type="number" placeholder='enter your mobile'/>
            </div>
            <button  className={css.btn}>contact now</button>
        </form>
        </div>
      </section>
    </>
  )
}

export default Contact
