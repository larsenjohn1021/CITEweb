import React, {useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
   Nav,
   NavbarContainer, 
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItems,
   NavLinks, 
   NavBtn,
   NavBtnLink 
   } from './NavbarElement';

const Navbar = ({ toggle }) => {
   const [scrollNav,setScrollNav] = useState(false);

      const changeNav = ()=> {
         if(window.scrollY >= 80){
            setScrollNav(true)
         } else {
            setScrollNav(false)
         }
      }
      useEffect(() => {
         window.addEventListener('scroll', changeNav)
         
      }, [])

      const toggleHome = () => {
         scroll.scrollToTop()
      }
    return (
       <>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
               <NavLogo to='/' onClick={toggleHome}>Bulacan State University</NavLogo>
               <MobileIcon onClick={toggle}>
                  <FaBars/>
               </MobileIcon>
               <NavMenu>
                  <NavItems> 
                     <NavLinks 
                     to="about"
                     smooth={true} 
                     duration={500} 
                     spy={true} 
                     exact='true' 
                     offset={-80}                      
                     >
                     About</NavLinks>
                  </NavItems>
                  <NavItems> 
                     <NavLinks 
                     to="unites"
                     smooth={true} 
                     duration={500} 
                     spy={true} 
                     exact='true' 
                     offset={-80} 
                     >
                     Organization</NavLinks>
                  </NavItems>
                  <NavItems> 
                     <NavLinks 
                     to="services"
                     smooth={true} 
                     duration={500} 
                     spy={true} 
                     exact='true' 
                     offset={-80}
                     >
                        Courses</NavLinks>
                  </NavItems>
                  {/* <NavItems> 
                     <NavLinks 
                     to="signup"
                     smooth={true} 
                     duration={500} 
                     spy={true} 
                     exact='true' 
                     offset={-80}
                     >
                        Sign Up</NavLinks> 
                  </NavItems> */}
               </NavMenu>
               <NavBtn>
                  <NavBtnLink 
                  to="/signin"
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80} 
                  activeClass="active"
                  >
                     Sign In</NavBtnLink>
               </NavBtn>
            </NavbarContainer>
         </Nav>
       </>
    );
};

export default Navbar;