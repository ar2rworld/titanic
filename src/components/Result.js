import React from 'react'

const Result=(props)=>{
  return(<div className={props.className}>
    {props.isActive?
    <div>
      <h3>You result: {props.result?props.result:<i>Loading...</i>}</h3>
      <br/>
      {props.result?props.result>=0.5?<h3>You would survive there!<br/><img style={{width:"50%",height:"40%"}} src="https://cdn.pixabay.com/photo/2015/09/09/21/37/lifesaver-933560_960_720.jpg"/></h3>:
        <h3>You wouldn't survive in Atlantic ocean with sinking Titanic.<br/><img style={{width:"50%",height:"40%"}} src="https://cdn.pixabay.com/photo/2020/05/12/15/46/iceberg-5163649_960_720.jpg"/></h3>:""}
      <button className={props.prevButton}>Previous</button>
      <button className={props.nextButton}>Start again</button>
    </div>            
    :
    <div className="minimized">Result view</div>
    }
  </div>)
}

export default Result