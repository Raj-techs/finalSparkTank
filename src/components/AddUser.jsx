import React from 'react'

const AddUser = () => {
    return (
        <>
            <div className="adduser ">
                
                <div className='inner-adduser'>
                    <h2 style={{color:"darkred",fontWeight:"bolder"}}><u>Add User</u></h2>
                    <div className='input-div'>
                         <span>Name</span> : <input type="text" />
                    </div>
                    <div className='input-div'>
                             <span>Group</span> : <input type="text" />
                    </div>

                        <div className='input-div'>
                             <span>Location</span> : <input type="text" />
                        </div>
                    <div className='input-div'>
                             <span>Age</span> : <input type="number" />
                    </div>

                        <div className='input-div'>
                            <span> Mobile NO.</span> : <input type="text" />
                        </div>
                    <button>Add</button>
                </div>
                {/* <div className="gif">
                    
                </div> */}
                <div className="img"></div>
            </div>
        </>
    )
}

export default AddUser
