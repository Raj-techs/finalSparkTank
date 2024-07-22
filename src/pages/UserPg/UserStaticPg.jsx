import React, { useEffect, useState, useRef } from 'react';
import Nav from '../../components/Nav';
import { Link, useNavigate } from 'react-router-dom';
import Status from '../../components/User/Status';
import axios from 'axios';
import logoImage from "../../assests/bloodrop.png";
import PropTypes from "prop-types";
import Loading from '../../components/Loading';

const UserStaticPg = ({
  bloodBankRef,
  adminRef,
  searchBloodBankRef,
  searchVoluntaryDonorsRef,
  findNearBloodBanksRef,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/registered');
        setData(response.data);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav className="body-font bg-red-800 text-white h-20 ">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0 navbar">
          <img src={logoImage} alt="Bloodrop Logo" className="w-10 h-10 p-2 bg-white rounded-full" />
          <span className="ml-3 text-xl">BLOODROP</span>
        </div>
        <nav className="opts ">
          <Link to='/user/home'>
            <span className="mr-5 hover:text-gray-900  " >HOME</span>
          </Link>
          <button onClick={() => scrollToSection(searchBloodBankRef)} className="mr-5 mb-12 hover:text-gray-900">Search Blood Bank</button>
          <button onClick={() => scrollToSection(searchVoluntaryDonorsRef)} className="mr-5 mb-12 hover:text-gray-900">Search Voluntary Donors</button>
          <button onClick={() => scrollToSection(findNearBloodBanksRef)} className="mr-5 mb-12 hover:text-gray-900">Find Near Blood Banks</button>
          <button onClick={handleSignOut} className="mr-5 hover:text-gray-900 mb-12">Sign Out</button>
        </nav>
      </nav>
      <Status loggedInUserMobile={data} />
    </>
  );
};

UserStaticPg.propTypes = {
  bloodBankRef: PropTypes.object.isRequired,
  adminRef: PropTypes.object.isRequired,
  searchBloodBankRef: PropTypes.object.isRequired,
  searchVoluntaryDonorsRef: PropTypes.object.isRequired,
  findNearBloodBanksRef: PropTypes.object.isRequired,
};

export default UserStaticPg;
