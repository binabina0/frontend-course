import ReactSlider from 'react-slider';
import './slider.css';
import { useContext } from 'react';
import SettingContext from './SettingContext';
function Settings() {
   const settingsInfo = useContext(SettingContext)
    return(
        <div style={{textAlign:'left'}}>
            <label>work: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                 className={'slider'}
                 thumbClassName={'thumb'}
                 trackClassName={'track'}
                 value={settingsInfo.workMinutes}
                //  onChange={newValue => settingsInfo}
                 min = {1}
                 max = {120}
            />
            <label>break: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                 className={'slider green'}
                 thumbClassName={'thumb'}
                 trackClassName={'track'}
                 value={settingsInfo.breakMinutes}
                 min = {1}
                 max = {120}
            />
        </div>
    );
}

export default Settings;