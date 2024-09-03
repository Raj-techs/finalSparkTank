import React from 'react';
import Header from '../HomeComponents/components/Header';

const BankDonations = () => {
  return (
    <>
    <Header/>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Ananda Blood Bank
            <br className="hidden lg:inline-block" /> Essential Blood Donation Data
          </h1>
          <p className="mb-8 leading-relaxed">
            Present Data: 12 Units
            <br />
            Number of Donations: 2 Units
            <br />
            Location: 1234 Blood Drive Rd, Bhimavaram, AP
          </p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Blood Bank"
            src="https://anandrishijihospital.com/wp-content/uploads/2024/01/IMG-20231226-WA0006-1024x687.jpg"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default BankDonations;
