import React from 'react'
import { UsersData } from '../../data/Users'
import { Link } from 'react-router-dom'
const RequestPg = () => {
    const lengthUser = UsersData.length
    return (
        <>
            <div className="gov-req">
                <h2>Requests <div className="gov-req-count">{lengthUser}</div></h2>
                <table>
                    <tr className='gov-req-head'>
                        <td>Users </td>
                        <td>Group</td>
                        <td>Units</td>
                        <td>Location</td>
                        <td>Date</td>
                        <td>Certificates</td>
                        <td>More</td>
                    </tr>
                    {/* user details  */}
                    {UsersData.map(items=>{
                        return(<tr>
                            {/* <td><img src={items.img} width={60} height={60} style={{ borderRadius: "50%" }} alt="" /><p style={{ marginTop: "15px", marginLeft: "15px" }}>{items.name}</p> </td> */}
                            <td><div className="group">{items.group}</div></td>
                            <td> <div className="mobileNo">{items.mobileNo}</div></td>
                            <td>Location</td>
                            <td>Date</td>
                            <td>Certificates</td>
                            <td><Link to={`/gov/details/${items.id}`}><button className='btn'>More</button></Link></td>
                        </tr>)
                    })}
                </table>
            </div >
        </>
  )
}

export default RequestPg
