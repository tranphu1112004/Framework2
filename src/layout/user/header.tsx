// import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/header.css'
// import { useContext } from 'react'
// import { cartCT } from '../../components/cartContext'

const Header = () => {
  // const {cart} = useContext(cartCT)
  return (
    <header className="bg-gradient-to-r from-green-600 to-gray-400 min-h-[149px] w-full text-white font-sans">
    <div className="menu content-center py-7 shadow-md">
      <div className="topmenu flex justify-between mb-5">
        <div className="search relative mt-[-10px] mr-2">
          <form action="">
            <input 
              type="text" 
              placeholder="Suchen Sie nach Produkten, Marken und mehr" 
              className="absolute h-[43px] w-[525px] px-7 text-black rounded shadow-md border-none outline-none text-sm transition duration-300" 
            />
            <button 
              className="absolute right-5 bg-transparent text-black border-none p-1.5 rounded cursor-pointer h-[44px] transition duration-300"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="language relative">
          <select 
            name="language-picker-select" 
            id="language-picker-select" 
            className="absolute bg-transparent text-white border-none outline-none transition  top-[-8px]"
          >
            <option lang="de" value="deutsch">Deutsch</option>
            <option lang="en" value="english" selected>English</option>
            <option lang="fr" value="francais">Français</option>
            <option lang="it" value="italiano">Italiano</option>
          </select>
        </div>
        <div className="user flex font-sans mr-20">
          <div className="userinfo flex w-[100px] h-full text-white cursor-pointer">
            <Link to={'/'}>
              <i className="fa-regular fa-user"></i>
              <span>Account</span>
            </Link>
          </div>
          <div className="cart w-[100px] h-full text-white cursor-pointer">
            <Link to={'/cart'}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Cart</span>
              {/* <span className=''>({cart})</span> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="downmenu border-t border-white w-[1245px] mt-4">
        <ul className="down flex list-none p-0 m-0">
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Beleuchtung
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">skonzepte</Link>
              </li>
            </ul>
          </li>
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Growbox
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">Komplettsets</Link>
              </li>
            </ul>
          </li>
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Dünger
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">skonzepte</Link>
              </li>
            </ul>
          </li>
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Erde & Substrate
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">skonzepte</Link>
              </li>
            </ul>
          </li>
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Töpfe & Behälter
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">Eckige Töpfe</Link>
              </li>
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">Runde Töpfe</Link>
              </li>
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">Untersetzer</Link>
              </li>
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">Pflanzschalen</Link>
              </li>
            </ul>
          </li>
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Bewässerung
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">skonzepte</Link>
              </li>
            </ul>
          </li>
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Pflanzen & Gärtnern
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">skonzepte</Link>
              </li>
            </ul>
          </li>
          <li className="onemenu relative mt-4">
            <Link className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10" to={'/'}>Lüftung & Klimaanlage
              <span><i className="fa-solid fa-angle-down ml-1"></i></span>
            </Link>
            <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
              <li className="border-b border-gray-300">
                <Link to={'/'} className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10">skonzepte</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</header>

  )
}

export default Header
