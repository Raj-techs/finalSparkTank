import React from 'react'
import { Link } from 'react-router-dom'

const Groups = () => {
    return (
        <>
            <div className="groups">
                <div className="outer-scroll">
                    <ul style={{marginTop:"150px"}}>
                        <li>
                            <div className="simg"></div>
                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>A+</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li>

                        <li>
                        <div className="simg"></div>
                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>A-</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li>
                        <li>
                        <div className="simg"></div>
                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>B+</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li>

                        <li>
                        <div className="simg"></div>
                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>B-</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li>




                    </ul>
                    <ul>
                        <li>
                        <div className="simg"></div>
                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>AB+</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li>

                        <li>
                        <div className="simg"></div>
                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>AB-</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li>
                        <li>
                        <div className="simg"></div>
                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>O-</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li>

                        <Link to='/singlegroup' style={{color:"white",textDecoration:"none"}}><li>
                        <div className="simg"></div>

                            <h1 style={{zIndex:2,color:"white",marginTop:"40px"}}>O+</h1>
                            <div className='separate'>
                                <div className="active"><h5>Active</h5><p>90</p></div>
                                <div className="expire"><h5>Expired</h5><p>4</p></div>
                            </div>
                        </li></Link>




                    </ul>
                </div>
                <ul style={{width:"90%" ,display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                        <li className='secondary-boxs'>
                            <h1>Active
                            </h1>
                            <div className='separate middle'>
                                <div className="active" style={{fontSize:"2em"}}><p>90</p></div>
                            </div>
                        </li>

                        <li className='secondary-boxs'>
                            <h1>Expired</h1>
                            <div className='separate middle'>
                                <div className="active" style={{fontSize:"2em"}}><p>90</p></div>
                            </div>
                        </li>
                        <li className='secondary-boxs'>
                            <h1>Total</h1>
                            <div className='separate middle'>
                                <div className="active" style={{fontSize:"2em"}}><p>90</p></div>
                            </div>
                        </li>

                        <li style={{width:"70vh",height:"30vh"}}>
                            <h1>Discharged</h1>
                            <div className='separate middle'>
                                <div className="active" style={{fontSize:"2em"}}><p>90</p><button style={{padding:"5px",borderRadius:"20px",minWidth:"90px",color:"white",backgroundColor:"red"}}>+</button></div>
                            </div>
                        </li>




                    </ul>
                
                
            </div>
            
        </>
    )
}

export default Groups
