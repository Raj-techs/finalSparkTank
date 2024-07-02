import React from 'react'

const Transfer = () => {
  return (
    <>
      <div className="gov-transfer">
        <div className="gov-trans-btns">
            <button className='btn'> Allocated</button>
            <button className='btn'> Less Occured areas</button>
        </div>
        <table>
            <tr >
                <th>City</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
                <th>More</th>
            </tr>
            <tr>
                <td>TNK</td>
                <td>BB1</td>
                <td>BB2</td>
                <td>process</td>
                <td>Cancel</td>
            </tr>
            <tr>
                <td>BVRM</td>
                <td>BB3</td>
                <td>BB4</td>
                <td>Completed</td>
                <td>Cancel</td>
            </tr>

            <tr>
                <td>TNK</td>
                <td>BB1</td>
                <td>BB2</td>
                <td>process</td>
                <td>Cancel</td>
            </tr>        </table>
        <div className="gov-trans-data"></div>
      </div>
    </>
  )
}

export default Transfer
