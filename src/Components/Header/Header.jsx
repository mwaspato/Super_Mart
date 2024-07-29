import React, { useEffect, useState } from 'react'
import Logo from "../../assets/logo.svg"
import './Header.css'
import { BsSearch } from "react-icons/bs";
import SelectDrop from '../selectDrop/SelectDrop';
import { MdLocationOn } from "react-icons/md";
import axios from 'axios'
const Header = () => {
  const[categories,setCategories] = useState([
      'Milk and Dairies',
      'Wines and Drinks',
      'Clothing & beauty',
      'Fresh Seafood',
      'Pate Food  & Toy',
      'Fast Food',
      'Baking Material',
      'Vegetables',
      'Fresh Fruit',
      'Bread and Juice',
      'Milk and Dairies',
      'Wines and Drinks',
      'Clothing & beauty',
      'Fresh Seafood'
  ]);

  const countryList =[];

  useEffect(()=>{
       getCountry('https://countriesnow.space/api/v0.1/countries/');
  },[])

  const getCountry=async(url)=>{
    try{
      await axios.get(url).then((res)=>{
        if(res!==null){
         // console.log(res.data.data);
         res.data.data.map((item,index)=>{
           countryList.push(item.country)
         })
         countryList.push(res.data.data.country);
        }
      })
    }catch(error){
         console.log(error.message)
    }
  }
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
              <SelectDrop data={categories} placeholder={'All Categories'} icon={false}/>
              <div className='search'>
                  <input type='text' placeholder='Search for items...'/>
                <BsSearch className='searchIcon cursor' />            
              </div>
            </div>
          </div>
          {/* headerSearch starts here */}
      
           <div className="col-sm-5 d-flex align-items-center">
            <div className="countries">
              <SelectDrop data={countryList} placeholder={'Your Location'} icon={ <MdLocationOn style={{opacity:0.7}} />} />
            </div>
              
           </div>
      
        </div>

      </div>
   </div>
   
  )
}

export default Header