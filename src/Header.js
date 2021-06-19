import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = () => {
  return (
        <div className='App'>
            <Navbar dark color='primary'>
                <div className='container'></div>
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </Navbar>
        </div>
  )
}

export default Header
