import React, { useState } from 'react'
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'

const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);
  return (
            <div>
            <Navbar className='navbarcolor' light>
                <div className='container'>
                    <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
                </div>
                <NavbarToggler onClick={() => {setToggleNav(!toggleNav)}} className='navbarMenuToggler'/>
                <Collapse isOpen={toggleNav} navbar>
                    <Nav navbar className='navItemAlign'>
                        <NavItem>
                            <NavLink href='/home'> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/aboutus'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/menu'> Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/contactus'>Contact Us</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World&apos;s best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </div>
  )
}

export default Header
