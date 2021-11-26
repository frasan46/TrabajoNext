



import dynamic from 'next/dynamic'

import React, { useEffect, useState } from 'react';

export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('0');
    const [numero, cantidad] = useState('1');

    const [items, setItems] = useState([]);
    const [NumeroFocus, setfocus] = useState(0);
    const [img, setimg] = useState("");

    const handleResize = () => {
     
        
        setItems([])

    }

   
    useEffect(() => {
      // window.addEventListener('blur', handleResize);
        
        console.log("d")
        resourceType -= 1;
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numero}&offset=${resourceType}`)

            .then(response => response.json())
            .then(json => setItems(json))

            setimg( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${NumeroFocus}.png`)
            console.log(img)
    }, [resourceType , numero , NumeroFocus]);
   
   
    const ComponentUE = dynamic(() => import('../../components/dinamic/useEffectComp'), {
        ssr: false,
      });
    let cont= resourceType ;
   

    let objeto =  items["results"]
    let nombrePochimon= [];
    let listasmagenes= []
    console.log(items)
    for (const i in objeto) {
        nombrePochimon.push(objeto[i]);
        
      }
      
    



    return (
        <> 
        
        <h1> Poke APIacidos</h1>
        <div id="al">
        <div id="div" className= "">
           <form>
                numero de la pokedex: 
               <input type="text" onChange={(e) => setResourceType(e.target.value)}></input><br></br>
               Cantidad
               <input type="text" onChange={(e) => cantidad(e.target.value)}></input><br></br>
               
              
           </form>
           <img src={img}></img>
           </div>
           <div id="img">
          
             
           </div>
           <div id="respuesta">
           {nombrePochimon.map((post) => (
        <p  > <button onClick={(e) => setfocus(e.target.value)} value={cont}>+</button>{cont++} {post["name"]}</p>
      ))}
      </div>
      </div>
        </>

    )

}


