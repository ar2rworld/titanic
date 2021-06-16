import React from 'react'

const Age=(props)=>{
  const onChange=(e)=>{
    //console.log(e.target)
    const {value}=e.target
    props.setAge(value)
  }
  return(<div className={props.className}>
    {props.isActive?
    <div>
    <h3>Choose your age:</h3>
    <input type="number" name="Age" value={props.age}
      onChange={onChange}
      min="0" max="80"
    /> years old<br/>
    <button className="ToSex">Previous</button>
    <button className="ToFare">Next</button>
  </div>     
    :
    <div className="minimized">Age view</div>}
  </div>)
}

export default Age