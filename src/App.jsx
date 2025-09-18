import { useState } from 'react'
//https://medium.com/@gosagnik/building-a-simple-calculator-with-react-js-65a5a2fb43e2
import ButtonPanel from './components/ButtonPanel'
import Display from './components/Display'
import './css/App.css'


function App() {
  const [input, SetInput] = useState('')

  const handleClear = () => {
    SetInput('');
  }

  const handleButtonClick = (value) => {

    if (value === '=') {
      // Evaluate the expression
      try {
        SetInput(eval(input).toString());
      } catch (error) {
        SetInput('Error');
      }
    }
    else {
      SetInput(input + value);
    }
  }

  return (
    <div className="calculator">
      <Display value={input} />
      <ButtonPanel onButtonClick={handleButtonClick} />
      <button onClick={handleClear} >Clear</button>
    </div>
  );

}
export default App
