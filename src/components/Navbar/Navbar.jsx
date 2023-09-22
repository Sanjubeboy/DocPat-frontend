import { GiHamburgerMenu} from "react-icons/gi"
import { BiLogOut } from "react-icons/bi"
import logo from '../../assets/logo.svg'
import defaultProfile from '../../assets/default-profile.png'

const Navbar = () => {

  return <div className='px-4 flex justify-between items-center border-b-[1px]'>
    <div className='flex items-center gap-2'>
    <GiHamburgerMenu className='w-8 h-8 cursor-pointer hover:rotate-90 transition-all duration-150'/>
    <img src={logo} className='h-20 w-60 -mt-2 cursor-pointer'/>
    </div>

    <ul className="flex items-center gap-8">
        <li>
            <button className="flex items-center text-gray-600">logout<span><BiLogOut/></span></button>
        </li>
        <li className="text-xl text-prm cursor-pointer">
            Sanjay
        </li>
        <li>
            <img src={defaultProfile} className="h-12 w-12 object-cover rounded-full  border-[1px] cursor-pointer"/>
        </li>
    </ul>
  </div>
}
export default Navbar
