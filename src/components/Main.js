import React from 'react'

const Main =(props)=>{
  //console.log(props.isActive)
  return(<div className={props.className} style={{width:"80%"}}>
    {props.isActive?
      <div><h3>Welcome to Titanic!</h3>
      <button className="StartButton NextButton" onClick={()=>{
        console.log("start!");
      }}>Start</button>
      <img style={{width:"170px", height:"170px", margin:"3%"}} src="http://christianmoltenmetalbands.weebly.com/uploads/2/9/1/8/29186251/8011779.jpg?168"/>
      </div>
    :
    <div className="minimized">"Welcome to Titanic!"</div>}
  </div>)
}

export default Main