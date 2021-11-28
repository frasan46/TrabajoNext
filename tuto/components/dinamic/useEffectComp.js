import React, { useEffect, useState } from 'react';

export default function useEffectAdvancedPage() {
   
    
  

    const handleResize = () => {
     
        
        
        console.log("Cerraste la pestaña")
    }
    useEffect(() => {
        window.addEventListener('blur', handleResize);

     
       }, []);
       return (<>
       
       </>)
        
}