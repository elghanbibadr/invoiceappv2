import logo from "../../../public/assets/logo.svg"
import sunIcon from "../../../public/assets/icon-sun.svg"
import avatar from "../../../public/assets/image-avatar.jpg"
import { useContext } from "react"
import Card from "../ui/Card"
import { AppContext } from "../../store/AppContext"
import { useState } from "react"

const Navbar = () => {
    const { user } = useContext(AppContext)
    const [logoutCardVisible, setLogoutCardVisible] = useState(false)
    const handleProfilPhotoClicked = () => {
        setLogoutCardVisible(prv => !prv)
    }

    return (
        <header>
            <nav className="nav bg-primaryColor flex justify-between items-center pr-5">
                <div className="nav__logo-wrapper  flex items-center justify-center h-20 w-20 bg-accentColor">
                    <img src={logo} alt="navbar logo" className="nav__logo  " />
                </div>
                <div className="navLogos-Wrraper relative flex flex-row justify-between items-center">
                    <img className='nav__them mr-10 ' src={sunIcon} />
                    <img onClick={handleProfilPhotoClicked} className='nav__avatar   hover:border-2 border-accentColor rounded-full h-8' src={!user?.isAnonymous ? user?.photoURL : avatar} />
                    {logoutCardVisible && <Card className='absolute h-fit py-4 bg-[#1e2139] top-10   w-fit'>
                        {user.isAnonymous && <p className="font-bold ">exit demo</p>}
                        {!user.isAnonymous && <p className="font-bold">Sign Out</p>}
                    </Card>}
                </div>
            </nav>
        </header>
    )
}

export default Navbar