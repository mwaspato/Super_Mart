import React from 'react'
import "./selectDrop.css"
const SelectDrop = () => {
  return (
      <div className='selectDropWrapper cursor position-relative'>
          <span className='openSelect'>All Categories</span>
          <div className='selectDrop'>
              <div className='searchField'>
                  <input type="text" />

              </div>
              <ul className='searchResults'>
                  <li>Milks and Dairies</li>
                  <li>Wines and Drinks</li>
                  <li>Clothing and beauty</li>
                  <li> Fresh Seafood</li>
                  <li>Pet Foods & Toy</li>
                  <li>Fast Food </li>
                  <li>Baking material</li>
                  <li>Vegetables</li>
                  <li>Fresh Fruit</li>
                  <li>Bread and Juice</li>
                  <li>Milks and Dairies</li>
                  <li>Wines and Drinks</li>
                  <li>Clothing and beauty</li>
                  <li> Fresh Seafood</li>

              </ul>
          </div>

      </div>
    
  )
}

export default SelectDrop