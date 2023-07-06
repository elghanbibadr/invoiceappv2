import logo from "../../../public/assets/logo.svg"
import sunIcon from "../../../public/assets/icon-sun.svg"
import avatar from "../../../public/assets/image-avatar.jpg"

const Navbar = () => {
    return (
        <header>
            <nav className="nav bg-primaryColor flex justify-between items-center pr-5">
                <div className="nav__logo-wrapper  flex items-center justify-center h-20 w-20 bg-accentColor">
                    <img src={logo} alt="navbar logo" className="nav__logo " />
                </div>
                <div className="navLogos-Wrraper flex flex-row justify-between items-center">
                    <img className='nav__them mr-10 ' src={sunIcon} />
                    <img className='nav__avatar rounded-full h-8' src={avatar} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar