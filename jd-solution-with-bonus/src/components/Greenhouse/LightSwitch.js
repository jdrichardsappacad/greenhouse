import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { setThemeName, themeName } = useTheme();

  return (
    <div className={`light-switch ${themeName}`}>
      <div onClick={() => setThemeName('day')} className='on'>
        DAY
      </div>
      <div onClick={() => setThemeName('night')} className='off'>
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;
