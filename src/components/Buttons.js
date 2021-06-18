import React from 'react'

const Buttons=(props)=>{
  //console.log(props.data.sibsp)
  return(<div className={props.className}>
    {props.isActive?
      <div>
        <h3>{props.desc}: {props.value}</h3>
        <br/>
        {props.data?props.data.map(r=><button onClick={()=>{
          props.setValue(r.replace(/'/g, "").replace(/\ /g, ""))
        }}>{r.replace(/'/g, "")}</button>):<i>Loading...</i>}
        <br/>
        <button className={props.prevButton}>Previous</button>
        <button className={props.nextButton}>Next</button>
      </div>
    :
    <div className="minimized">{props.name}</div>}
  </div>)
}

export default Buttons