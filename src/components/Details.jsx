import React from 'react'
import { UsersData } from '../data/Users';
import { useParams } from 'react-router-dom';
const Details = () => {
    let {id}=useParams()
    let OneUser = UsersData.find(details => details.id === parseInt(id));

    console.log(OneUser);
    return (
        <>
            <div className="worker-profile">
                <div className="worker-img">
                    <img src={OneUser.img} width={200} style={{ borderRadius: "50%" }} alt="" />
                    <h1> {OneUser.name}</h1>
                    <p>{OneUser.group} Group</p>
                    <p>Mobile No. : {OneUser.mobileNo}</p>
                    <div className="worker-socialIcons" style={{ fontSize: "30px" }}>
                        <span><i class="fa-solid fa-location-dot" style={{ color: "green" }}></i> </span>
                        
                    </div>
                    <div className='rating'>
                        {/* <span style={{ fontSize: "3em" }}>{OneUser.rating}</span> */}
                        <div>
                            <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
                        </div>
                    </div>
                </div>

                <div className="worker-work">
                    <div id='report-1'>
                        <b >Report-1</b>
                        <img src="https://mindxsciences.com/sample-report-page-2.png" alt="" width={"100%"} height={"100%"}/>

                    </div>
                    <div id='report-2'>
                        <b>Report-2</b>
                        <img src="https://cdn.flabs.in/webassets/33806e7015fbfcaff211.png" alt="" width={"100%"}/>
                    </div>

                    <div id="report-3">
                        <b >Report-3</b>
                        <img src="https://www.researchgate.net/publication/351028871/figure/fig2/AS:1015026307571713@1619012538352/Typical-blood-examination-result-in-MS-Word-format-adapted-from-Bahasa-Indonesia.ppm" alt="" width={"100%"}/>
                    </div>
                    
                </div>

                <div className="worker-cAp">
                    <h2>Visited Status</h2>
                    <table border={1}>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Day</th>
                            <th>Reports</th>
                        </tr>
                        <tr>
                             <td>22/6/2024</td>
                            <td>10:20 AM</td>
                            <td>Monday</td>
                            <td><a href="#report-1">check</a></td>
                            
                        </tr> <tr>
                            <td>22/6/2024</td>
                            <td>12:00 PM</td>
                            <td>Wednesday</td>
                            <td><a href="#report-2">check</a></td>
                            
                        </tr> <tr>
                            <td>22/6/2024</td>
                            <td>3:30 PM</td>
                            <td>Tuesday</td>
                            <td><a href="#report-3">check</a></td>
                            
                        </tr>
                    </table>

                    <div className="msg-box">
                        <h3>Message</h3>
                        <textarea name="" id="" cols="40" rows="4" placeholder='Enter msg to Patient'></textarea>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
