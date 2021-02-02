# Greenhouse Project

In this project, you will be creating an frontend application that maintains a
mock greenhouse. You will display and control the climate of the greenhouse
using React context.

## Phase 0: Set Up

Download the starter and run `npm install`.

Start the development server by running `npm start`.

## Phase 1: Greenhouse Theme

In this first phase, you will connect the theme stored in the `ThemeContext` to
change the look of the `Greenhouse` component.

Take a look at the code in the `src/context/ThemeContext.js` file. You'll notice
that there is a context created called `ThemeContext` and a provider for that
context created for you. The value of the context is an object with two keys,
`themeName`, and `setThemeName`. A custom React hook called `useTheme` returns
this object, the value of the context. The `themeName` should be switching
between two strings, `"day"` or `"night"`.

In the entry file, `src/index.js` the provider created for the `ThemeContext`
is wrapping the entire application inside of the `Root` component. This gives
all wrapped components the ability to gain access to the `ThemeContext`'s value.

Your job is to use the value of the `ThemeContext` in the `Greenhouse` component
(`src/components/Greenhouse/Greenhouse.js`) to display a different image based
on the `themeName` property in the context value. If `themeName` is `"day"`,
then the `dayImage` in the `Greenhouse` component should be displayed. If the
`themeName` is `"night"`, then the `nightImage` should be displayed.

To use the `ThemeContext`'s value in this component, use the `useTheme` hook
from the `src/context/ThemeContext.js` file to get the context value in the
component. Then use the information from the value to display the different
image according to the name of the theme.

Test this on the browser. If the `themeName` is set to `"day"` by default, then
the `dayImage` should be displayed. If the `themeName` is set to `"night"` by
default in the `ThemeContext`'s provider component, then the `nightImage` should
be displayed.

Congratulations, you just connected a component to a context!

## Phase 2: LightSwitch

Now, you'll work on changing the value of a context in a React component.

Take a look at the code in the `LightSwitch` component
(`src/components/Greenhouse/LightSwitch.js`). This component should change the
`themeName` between `"day"` and `"night"`. When the `div` with the class of "on"
is clicked, the `themeName` should be set to `"day"`. When the `div` with the
class of "off" is clicked, the `themeName` should be set to `"night"`.

The `themeName` value should also replace the `"day"` class on the `div` with
the class of "light-switch". Ex: (`className={"light-switch " + themeName}`).

Hint: Use the `useTheme` hook like you used in the previous phase to get the
`setThemeName` property in the context value. Then use the `setThemeName`
function to change the name of the theme to either `"day"` or `"night"` on the
click of each div.

Test this on the browser. If the image of the greenhouse changes when you click
on the "DAY" or "NIGHT" text, then you successfully changed the value of the
context in a React component!

## Phase 3: ClimateContext

In this phase, you'll learn how to create a context, a context provider, and
a React hook that will return the value of a specific context.

In the `src/context/ClimateContext.js` file, create a context called
`ClimateContext`, a provider called `ClimateProvider` for that context, and a
custom React hook that will return the value of the `ClimateContext`.

In the provider, create a component state variable that will define the
temperature of the greenhouse. The temperature should be set to `50` (50 degrees
Fahrenheit) by default. The value of the context should be set to an object with
a key to read the temperature, and a key to set the temperature.

Refer to the `ThemeContext` file (`src/context/ThemeContext.js`) if you need a
reminder on how to do any of the above!

## Phase 4: Thermometer

In this phase, you will connect the `Thermometer` component
(`src/components/Thermometer/Thermometer.js`) to the `ClimateContext`. The
thermometer should show and change the `thermometer` value in the
`ClimateContext`.

In this component, the thermometer value should be displayed as the "Actual
Thermometer". There is a React component called `ReactSlider` being rendered.
This renders a slider in the browser. When the slider value changes, the
temperature value in the context should also change. Fill in the two props
passed into `ReactSlider`, `value` and `onAfterChange`. `value` should be set to
the temperature value in the `ClimateContext`. The `onAfterChange`'s function
has a `val` argument. In the `onAfterChange` function `val` should be set as the
new temperature value in the context.

Test this out on the browser!

## Phase 5: Hygrometer

In this phase, you will add more properties on the `ClimateContext`'s value, and use those new properties in the `Hygrometer` component
(`src/components/Hygrometer/Hygrometer.js`) to the `ClimateContext`.

Create a new component state variable in the `ClimateContext`'s provider that
will read and set the humidity of the greenhouse.

The `Hygrometer` component should show and change the humidity value in the
`ClimateContext`.

Similar to the `Thermometer` component, fill in the two props passed into `ReactSlider`, `value` and `onAfterChange` which should read and change the
humidity value of the `ClimateContext`.

Test this out on the browser!

## Phase 5: Climate Stats

Connect the `ClimateStats` component
(`src/components/Greenhouse/ClimateStats.js`) to the `ClimateContext`.

Display the temperature and humidity values here.

Congratulations! You connected multiple components to use context, created your
own context, created a provider for a context with a dynamic value, and a custom
React hook to return the value of your context.

## Bonus Phase 1: Thermostat

In this bonus phase, slowly change the value of the actual temperature on a
timer at a rate of 1 degree per second whenever a user changes the desired
temperature on the thermostat.

Hint: Create a component state that tracks the desired temperature (instead of
the actual temperature) displayed on the thermostat. Then, add a `useEffect`
with that component state as a dependency with a `setInterval` function that
changes the actual temperature at a rate of 1 degree per second until the actual
temperature equals the desired temperature. Make sure to include a cleanup
function in the `useEffect` that clears the interval.

## Bonus Phase 2: Hygrometer

Like the previous phase, slowly change the value of the actual humidity on a
timer at a rate of 2 percent per second whenever a user changes the desired
humidity on the hygrometer.
