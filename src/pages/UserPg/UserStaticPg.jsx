import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import { Link, useNavigate } from 'react-router-dom'
import Status from '../../components/User/Status'
import axios from 'axios'
import logoImage from "../../assests/bloodrop.png";
import PropTypes from "prop-types";

const UserStaticPg = ({
  bloodBankRef,
  adminRef,
  searchBloodBankRef,
  searchVoluntaryDonorsRef,
  findNearBloodBanksRef,
}) => {
    let lists = ["Status","Donate","Need"]
    const [data,setData]=useState({})
    let User;
    useEffect(_=>{
     User =  axios.get('http://localhost:5000/profile').then(res=>{setData(res.data)}).catch(err=>{console.log(err);})
    },[])

    console.log(data);


    const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);
  const [isSigninDropdownOpen, setIsSigninDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleSignupDropdown = () => {
    setIsSignupDropdownOpen(!isSignupDropdownOpen);
  };

  const toggleSigninDropdown = () => {
    setIsSigninDropdownOpen(!isSigninDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  return (
    <>
      {/* <div className="nav">
        <div className="logo" style={{marginTop:"-40px"}}><h1>logo</h1></div>
        <div className="opts">
            <ul>
                <Link to='/'><li>Status</li></Link>
                <li>Donate</li>
                <li><Link to='/user/req'>Need</Link></li>
                <li>Scheduling</li>
            </ul>
        </div>
        <div className="more">
            <ul>
                <li className='more-img'></li>
                <li>{data[1]?.username || "Unknown" }</li>
                <li className='place-on'>O+</li>
            </ul>
        </div>
      </div> */}
      <nav className="body-font bg-red-800 text-white h-20 ">
      {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> */}
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0 navbar">
          <img
            src={logoImage}
            alt="Bloodrop Logo"
            className="w-10 h-10 p-2 bg-white rounded-full"
          />
          <span className="ml-3 text-xl">BLOODROP</span>
        </div>
        <nav className="opts">
          <a href="/" className="mr-5 hover:text-gray-900">
            HOME
          </a>

          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              SERVICES
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute bg-white text-black right-0 mt-2 w-48 rounded-lg shadow-lg">
                <button
                  onClick={() => {
                    scrollToSection(searchBloodBankRef);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Search Blood Bank
                </button>
                <button
                  onClick={() => {
                    scrollToSection(searchVoluntaryDonorsRef);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Search Voluntary Donors
                </button>
                <button
                  onClick={() => {
                    scrollToSection(findNearBloodBanksRef);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Find Near Blood Banks
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleSignupDropdown}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              SIGNUP
            </button>
            {isSignupDropdownOpen && (
              <div className="absolute bg-white text-black right-0 mt-2 w-48 rounded-lg shadow-lg">
                <button
                  onClick={() => {
                    navigate("/register");
                    setIsSignupDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Donor
                </button>
                <button
                  onClick={() => {
                    scrollToSection(bloodBankRef);
                    setIsSignupDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Blood Bank
                </button>
                <button
                  onClick={() => {
                    scrollToSection(adminRef);
                    setIsSignupDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Admin
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleSigninDropdown}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              SIGNIN
            </button>
            {isSigninDropdownOpen && (
              <div className="absolute bg-white text-black right-0 mt-2 w-48 rounded-lg shadow-lg">
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsSigninDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Donor
                </button>
                <button
                  onClick={() => {
                    scrollToSection(bloodBankRef);
                    setIsSigninDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Blood Bank
                </button>
                <button
                  onClick={() => {
                    scrollToSection(adminRef);
                    setIsSigninDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Admin
                </button>
              </div>
            )}
          </div>
          <a href="/about" className="mr-5 hover:text-gray-900">
            ABOUT US
          </a>
        </nav>
        <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Know More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      {/* </div> */}
    </nav>
      <Status/>
    </>
  )
};
UserStaticPg.propTypes = {
  bloodBankRef: PropTypes.object.isRequired,
  adminRef: PropTypes.object.isRequired,
  searchBloodBankRef: PropTypes.object.isRequired,
  searchVoluntaryDonorsRef: PropTypes.object.isRequired,
  findNearBloodBanksRef: PropTypes.object.isRequired,
};

export default UserStaticPg
