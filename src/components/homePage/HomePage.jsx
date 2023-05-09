import React from 'react';
import "../homePage/HomePage.scss";
import { useSelector, useDispatch } from 'react-redux';
import {setLogout} from "../../state/index";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div className='home-page-container'>
      <header className='header-flex'>
        <h1>User Details</h1>
        <button className='logout-btn' onClick={() => {
          dispatch(setLogout());
        }}>Logout</button>
      </header>
      <div className='parent'>
        <div className='child'>First Name</div>
        <div className='child'>Last Name</div>
        <div className='child'>Email Id</div>
        <div className='child'>{user.firstName}</div>
        <div className='child'>{user.lastName}</div>
        <div className='child'>{user.email}</div>
      </div>
    </div>
  )
}

export default HomePage