import React from 'react'
import { UsersData } from '../../data/Users';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav';
const DetailsGov = () => {
    let { id } = useParams()
    let OneUser = UsersData.find(details => details.id === parseInt(id));

    console.log(OneUser);
    return (
        <>
            <Nav />
            <div className="worker-profile">
                <div className="worker-img">
                    <h1 style={{ position: "absolute", top: "80px", left: "10px", fontWeight: "bolder" }}>Request</h1>
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
                        <b >Certi-1</b>
                        <img src="https://img.freepik.com/premium-vector/certificate-blood-donation-04_983286-1509.jpg" alt="" width={"100%"} height={"100%"} />

                    </div>
                    <div id='report-2'>
                        <b>Certi-2</b>
                        <img src="https://img.freepik.com/premium-vector/blood-donation-certificate-template-elegant-luxury-contrast-dynamic_730296-76.jpg" alt="" width={"100%"} />
                    </div>

                    <div id="report-3">
                        <b >Certi-3</b>
                        <img src="https://img.freepik.com/premium-vector/free-vector-blood-donation-certificate-template-red-background-recognition-life-saving_764504-438.jpg" alt="" width={"100%"} />
                    </div>

                </div>

                <div className="worker-cAp">
                    <h2>Visited Status</h2>
                    <table border={1}>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Day</th>
                            <th>Certi</th>
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
            <NeedAllocate />
        </>
    )
}
const NeedAllocate = _ => {
    return (
        <div style={{ position: "relative", display: "flex", justifyContent: 'center', gap: "90px", alignItems: "center" }}>
            <div className="allocate">
                <b>Need to : <i>Undrajavaram,U Mandal, East Godavari District,Andhra Pradesh</i></b><br />
                <div style={{ display: "flex", justifyContent: "center", gap: "30px",marginBottom:"50px" }}>
                    <input type="text" placeholder='Search for City' />
                    <p>Group : <input type="text" placeholder='Group' /></p>
                </div>
                <table>
                    <tr className='gov-req-head small'>
                        <td style={{ width: "1px" }}>Banks </td>
                        <td>Group</td>
                        <td>Units</td>
                        <td>Location</td>
                        <td>Fixed</td>
                        <td>Wanted</td>
                        <td>More</td>
                    </tr>
                    {/* user details  */}
                    {UsersData.map(items => {
                        return (<tr>
                            <details>
                                <summary><td><p style={{ marginTop: "15px", marginLeft: "15px" }}>{items.name}</p> </td>
                                    <td><div className="group">{items.group}</div></td>
                                    <td> <div className="mobileNo">{items.mobileNo}</div></td>
                                    <td>Location</td>
                                    <td>Date</td>
                                    <td>Certificates</td>
                                    <td><Link to={`/gov/details/${items.id}`}><button className='btn'>Allocate</button></Link></td></summary>
                                <table>
                                    <tr>
                                        <td>person 1 :  3 months left</td>
                                    </tr>
                                    <tr>
                                        <td>person 2 :  0 months left</td>
                                    </tr>
                                </table>
                            </details>
                        </tr>)
                    })}
                </table>
            </div>
        </div>
    )
}



export default DetailsGov
