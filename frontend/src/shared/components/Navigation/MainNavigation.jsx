import React,{useState} from 'react'
import './MainNavigation.css'
import MainHeader from './MainHeader'
import {Link} from 'react-router-dom'
import NavLinks from "./NavLinks";
import Sidedrawer from './Sidedrawer';
import Backdrop from '../uiElements/Backdrop'

const MainNavigation = (props) => {
    const [drawerIsOpen,setDrawerIsOpen] = useState(false);
    const openDrawerHandler=()=>{
        setDrawerIsOpen(true);
    };
    const closeDrawerHandler = () => {
      setDrawerIsOpen(false);
    };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
      <Sidedrawer show={drawerIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </Sidedrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/"> Your places </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation