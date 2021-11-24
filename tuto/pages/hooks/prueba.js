import React, { useEffect, useState } from 'react';
// Important disable SSR
import dynamic from 'next/dynamic'

const ComponentUE = dynamic(() => import('../../components/dinamic/useEffectComp'), {
    ssr: false,
  });

export default function useEffectAdvancedPage() {    

    return (
       <ComponentUE/>
    )
}