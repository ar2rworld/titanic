import React from 'react'

const Pclass=(props)=>{
  const onChange=(e)=>{
    //console.log(e.target)
    const {value}=e.target
    props.setPclass(value)
  }
  return(<div className={props.className}>
    {props.isActive?
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <h3>Choose your passanger class:</h3>
          <input type="radio" name="Pclass" value="1"
            onChange={onChange}
            checked={props.pclass==="1"}
          />
            1st Class
          <input type="radio" name="Pclass" value="2"
            onChange={onChange}
            checked={props.pclass==="2"}
          />
            2nd Class
          <input type="radio" name="Pclass" value="3"
            onChange={onChange}
            checked={props.pclass==="3"}
          />
            3rd Class
          <br/>
        </form>
        <button className="ToMain">Previous</button>
        <button className="ToMain">Next</button>
      </div>
    :
    "Pclass view"}
  </div>)
}

export default Pclass;