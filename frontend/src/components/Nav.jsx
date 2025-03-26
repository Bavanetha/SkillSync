import {useState} from "react";
import {Link} from "react-router-dom";

const Nav = () => {

    var [dropdown, setDropdown] = useState(false);
    
    const handleDropdown = () => {
        setDropdown(dropdown => !dropdown);
    }

   return (
    <div className="absolute top-0 left-0 w-full h-[81px] flex items-center px-8 justify-between">
        <p className="text-3xl font-semibold">
            <span className="text-black">Skill</span>
            <span className="text-blue-700">Sync</span>
        </p>
        <div className="flex space-x-8 text-2xl font-semibold">
            <Link to="/"><span className="text-blue-700">Home</span></Link>
            <Link to="/mypath"><span>My Path</span></Link>
            <Link to="/ass"><span>Assessment</span></Link>
            <Link to="/contact"><span>Contact</span></Link>
            <div onMouseEnter={handleDropdown} onMouseLeave={handleDropdown} className="dropdown">
                <span><img
                    className="w-[32px] h-10"
                    alt="Vector"
                    src="https://c.animaapp.com/m8nde78yCBHZqt/img/vector.svg"
                /></span>
                {dropdown ? (
                  <ul className="bg-slate-400">
                    <li><Link to="/profile" className="Link">Profile</Link></li>
                    <li><Link to="/dashboard" className="Link">Dashboard</Link></li>
                    <li><Link to="" className="Link">Logout</Link></li>
                  </ul>
                ) : ("")}
            </div>
        </div>
    </div>
  )
}

export default Nav
