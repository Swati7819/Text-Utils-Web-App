import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const toggleMode = () =>{
    if(mode=== 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#000435'
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
   <>
    {/* <Navbar></Navbar> */}
    
    <Navbar title = "Text-Utils" about= "About-TextUtils" mode = {mode} toggleMode = {toggleMode}></Navbar> 
    <div className='container'>
    <TextForm heading = "Enter the text to analysis" mode={mode} ></TextForm>
    </div>
   </>
  );
}

export default App;
