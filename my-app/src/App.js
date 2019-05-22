import React from 'react';
import './App.css';
import RnaTranscription from './components/RnaTranscription.js'
import InputDnaStrand from './components/InputDnaStrand.js'
import LeapYear from './components/LeapYear.js'
import RnaTranscriptionApiMethod from './components/RnaTranscriptionApiMethod.js'

function App() {
  return (
    <div>
      <RnaTranscription />
      <InputDnaStrand />
      <LeapYear />
      <RnaTranscriptionApiMethod/>
    </div>
  );
}

export default App;
