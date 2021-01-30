import React, { useState } from 'react';
import Radio from './components/radio';

const App = () => {
   const [reloadApp, setReloadApp] = useState(false);

   const handleCount = () => {
      setReloadApp(!reloadApp);
   }

   console.log(reloadApp);

   return (
      <Radio key={reloadApp} handleCount={handleCount} />
   )
};

export default App;