import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useEffect, useState } from 'react';
import { useClimate } from '../../context/ClimateContext';

function ThermometerBonus() {
  const { temperature, setTemperature } = useClimate();
  const [goal, setGoal] = useState(temperature);

  useEffect(() => {
    const changeTemp = setInterval(() => {
      if (temperature < goal) {
        setGoal((prevGoal) => prevGoal - 1);
      }
      if (temperature > goal) {
        setGoal((prevGoal) => prevGoal + 1);
      }
    }, 1000);

    return () => {
      clearInterval(changeTemp);
    };
  }, [goal, temperature]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className='actual-temp'>Actual Temperature: {goal}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {
          setTemperature(val);
        }}
        className='thermometer-slider'
        thumbClassName='thermometer-thumb'
        trackClassName='thermometer-track'
        ariaLabel={'Thermometer'}
        orientation='vertical'
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default ThermometerBonus;
