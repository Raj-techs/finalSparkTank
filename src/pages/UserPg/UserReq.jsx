import React from 'react'
import Nav from '../../components/Nav'

const UserReq = () => {
    return (
        <>
            <Nav />
            <div className="user-req">
                <div className="req">
                    <h2>Request Blood</h2>
                    <div className="usrDetails">
                        <p> <input className='usr-input' placeholder='Group' type="text" /></p>
                        <p> <input className='usr-input' placeholder='Location' type="text" /></p>
                        <p> <input className='usr-input' placeholder='Units Needed' type="text" /></p>
                        <p> <input className='usr-input' placeholder='Mobile No' type="text" /></p>
                        <p>Upload Certificates <input className='usr-input'   type="file" /></p>
                        <p> <input className='usr-input' placeholder='Doctor Name' type="text" /></p>
                        <p> <input className='usr-input' placeholder='Bank Name' type="text" /></p>
                        <p> <input className='usr-input' placeholder='Location (Bank)' type="text" /></p>
                        <p> <input className='usr-input' placeholder='Mobile No (Bank)' type="text" /></p>
                        <p>Stamps <input className='usr-input'  type="file" /></p>
                    </div>
                    <button className='send-btn'>Request</button>
                </div>
            </div>
        </>
    )
}

export default UserReq
