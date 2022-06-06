import React from 'react'
import './Sidedrawer.css'
import  ReactDOM  from 'react-dom'
const Sidedrawer = (props) => {
  
   const content =   <aside className='side-drawer'>{props.children}</aside>
   return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
  
}

export default Sidedrawer