import React from 'react'
import "./Nav.css"

import {  BsFillSunFill } from "react-icons/bs";

export default function Nav() {
  return (
    <div>
      <header style={{backgroundColor:"red"}}>
        <nav>
            <ul >
               <li><BsFillSunFill/></li>
                <li><b>Accu Whether</b></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
