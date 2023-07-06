import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className="nav bg-primaryColor flex justify-between items-center">
                <div className="nav__logo-wrapper  flex items-center justify-center h-20 w-20 bg-paleCyan">
                    <img src={logo} alt="navbar logo" className="nav__logo " />
                </div>
                <div className="navLogos-Wrraper flex flex-row justify-between items-center">
                    <img className='nav__them mr-10 ' src={sunLogo} />
                    <img className='nav__avatar rounded-full h-10' src={avatar} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar