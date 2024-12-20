import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingContext from './SettingContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
    const settingsInfo = useContext(SettingContext);
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondLeft, setSecondLeft] = useState(0);

    const secondLeftRef = useRef(secondLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondLeft(nextSeconds);
        secondLeftRef.current = nextSeconds;
    }

    function initTimer() {
        secondLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondLeft(secondLeftRef.current);
    }

    function tick() {
        secondLeftRef.current--;
        setSecondLeft(secondLeftRef.current);
    }

    useEffect(() => {
        initTimer();
        const interval = setInterval(() => {
            if(isPausedRef.current){
                return;
            }
            if(secondLeftRef.current === 0) {
                return  switchMode();
            }
            tick();
        }, 1000)

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = mode === 'work' 
            ? settingsInfo.workMinutes * 60 
            : settingsInfo.breakMinutes * 60;
    const precentage = Math.round(secondLeft / totalSeconds * 100);
    const minutes = Math.floor(secondLeft / 60);
    let seconds = secondLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    return(
        <div>
            <CircularProgressbar value={precentage} text={minutes + ':' + seconds} styles={buildStyles({
                textColor:'#fff', 
                pathColor: mode === 'work' ? red : green,
                trailColor: 'rgba(255,255,255,.2)', 
            })}/>
            <div styles={{marginTop: '20px'}}>
                {isPaused 
                ? <PlayButton onClick = {() => {setIsPaused(false); isPausedRef.current = false;}}/> 
                : <PauseButton onClick = {() => {setIsPaused(true); isPausedRef.current = true;}}/>}  
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton onClick = {() => settingsInfo.setShowSettings(true)}/>
            </div>
        </div>
    );
}

export default Timer; 