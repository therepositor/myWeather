import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCity } from '@fortawesome/free-solid-svg-icons'
const Header = ({onClick, onChange}) => {
  return (
    <header>
      {/* <div className='city-icon-container'>
          <Link to='/pinned-city'>
            <FontAwesomeIcon className='faCity' icon={faCity} />
          </Link>
      </div> */}
      <form className='form-container' action="">
          <div className="input-container">
              <input type="search" name="search" id="search" placeholder='Enter a city' onChange={onChange}/>
          </div>
          <div className='submit-container'>
              <input type="submit" value="Search" onClick={onClick} />
          </div>
      </form>
  </header>
  ) 
};

export default Header;
