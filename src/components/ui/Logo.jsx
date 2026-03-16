import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={"/"} className='bg-neutral-900 rounded-full'>
      <img
        src="./gursharanme-white-logo-transparent.svg"
        alt=""
        className="h-13 md:h-14"
      />
    </Link>
  );
}

export default Logo