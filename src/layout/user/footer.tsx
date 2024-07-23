// import React from 'react'
import '../../css/fooder.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full bg-[#053D29] py-5 text-black font-sans text-sm shadow-lg">
  <div className="top grid grid-cols-4 gap-5 p-7">
    <div className="one">
      <div className="infn4 mb-2 text-[#F9F3EE]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="logo flex mt-2 text-white cursor-pointer space-x-5">
        <span>
          <i className="fa-brands fa-facebook text-lg transition duration-300 hover:text-[#75f1ca]"></i>
        </span>
        <span>
          <i className="fa-brands fa-x-twitter text-lg transition duration-300 hover:text-[#75f1ca]"></i>
        </span>
        <span>
          <i className="fa-brands fa-instagram text-lg transition duration-300 hover:text-[#75f1ca]"></i>
        </span>
        <span>
          <i className="fa-brands fa-youtube text-lg transition duration-300 hover:text-[#75f1ca]"></i>
        </span>
        <span>
          <i className="fa-brands fa-internet-explorer text-lg transition duration-300 hover:text-[#75f1ca]"></i>
        </span>
      </div>
    </div>
    <div className="two">
      <nav>
        <ul className="space-y-2">
          <li className="mb-1">
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              <strong className="font-semibold text-white">Um</strong>
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Kontaktiere uns
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Über uns
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Karriere
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Unternehmensinformationen
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="two">
      <nav>
        <ul className="space-y-2">
          <li className="mb-1">
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              <strong className="font-semibold text-white">Hilfe</strong>
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Unsere Produzenten
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Zahlung
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Versand
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Stornierung & Rückgabe
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Verstoß melden
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="two">
      <nav>
        <ul className="space-y-2">
          <li className="mb-1">
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              <strong className="font-semibold text-white">Politik</strong>
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Rücknahmegarantie
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Nutzungsbedingungen
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Sicherheit
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Privatsphäre
            </Link>
          </li>
          <li>
            <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
              Seitenverzeichnis
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div className="bottom flex justify-between items-center bg-[#062F21] py-2 text-white absolute w-full">
    <div className="hood">
      <p> 2023 hood.de, Inc.</p>
    </div>
    <div className="bank">
      <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZeXtBXgwb8vy3AIKEmHSNeseGnGp6jv1D4QPN0FmXwWa5AjgZDIJHrH_9-StnnS1EbzmN20dpjriQ3I_nCehYfdgyc6i0_0_c=w1860-h387" alt="" />
    </div>
    <div className="scroll cursor-pointer">
      <p>Scroll to top <span><i className="fa-solid fa-arrow-up"></i></span></p>
    </div>
  </div>
</footer>

  )
}

export default Footer