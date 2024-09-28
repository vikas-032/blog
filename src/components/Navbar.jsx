import React, { useContext } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import FaBars from 'react-icons/fa'; 
import Menu from './Menu'


function Navbar() {
const [prompt, setPrompt]= useState("")
const [menu,setMenu]=useState(false)
const navigate = useNavigate()
const path = useLocation().pathname

const showMenu = ()=>{
  setMenu (!menu)
}

const {user}= useContext(UserContext)
 

  return (
    <div>
      <div className='flex item-center justify-between px-6 md:px-[200px] py-4 bg-black text-white'>
<h1 className='text-lg md:text-xl font-extrabold'> <Link to="/">Blogistan</Link>

</h1>
 { path === "/" && <div onChange={ (e)=> setPrompt (e.target.value)} className='flex justify-center item-center space-x-0'>
<input className='outline-none rounded-1-xl px-3 text-black bg-white' placeholder='Search a pst' type='text'/>
 <p onClick={()=> navigate(prompt ? "?search" + prompt : navigate("/")) } className='cursor-pointer p-1 bg-white text-black rounded-r-xl' >
<BsSearch />
 </p>
 </div>}
<div className='hidden md:flex item-center justify-center space-x-2 md:space-x-4'>
  {
      user ? <h3> <Link to='/write'>Write</Link> </h3> : <h3>
        <Link to='/login'>Login</Link>
      </h3>
      
  }
  {user ? <div onClick={showMenu}>
<p className='cursor-pointer relative'> </p>
  <FaBars/>
  {menu && <Menu/> }
  </div> : <h3><Link to='/register'>Register</Link> </h3>}

</div>
<div onClick={showMenu} className='md:hidden text-lg'  >
  <p className='cursor-pointer relative '>

 <FaBars/> </p>
{menu && <Menu/>}
</div>


      </div>
    </div>
  )
}

export default Navbar