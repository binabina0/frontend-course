import './App.css';
import SettingContext from './SettingContext';
import Settings from './Settings';
import Timer from './Timer';
import { useState } from 'react';

function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState();
  return (
    <main>
      <SettingContext.Provider value={{
        workMinutes: 45,
        breakMinutes: 15 
      }}>
        {showSettings ? <Settings/> : <Timer/>}
      </SettingContext.Provider>
    </main>
  );
}

export default App;
