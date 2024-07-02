import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Status = () => {
    return (
        <>
            <div className="container">
                <div className="my-status">
                    <b><h2>My Status</h2></b>

                    <div>
                        <div className="g">
                            <div className="g-img"></div>
                            <div className="g-matter">O+</div>
                        </div>
                        <div className="state-details">
                            <div className='state-adduser'>
                               <table>
                                <tr>
                                    <th>Donar Name :</th>
                                    <td>Vishnu Raj</td>
                                </tr>
                                <tr>
                                    <th>Group :</th>
                                    <td>O+</td>
                                </tr>
                                <tr>
                                    <th>Location :</th>
                                    <td>Bhimavaram</td>
                                </tr>
                                <tr>
                                    <th>Age :</th>
                                    <td>19</td>
                                </tr>
                                <tr>
                                    <th>Mobile No :</th>
                                    <td>9866789205</td>
                                </tr>
                               </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="donated">
                    <div className="donated-head">
                        <h2>Donated At :</h2>
                        <h2>Total Donations : <span className='no-design'>3</span></h2>
                    </div>
                    <div className="donated-divs">
                    <div className="donated-div">
                           <div> <h2>DHARANI BLOOD</h2>
                           <h3>BANK</h3></div>
                           <div><p> Location : Tanuku</p>
                           <p> Date : 2/6/2024</p></div>
                        </div>
                        <div className="donated-div">
                           <div> <h2>CHIRANJIVI BLOOD</h2>
                           <h3>BANK</h3></div>
                           <div><p> Location : Tanuku</p>
                           <p> Date : 2/6/2024</p></div>
                        </div>
                        <div className="donated-div">
                           <div> <h2>ASR BLOOD</h2>
                           <h3>BANK</h3></div>
                           <div><p> Location : Tanuku</p>
                           <p> Date : 2/6/2024</p></div>
                        </div>
                    </div>
                </div>
                <div className="msgs">
                Donating blood is a simple yet powerful way to make a difference in the world. Each donation can save multiple lives, providing critical support to those in need during emergencies, surgeries, and treatments for various medical conditions. The process is safe, quick, and immensely rewarding, knowing that your contribution could be a lifeline for someone else. 
                </div>
            <Footer/>
            </div>
        </>
    )
}

export default Status
