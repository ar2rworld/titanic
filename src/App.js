import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import Main from './components/Main'
import Pclass from './components/Pclass'
import Sex from './components/Sex';
import Age from './components/Age';
import Fare from './components/Fare';
import Buttons from './components/Buttons';
import Result from './components/Result';

function App() {
  const [pclass, setPclass] = useState("1")
  const [sex, setSex] = useState("1")
  const [age, setAge] = useState("21")
  const [fare, setFare] = useState("100")
  const [sibsp, setSibsp] = useState("0")
  const [parch, setParch] = useState("0")
  const [ticket, setTicket] = useState("330911")
  const [cabin, setCabin] = useState("B45")
  const [embarked, setEmbarked] = useState("Q")
  const [activePage, setActivePage] = useState(0)
  const [result, setResult] = useState("")

  const [pageNumber, setPageNumber] = useState(0)

  const [data, setData] = useState(false)

  const animateComponent=(componentFirst, componentSecond, buttonForward, buttonBack, startPageNumber)=>{
    $("."+buttonForward).click((obj)=>{
      $("."+componentFirst).animate({width:"1%"}, 300)
      $("."+componentSecond).animate({width:"80%"},300)
      if(startPageNumber===10)
        setPageNumber(0)
      else
        setPageNumber(pageNumber+1)
      //console.log(pageNumber)
      //$(".MainPage").animate({fontSize:"20px"}, 2)
    })
    $("."+buttonBack).click((obj)=>{
      $("."+componentFirst).animate({width:"80%"}, 300)
      $("."+componentSecond).animate({width:"1%"},300)
      setPageNumber(startPageNumber)
      //console.log(pageNumber)
      //$(".MainPage").animate({fontSize:"10px"}, 2)
    })
    $("."+buttonForward).click((o)=>{
      $(".MainPage").animate({fontSize:"20px"}, 2)
    })
  }
  
  useEffect(()=>{
    animateComponent("MainPage", "PclassPage", "StartButton", "ToMain", 0);
    animateComponent("PclassPage", "SexPage", "ToSex", "ToPclass", 1);
    animateComponent("SexPage", "AgePage", "ToAge", "ToSex", 2);
    animateComponent("AgePage", "FarePage", "ToFare", "ToAge", 3);
    animateComponent("FarePage", "SibspPage", "ToSibsp", "ToFare", 4);
    animateComponent("SibspPage", "ParchPage", "ToParch", "ToSibsp", 5);
    animateComponent("ParchPage", "TicketPage", "ToTicket", "ToParch", 6);
    animateComponent("TicketPage", "CabinPage", "ToCabin", "ToTicket", 7);
    animateComponent("CabinPage", "EmbarkedPage", "ToEmbarked", "ToCabin", 8);
    animateComponent("EmbarkedPage", "ResultPage", "ToResult", "ToEmbarked", 9);
    animateComponent("ResultPage", "MainPage", "ToMain", "ToResult", 10);
    //ResultPage
    $('.StartButton').click(getData)
    $('.ToResult').click(makeRequest)
    $('.ToMain').click(resetParams)
  })
  const getData=async()=>{
    fetch("http://arturlinnik.eastus.cloudapp.azure.com:8000/titanic/", {method:"GET", headers:{'Content-Type': 'application/json'}})
    .then(r=>r.json())
    .then(o=>{
      //console.log(o[0].sibsp);
      setData(o[0])
    })
    .catch(r=>console.log("error: " +r))
    
  }
  const resetParams=()=>{
    setPclass("1")
    setSex("1")
    setAge("21")
    setFare("100")
    setSibsp("0")
    setParch("0")
    setTicket("330911")
    setCabin("B45")
    setEmbarked("Q")
    setResult("")
  }
  const makeRequest=()=>{
    console.log("Making request")
    fetch("http://arturlinnik.eastus.cloudapp.azure.com:8001/test/?password=qwerty"+
    "&pclass=" +pclass+ "&sex=" +sex+ "&age=" +age+
    "&fare=" +fare+ "&sibsp=" +sibsp+ "&parch=" +parch+
    "&ticket=" +ticket+ "&cabin=" +cabin+ "&embarked=" +embarked
    ,{
      mode: 'cors', // no-cors, *cors
      method:"GET",
      headers:{'Content-Type': 'application/json'},
    })
    .then(r=>r.json())
    .then(o=>{
      //console.log(o);
      setResult(o.result);
      //setData(o[0])
    })
    .catch(r=>console.log("error: " +r))
  }
  return (
    <div className="App">
      <Main className='MainPage Page' isActive={pageNumber===0?true:false}/>
      <Pclass className="PclassPage Page" setPclass={setPclass} pclass={pclass} isActive={pageNumber===1?true:false}/>
      <Sex className="SexPage Page" isActive={pageNumber===2?true:false} sex={sex} setSex={setSex} />
      <Age className="AgePage Page" isActive={pageNumber===3?true:false} age={age} setAge={setAge} />
      <Fare className="FarePage Page" isActive={pageNumber===4?true:false} fare={fare} setFare={setFare} />
      <Buttons className="SibspPage Page" isActive={pageNumber===5?true:false}
        name="Sibling or spouse view" desc="Number of siblings or spouses" data={data?data.sibsp.split(","):""}
        prevButton="ToFare" nextButton="ToParch"
        value={sibsp} setValue={setSibsp}
      />
      <Buttons className="ParchPage Page" isActive={pageNumber===6?true:false}
        name="Parch view" desc="Parch number" data={data?data.parch.split(","):""}
        prevButton="ToSibsp" nextButton="ToTicket"
        value={parch} setValue={setParch}
      />
      <Buttons className="TicketPage Page" isActive={pageNumber===7?true:false}
        name="Ticket view" desc="Ticket" data={data?data.ticket.split(","):""}
        prevButton="ToParch" nextButton="ToCabin"
        value={ticket} setValue={setTicket}
      />
      <Buttons className="CabinPage Page" isActive={pageNumber===8?true:false}
        name="Cabin view" desc="Choose cabin" data={data?data.cabin.split(","):""}
        prevButton="ToTicket" nextButton="ToEmbarked"
        value={cabin} setValue={setCabin}
      />
      <Buttons className="EmbarkedPage Page" isActive={pageNumber===9?true:false}
        name="Embarked view" desc="Choose embarked type" data={data?data.embarked.split(","):""}
        prevButton="ToCabin" nextButton="ToResult"
        value={embarked} setValue={setEmbarked}
      />
      <Result className="ResultPage Page" isActive={pageNumber===10?true:false}
        prevButton="ToEmbarked" nextButton="ToMain"
        result={result}
      />
    </div>
  );
}

export default App;
