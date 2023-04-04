
import { useEffect,useState } from 'react';
import './App.css';
import Capture from './Data/Capture';
import React from 'react';
import Text from './Data/Text';

function App() {

  const [post,setPost]=useState()
  useEffect(()=>{
    fetch('https://data-backend-tmlw.vercel.app/dataPage').then(response=>response.json())
    .then(json=>setPost(json))
  },[])
  return (
    <>
    {
      Text.map((item)=>{
        return(
          <Capture  title={item.title} name={item.name} age={item.age} qualification={item.qualification} descripition={item.descripition}/>
        )
      })
    }

    <div>
    {
      post && post.map((item)=>{
        return(
          <Capture  title={item.title} name={item.name} age={item.age} qualification={item.qualification} descripition={item.descripition}/>
        )
      })
    }
    </div>

    </>
  );
}

export default App;
