



import dynamic from 'next/dynamic'

import React, { useEffect, useRef, useState } from 'react';

export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('');
    const [numero, cantidad] = useState('');

    const [items, setItems] = useState([]);
    const [NumeroFocus, setfocus] = useState(0);
    const [img, setimg] = useState("");
    const [morInfo, setMorInfo] = useState([]);
    const divdes = useRef();
    const [info, setinfo] = useState([]);

 

  
   
    useEffect(() => {
     
        resourceType -= 1;
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numero}&offset=${resourceType}`)

            .then(response => response.json())
            .then(json => setItems(json))
      console.log(items)

           
           
         
    }, [resourceType , numero]);
   
    useEffect(() => {
      if(NumeroFocus >0){
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${NumeroFocus}/`)
          .then(response => response.json())
          .then(json => setMorInfo(json))
          setinfo(morInfo["height"])
        console.log(info)

      }
        setimg( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${NumeroFocus}.png`)
       
       
   
      }, [NumeroFocus])

   
    const ComponentUE = dynamic(() => import('../../components/dinamic/useEffectComp'), {
        ssr: false,
      });
    let cont= resourceType ;
   

    let objeto =  items["results"]
    let nombrePochimon= [];
    let listasmagenes= []
   // console.log(items)
    for (const i in objeto) {
        nombrePochimon.push(objeto[i]);
        
      }
      
    function aparecer(n){
      setfocus(n)
      divdes.current.style.display = "block"
    }



    return (
        <> 
        
        <h1> Poke APIacidos</h1>
        <div id="al">
        <div id="div" className= "">
           <form>
                numero de la pokedex: 
               <input type="text"value ={resourceType} onChange={(e) => setResourceType(e.target.value)}></input><br></br>
               Cantidad
               <input type="text" value ={numero} onChange={(e) => cantidad(e.target.value)}></input><br></br>
               
              
           </form>
           <img src={img}></img>
           </div>
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           <div id="img" ref={divdes}>
           {info}dm
          </div>
           <div id="respuesta">
           {nombrePochimon.map((post) => (
          <p onMouseEnter={(e) => aparecer(e.target.id)} id={cont}>{cont++} {post["name"]}</p>
      ))}

      </div>
      <ComponentUE />
      
      </div>
      
        </>

    )

}


