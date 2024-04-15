import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Alert } from './components/Alert';
import { TextForm } from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')//whether dark mode is enabled or not
  //mode is a state variable and setMode is used to set the value of the state variable
  const [alert, setAlert] = useState(null)
  //alert is a object 

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 2000);

  }
  const toggleMode = () =>{
    if(mode=== 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#000435'
      showAlert("Dark mode has been enabled", "success")
      
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "Success")
    }
  }
  return (
   <>
    {/* <Navbar></Navbar> */}
    
    <Navbar title = "Text-Utils" about= "About-TextUtils" mode = {mode} toggleMode = {toggleMode}></Navbar> 
    <Alert alert = {alert} />
    <div className='container'>
    <TextForm heading = "Enter the text to analyse" mode={mode} showAlert = {showAlert}></TextForm>
    </div>
   </>
  );
}

export default App;
