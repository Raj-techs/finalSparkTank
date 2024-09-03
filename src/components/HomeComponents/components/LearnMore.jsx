import React from 'react'
import Header from './Header'

const LearnMore = () => {
  return (
    <>
    <Header/>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-red-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Blood Donation: A Lifesaving Act</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
          Blood donation plays a crucial role in saving lives, especially during times of scarcity. With increasing medical emergencies, your contribution can make a significant difference. 
        </p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {/* <!-- First Article --> */}
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="Blood Donation Drive" class="object-cover object-center h-full w-full" src="https://api.parashospitals.com/uploads/2017/06/all-about-blood-donation.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Blood Donation Drives in Andhra Pradesh</h2>
        <p class="text-base leading-relaxed mt-2">
          Andhra Pradesh witnessed a surge in blood donation camps to tackle the ongoing shortages. Join the drive to support hospitals in need and help save lives in your community.
        </p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      {/* <!-- Second Article --> */}
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="Blood Shortage" class="object-cover object-center h-full w-full" src="https://mmhrc.in/file/wp-content/uploads/2022/03/blood-donation.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Critical Blood Shortages in 2023-2024</h2>
        <p class="text-base leading-relaxed mt-2">
          As India faces critical blood shortages, particularly of O- and B- blood types, urgent donations are needed nationwide. Be a part of the movement and donate blood today.
        </p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      {/* <!-- Third Article --> */}
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="Blood Donation Awareness" class="object-cover object-center h-full w-full" src="https://images.yourstory.com/cs/wordpress/2017/06/kiran-verma2.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Awareness Campaigns for Blood Donation</h2>
        <p class="text-base leading-relaxed mt-2">
          Awareness campaigns in 2024 emphasize the need for regular blood donations. With every donation, you contribute to a life-saving cause, bridging the gap between supply and demand.
        </p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default LearnMore
