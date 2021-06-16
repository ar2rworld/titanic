import React from 'react'

const Sex=(props)=>{
  const onChange=(e)=>{
    //console.log(e.target)
    const {value}=e.target
    props.setSex(value)
  }
  return(<div className={props.className}>
    {props.isActive?
    <div>
      <h3>Choose your gender:</h3>
      <input type="radio" name="Sex" value="1"
              onChange={onChange}
              checked={props.sex==="1"}
            />Male<br/>
      <input type="radio" name="Sex" value="0"
              onChange={onChange}
              checked={props.sex==="0"}
            />Female<br/>
        <button className="ToPclass">Previous</button>
        <button className="ToAge">Next</button>
    </div>            
    :
    <div className="minimized">Sex view</div>
    }
    </div>)
}

export default Sex