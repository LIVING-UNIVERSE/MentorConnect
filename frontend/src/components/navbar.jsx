import React from 'react'
import {assets} from "../assets/assets_frontend/assets"
import { NavLink } from 'react-router-dom'

export const navbar = () => {
  return (
    <div>
      <img src={assets.logo}/>
      <ul>
        <NavLink>
          <li>
            HOME
          </li>
          <hr/>
        </NavLink>        
        <NavLink>
          <li>
            ALL DOCTORS
          </li>
          <hr/>
        </NavLink>        
        <NavLink>
          <li>
            ABOUT
          </li>
          <hr/>
        </NavLink>        
        <NavLink>
          <li>
            CONTACT
          </li>
          <hr/>
        </NavLink>        

      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default navbar