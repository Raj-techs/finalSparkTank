import React from 'react'

const Transfer = () => {
  return (
    <>
   
      <div className="transfer">
        <h2>Transfer Details</h2>
        <div className="transfer-divs">
          <div className="transfer-div">
            <p><p>Our Bank</p> <i class="fa-solid fa-arrow-right"></i> <p> B.Bank 2</p> </p>
            <p>Blood Units : 2</p>
            <p>Blood Group : O+</p>
           <div style={{display:"flex",margin:"10px"}}> <button className='complete-btn'>Completed</button>
            <button className='update-btn'>update</button></div>
          </div>
          <div className="transfer-div">
            <p><p>Our Bank</p> <i class="fa-solid fa-arrow-right"></i> <p> B.Bank 2</p> </p>
            <p>Blood Units : 2</p>
            <p>Blood Group : O+</p>
           <div style={{display:"flex",margin:"10px"}}> <button className='complete-btn'>Completed</button>
            <button className='update-btn'>update</button></div>
          </div>
          <div className="transfer-div">
            <p><p>Our Bank</p> <i class="fa-solid fa-arrow-right"></i> <p> B.Bank 2</p> </p>
            <p>Blood Units : 2</p>
            <p>Blood Group : O+</p>
           <div style={{display:"flex",margin:"10px"}}> <button className='complete-btn'>Completed</button>
            <button className='update-btn'>update</button></div>
          </div>
        </div>
        <div className="transfer-anim">
            <div className="car"></div>
            <div className="img1"></div>
            <div className="road"></div>
            <div className="img2"></div>
        </div>
      </div>
    </>
  )
}

export default Transfer
