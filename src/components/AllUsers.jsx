import React from 'react'
import { UsersData } from '../data/Users'
import { Link } from 'react-router-dom'
const AllUsers = () => {
    return (
        <>
            <div>
            <h1>BLOOD GROUPS... 🩸</h1>
            <div class="button-container">
                <button>A+</button>
                <button>O+</button>
                <button>B+</button>
                <button>AB+</button>
                <button>A-</button>
                <button>O-</button>
                <button>B-</button>
                <button>AB-</button>
            </div>
            <div class="form-container">
                <div class="input-box-container">
                    <div class="input-box">
                        <div class="input-container">
                            <label for="name">Enter Name:</label>
                            <input type="text" id="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="input-box">
                        <div class="input-container">
                            <label for="location">Enter Location:</label>
                            <input type="text" id="location" name="location" placeholder="Enter a location..." />
                        </div>
                    </div>
                    <div class="input-box">
                        <div class="input-container">
                            <label for="age">Enter Age:</label>
                            <input type="number" id="age" placeholder="Age" />
                        </div>
                    </div>
                </div>
                <button id="submit">submit</button>
            </div>
            <div className="heading">
                <b>Name</b>
                <b>Group</b>
                <b>Mobile No</b>
                <b>More</b>
            </div>
            <div className="usr">
                {UsersData.map(items=>{
                    return(<div>
                        <div><img src={items.img} width={60} height={60} style={{ borderRadius: "50%" }} alt="" />
                            <p style={{ marginTop: "15px", marginLeft: "15px" }}>{items.name}</p></div>
                        <div className="group">{items.group}</div>
                        <div className="mobileNo">{items.mobileNo}</div>
                        <Link to={`/details/${items.id}`} style={{color:"white",textDecoration:"none"}}><button className='btn'>Details</button></Link>
                    </div>)
                })}
            </div>
            </div>
        </>
    )
}

export default AllUsers
