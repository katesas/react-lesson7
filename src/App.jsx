import './App.css';
import React, { useState } from 'react';
import './css/custome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CustomeBootstrap from './components/customeBootstrapAnt/CustomeBootstrap';
import CustomeHook from './components/customHook/CustomeHook';
import CustomeRapidapi from './components/customeRapidapi/CustomeRapidapi';


function App() {
  
  const [flagHero, setFlagHero] = useState(false)
  const [flagWelcom, setFlagWelcom] = useState(false)
  const [flagTestList, setFlagTestList] = useState(false)
  

  function getHero(){
    setFlagHero(!flagHero)
  } 
  function getWelcome(){
    setFlagWelcom(!flagWelcom)
  } 
  function getTestList(){
    setFlagTestList(!flagTestList)
  } 
  return (
   <div className='les4'>
    <h1> Lesson-4</h1>
    <button className='but' onClick={getHero}>Добавить/Убрать Стили</button>
        {flagHero ? <CustomeBootstrap /> : null}
        
    <button className='but' onClick={getWelcome}>Добавить/Убрать Hook</button>
        {flagWelcom ? <CustomeHook /> : null}
        
    <button className='but' onClick={getTestList}>Добавить/Убрать Translate</button>
        {flagTestList ? <CustomeRapidapi /> : null}
    </div>
    
  );
}

export default App;
