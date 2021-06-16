import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import Main from './components/Main'
import Pclass from './components/Pclass'
import Sex from './components/Sex';
import Age from './components/Age';
import Fare from './components/Fare';
import Buttons from './components/Buttons';

function App() {
  const [pclass, setPclass] = useState("1")
  const [sex, setSex] = useState("1")
  const [age, setAge] = useState("21")
  const [fare, setFare] = useState("100")
  const [sibsp, setSibsp] = useState("")
  const [parch, setParch] = useState("")
  const [ticket, setTicket] = useState("")
  const [cabin, setCabin] = useState("")
  const [embarked, setEmbarked] = useState("")
  const [titanic, setTitanic] = useState({})
  const [activePage, setActivePage] = useState(0)

  const [pageNumber, setPageNumber] = useState(0)

  const [data, setData] = useState({})

  const animateComponent=(componentFirst, componentSecond, buttonForward, buttonBack, startPageNumber)=>{
    $("."+buttonForward).click((obj)=>{
      $("."+componentFirst).animate({width:"1%"}, 100)
      $("."+componentSecond).animate({width:"80%"},100)
      setPageNumber(startPageNumber+1)
      console.log(pageNumber)
      //$(".MainPage").animate({fontSize:"20px"}, 2)
    })
    $("."+buttonBack).click((obj)=>{
      $("."+componentFirst).animate({width:"80%"}, 100)
      $("."+componentSecond).animate({width:"1%"},100)
      setPageNumber(startPageNumber)
      console.log(pageNumber)
      //$(".MainPage").animate({fontSize:"10px"}, 2)
    })
    $("."+buttonForward).click((o)=>{
      $(".MainPage").animate({fontSize:"20px"}, 2)
    })
  }
  //className='page'

  useEffect(()=>{
    animateComponent("MainPage", "PclassPage", "StartButton", "ToMain", 0);
    animateComponent("PclassPage", "SexPage", "ToSex", "ToPclass", 1);
    animateComponent("SexPage", "AgePage", "ToAge", "ToSex", 2);
    animateComponent("AgePage", "FarePage", "ToFare", "ToAge", 3);
    
    fetch("http://ec2-3-141-45-250.us-east-2.compute.amazonaws.com:8000/titanic/", {method:"GET", headers:{'Content-Type': 'application/json'}})
    .then(r=>r.json())
    .then(o=>{
      console.log(o[0].sibsp);
      //if(!data)
      //setData(o[0]);
      //console.log(data)
    })
    .catch(r=>console.log("error: " +r))
  })

  return (
    <div className="App">
      <Main className='MainPage Page' isActive={pageNumber===0?true:false}/>
      <Pclass className="PclassPage Page" setPclass={setPclass} pclass={pclass} isActive={pageNumber===1?true:false}/>
      <Sex className="SexPage Page" isActive={pageNumber===2?true:false} sex={sex} setSex={setSex} />
      <Age className="AgePage Page" isActive={pageNumber===3?true:false} age={age} setAge={setAge} />
      <Fare className="FarePage Page" isActive={pageNumber===4?true:false} fare={fare} setFare={setFare} />
      <Buttons />
    </div>
  );
}

export default App;
