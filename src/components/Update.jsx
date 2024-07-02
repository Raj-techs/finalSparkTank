import React from 'react'

const Update = () => {
    return (
        <>
            <div className="adduser">
                <div className='inner-adduser single'>
                    <h3>UPDATE USER</h3>
                    <div>
                        User ID : <input type="text" style={{ width: "90px" }} />
                    </div>
                    <div>
                        Name : <input type="text" />
                    </div>
                    <div>
                        <div>
                            Group : <input type="text" />
                        </div>
                        <div>
                            Location : <input type="text" />
                        </div>
                    </div>

                    <div>
                        <div>
                            Age : <input type="number" />
                        </div>
                        <div>
                            Mobile NO. : <input type="text" />
                        </div>

                    </div>
                    <div>
                        Reports: <input type="file" />
                    </div>
                    <div>
                        <div>
                            Visits on : <input type="date" />
                        </div>
                        <div>
                            Time : <input type="time" />
                        </div>

                    </div>
                    <div style={{position:"relative"}}>
                        <div>
                            Problem: <textarea type="file" placeholder='Enter Patient Condition' rows={3} cols={35} />
                        </div>
                        <div>
                            Tablets Issued: <textarea type="file" placeholder='Enter Tablets' rows={3} cols={30} />
                        </div>
                        <button style={{ textAlign: "center" ,position:"absolute",top:"35px"}} >Update</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Update
