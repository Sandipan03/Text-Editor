// import logo from './logo.svg';
import './App.css';
// let name="Sandipan";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
import About from './Components/About';
import {Routes,Route} from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert= (message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    },1500);
  }
  const toggleMOde = () =>{
    if (mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled","success");
      // document.title='Dark Mode enabled';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success");
    }
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMOde={toggleMOde}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <TextForm  showalert={showalert} heading="Enter the text to analyze" mode={mode}/> */}
<Routes>
          <Route path="/about" element={<About mode={mode}/>}></Route>
          <Route path="/" element={<TextForm  showalert={showalert} heading="Try TextUtils - Word Counter, Character counter, Remove Extra Spaces" mode={mode}/>}></Route>
        </Routes>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
