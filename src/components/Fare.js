import React from 'react'

const Fare=(props)=>{
  const onChange=(e)=>{
    //console.log(e.target)
    const {value}=e.target
    props.setFare(value)
  }
  return(<div className={props.className}>
    {props.isActive?
    <div>
    <h3>Choose your fare:</h3>
    $<input type="number" name="Fare" value={props.fare}
      onChange={onChange}
      min="0" max="512.3292"
    /><br/>
    <button className="ToAge">Previous</button>
    <button className="ToAge">Next</button>
  </div>     
    :
    <div className="minimized">Fare view</div>}
  </div>)
}

export default Fare