import React from 'react'

const Footer = ({length}) => {
  // console.log(length);
  const year = new Date()
  return (
    <footer className='footer'>Footer
    <p className='totoal-items'>
      Total {length} {length <= 1 ? "item" : "items"}  
    </p>
      <p className='year'>
        {year.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer