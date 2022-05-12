//import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { renderIntoDocument } from 'react-dom/test-utils';

function App() {
  const brag=[
    {
      name:"Sumsung",model:"Galaxy8",
      desc:"galexy8 is new genraions mobile have featues and its new model in the wolrd"
    },
    {
      name:"Apple",model:"I78",
      desc:"galexy8 is new genraions mobile have featues and its new model in the wolrd"
    },
    {
      name:"Sony",model:"Xperiya2",
      desc:"galexy8 is new genraions mobile have featues and its new model in the wolrd"
    },
    {
      name:"Realme",model:"Realme3",
      desc:"galexy8 is new genraions mobile have featues and its new model in the wolrd"
    },
  ]
  return (
    <div className="App">
    {/* <Plans/>*/}

    {/*
{brag.map((br,index)=>(
<Hello key={index} name={br.name} model={br.model} desc={br.desc}/>
))};*/}


     <Box/>
      
    </div>
  );
}



function Box(){
  const[value,setValue]=useState(null);
  return(
    <div onClick={()=>setValue(value===X?"O":"X")} className='game-box'>
     
    </div>

  )
}























function Plans(){
  const plan=[
    {name:'FREE',price:0,
     features: [
      "Single User",
      "5GB Storage",
     " Unlimited Public Projects",
     "Community Access",
      "Unlimited Private Projects",
     " Dedicated Phone Suppor",
     " Free Subdomain",
      "onthly Status Reports"

     ]},
      {
        name:'PLUS',price:9,
        features:[
"5 Users",
"50GB Storage",
"Unlimited Public Projects",
"Community Access",
"Unlimited Private Projects",
"Dedicated Phone Support",
"Free Subdomain",
"Monthly Status Report"
        ]
      },
      {
        name:"PRO",price:49,
        features:[
        "Unlimited Users",
        "150GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Unlimited Free Subdomains",
       " Monthly Status Reportsres"

        ]
      },
    

  ]
  return(
    <div>
    {/*{plan.map((brand)=>(
    <Card name={brand.name} price={brand.price} features={brand.features}/>
    ))}*/}

    {/*<Counter name={brands.name}model={brands.model} desc={brands.desc}/>*/}
    </div>
  )
}




function Hello(props){
  const[like,setLike]=useState(0);
  const[dislike,setDislike]=useState(0);
  const[show,setShow]=useState(true);
  const[brandname,setBrandname]=useState();
  const[brandmodel,setBrandmodel]=useState();
  const[branddesc,setBranddesc]=useState();
  const styles={background:like>=dislike?"green":"white",padding:"20px",marginBottom:"10px"}
  return(
  
    <div style={styles} >
    <div className='two'>
      <input onChange={(event)=>{console.log(event.target.value)}} placeholder='Brandname'/>
      <input onChange={(event)=>{console.log(event.target.value)}} placeholder='Brandmodel'/>
      <input onChange={(event)=>{console.log(event.target.value)}} placeholder='Branddesc'/>
      <button>Submit</button>
   </div>
<div className='one'>
   <h1>{props.name}</h1>
   <h2>{props.model}</h2>
   <button onClick={()=>setShow(!show)}>{!show ? "More":"Less"} </button>
   {show?<h4>{props.desc}</h4>:""}<br/><br/>
<button onClick={()=>setLike(like+1)}>Like{like}</button>
<button onClick={()=>setDislike(dislike+1)}>Dislike{dislike}</button>

</div>
    </div>
  )
}

















function Counter(props){
  const[like,setLike]=useState(0);
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.model}</p>
  <button onClick={()=>setLike(like+1)}>Click me</button>
 
    </div>
  )
}





function Card(props){
  return(
<div className="card">
<p className="name">{props.name}</p>
<p className="price">${props.price}<span className="price-duration">/month</span></p>
<hr></hr>
<ul className="features">
  {props.features.map((feature)=>(
    <li>{feature}</li>
  ))}
</ul>

<button className="button">BUY</button>
</div>
  )
}


export default App;
