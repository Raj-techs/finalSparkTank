import React, { useEffect, useState } from 'react'
import { UsersData } from '../../data/Users';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav';
import axios from 'axios';
import Footer from '../Footer';
const DetailsGov = () => {
    let { id } = useParams()
    const [reqData, setreqData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3000/requests");
                setreqData(res.data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    let donar = reqData.find(items => items.id === id)

    console.log(donar);
    const [userData, setUserData] = useState(1, 2, 3, 4, 5)
    return (
        <>
            <Nav />
            {loading ? (
                <p>Loading...</p>
            ) : !donar ? (
                <p>No donor found</p>
            ) : (
                <div className="worker-profile">
                    <div className="worker-img">
                        <h1 style={{ position: "absolute", top: "80px", left: "10px", fontSize: "2em", fontWeight: "bolder" }}>Request</h1>
                        <i class="fa-solid fa-user" style={{ fontSize: "6em", marginBottom: "10px" }}></i>

                        <table width={"300px"}>
                            <tr>
                                <th>Name :</th>
                                <td>{donar.username}</td>
                            </tr>
                            <tr>
                                <th>Group :</th>
                                <td>{donar.group}</td>
                            </tr>
                            <tr>
                                <th>Units Needed :</th>
                                <td>{donar.units}</td>
                            </tr>
                            <tr>
                                <th>Mobile :</th>
                                <td>{donar.mobile}</td>
                            </tr>
                            <tr>
                                <th>Location :</th>
                                <td>{donar.usrlocation}</td>
                            </tr>
                            <tr>
                                <th>Ceritificates :</th>
                                <td>{donar.certificates}</td>
                            </tr>
                            <tr>
                                <th>Stamps no :</th>
                                <td>{donar.stamps}</td>
                            </tr>
                            <tr>
                                <th>Date :</th>
                                <td>{donar.date}</td>
                            </tr>
                        </table>

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
                </div>)}
            <div style={{ height: "100vh", position: "relative",overflowY:"scroll" }}>

                <NeedAllocate />
            </div>
            {/* <Footer/> */}
        </>
    )
}
const NeedAllocate = _ => {
    const [banksData, setbanksData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const banks = await axios.get("http://localhost:3000/banks");
                setbanksData(banks.data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    

    return (
        <div style={{ position: "relative", display: "flex", justifyContent: 'center', gap: "90px", alignItems: "center", flexDirection: "column" }}>
            <div className="allocate">
                <b>Need to : <i>Undrajavaram,U Mandal, East Godavari District,Andhra Pradesh</i></b><br />
                <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "50px" }}>
                    <input type="text" placeholder='Search for City' />
                    <p>To Bank : <input type="text" placeholder='Enter Bank Name to Transfer' /></p>
                </div>
            </div>
            <table width={"80%"} >
                <tr >
                    <th style={{ backgroundColor: "black", color: "white" }}>Banks</th>
                    <th style={{ backgroundColor: "black", color: "white" }}>Location</th>
                    <th style={{ backgroundColor: "black", color: "white" }}>Groups</th>
                    <th style={{ backgroundColor: "black", color: "white" }}>Available</th>
                    <th style={{ backgroundColor: "black", color: "white" }}>More</th>
                </tr>
                {banksData ? banksData.map(bank=>{
                    return (
                        <tr>
                        <td>{bank.bankName}</td>
                        <td>{bank.city}</td>
                        <td>group</td>
                        <td>5</td>
                        <td><button className='btn'>Allocate</button></td>
                    </tr>
                    )
                }) : null }
               
                <tr>
                    <td>TNK</td>
                    <td>BB1</td>
                    <td>BB2</td>
                    <td>process</td>
                    <td><button className='btn'>Allocate</button></td>
                </tr>
            </table>
        </div>
    )
}



export default DetailsGov
