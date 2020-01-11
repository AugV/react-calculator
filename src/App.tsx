import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { Requirements } from './components/Requirements';
import './App.scss';

const App: React.FC = () => {
  const [calcName, setCalcName] = useState('Change me!');
  
  const handleNameChange = (newName: string) => {
    newName && setCalcName(newName);
  }

  return (
    <div className='cont'>
      <Calculator calcName={calcName}/>
      <Requirements setName={handleNameChange} />
    </div>
  );
};

export default App;
