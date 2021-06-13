import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import Main from './components/Main'
import Pclass from './components/Pclass'

function App() {
  const [pclass, setPclass] = useState("")
  const [sex, setSex] = useState("")
  const [age, setAge] = useState("")
  const [fare, setFare] = useState("")
  const [sibsp, setSibsp] = useState("")
  const [parch, setParch] = useState("")
  const [ticket, setTicket] = useState("")
  const [cabin, setCabin] = useState("")
  const [embarked, setEmbarked] = useState("")
  const [titanic, setTitanic] = useState({})
  const [activePage, setActivePage] = useState(0)
  fetch("http://ec2-3-141-45-250.us-east-2.compute.amazonaws.com:8000/titanic/", {method:"GET", headers:{'Content-Type': 'application/json'}})
  .then(r=>r.json())
  .then(o=>{console.log(o[0])})
  .catch(r=>console.log(r))

  const animatePage=()=>{
    /*$(".Page").hover((obj)=>{
      //console.log("Page hover");
      //console.log(obj)
      if(obj.type=='mouseenter'){
        $(obj.currentTarget).animate({width:'80%'},2, ()=>{
          console.log("callback")
        })
      }
      if(obj.type=='mouseleave'){
        $(obj.currentTarget).animate({width:'50px'}, 2)
      }
    })*/
    
  }
  //className='page'

  useEffect(()=>{
    animatePage();
  })


  return (
    <div className="App">
      <Main className='Page'/>
      <Pclass className="Page"/>
    </div>
  );
}

export default App;
