import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return <div>
    <div className='flex'>
    <GiHamburgerMenu/>
    <img src={logo}/>
    </div>

    <ul>
        <li></li>
    </ul>
  </div>
}
export default Navbar
