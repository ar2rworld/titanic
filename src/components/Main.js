import React from 'react'

const Main =(props)=>{
  return(<div className={props.className} style={{width:"80%"}}>
    <h3>Welcome to Titanic!(add titanic img)</h3>
    <button className="StartButton Next" onClick={()=>{
      console.log("start!");
    }}>Start</button>
  </div>)
}

export default Main