import React from 'react'
import {Link} from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">Alışveriş Yap !</Link>
            <Link to="/cart"> <AiOutlineShoppingCart size={32} />
                
            </Link>

        </div>
        
    </div>
  )
};
