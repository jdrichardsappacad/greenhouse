import ReactSlider from 'react-slider';
import { useState, useEffect } from 'react';
import { useClimate } from '../../context/ClimateContext';
import './Hygrometer.css';

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [goal, setGoal] = useState(humidity);

  useEffect(() => {
    const changeTemp = setInterval(() => {
      if (humidity < goal) {
        setGoal((prevGoal) =>
          prevGoal - humidity === 1 ? prevGoal - 1 : prevGoal - 2
        );
      }
      if (humidity > goal) {
        setGoal((prevGoal) =>
          humidity - prevGoal === 1 ? prevGoal + 1 : prevGoal + 2
        );
      }
    }, 1000);

    return () => {
      clearInterval(changeTemp);
    };
  }, [goal, humidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className='actual-humid'>Actual Humidity: {goal}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {
          setHumidity(val);
        }}
        className='hygrometer-slider'
        thumbClassName='hygrometer-thumb'
        trackClassName='hygrometer-track'
        ariaLabel={'Hygrometer'}
        orientation='vertical'
        min={0}
        max={100}
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

export default Hygrometer;
