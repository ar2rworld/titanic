import React from 'react'

const Main =(props)=>{
  //console.log(props.isActive)
  return(<div className={props.className} style={{width:"80%"}}>
    {props.isActive?
      <div><h3>Welcome to Titanic!(add titanic img)</h3>
      <button className="StartButton NextButton" onClick={()=>{
        console.log("start!");
      }}>Start</button></div>
    :
    <div className="minimized">"Welcome to Titanic!"</div>}
  </div>)
}

export default Main