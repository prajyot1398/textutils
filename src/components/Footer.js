import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <footer className="mt-5 text-center">
        <h5 className={`text-${props.mode === "light" ? "dark" : "light"}`}>&copy; {new Date().getFullYear()}: Made By Prajyot Jadhav</h5>
        <h6 className={`text-${props.mode === "light" ? "dark" : "light"}`}><a href="https://github.com/prajyot1398/textutils" target={'_blank'}>Github</a></h6>
      </footer>
    </div>
  )
}
