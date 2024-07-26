import React from 'react'
import Logo from "../../assets/logo.svg"
import './Header.css'
import { BsSearch } from "react-icons/bs";
import SelectDrop from '../selectDrop/SelectDrop';
const Header = () => {
  return (
    <div className="header">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2'>
            <img src={Logo} alt='' />
          </div>
          {/* headerSearch starts here */}
          <div className='col-sm-5'>
            <div className='headerSearch d-flex align-items-center'>
              <SelectDrop/>
              <div className='search'>
                  <input type='text' placeholder='Search for items...'/>
                <BsSearch className='searchIcon cursor' />            
              </div>
            </div>
          </div>
          {/* headerSearch starts here */}
        </div>

      </div>
   </div>
   
  )
}

export default Header