import React from 'react'

export default function About(props) {
  return (
    <div className='container text-center my-5'>
      <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        This Website Is Made Using React With ❤ By Prajyot Jadhav. <br/> 
        This Is Built While Learning React.<br/>
        Please Let Me Know Your Feedbacks&nbsp;
        <a href={`mailto:prajyot13.98@gmail.com?subject=TextUtils`}>Here</a>.
      </p>
    </div>
  )
}
