import './App.css';
import SettingContext from './SettingContext';
import Settings from './Settings';
import Timer from './Timer';
import { useState } from 'react';

function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <main>
      <SettingContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes 
      }}>
        {showSettings ? <Settings/> : <Timer/>}
      </SettingContext.Provider>
    </main>
  );
}

export default App;
