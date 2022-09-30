import React, { useEffect, useState } from 'react';

//other components
import BiggerThen from './components/Bigger';
import LessThan from './components/Less';

function App() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, [])

  if( width >= 768){
    return(
      <BiggerThen />
    )
  }else{
    return(
      <LessThan />
    )
  }

}

export default App;
