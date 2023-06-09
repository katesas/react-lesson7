import React, {useState, useEffect} from 'react';
import './CustomeRapidapi.css';

export default function CustomeRapidapi() {

  const[trans, setTrans] = useState("");
  const[value, setValue] = useState("I love react");

  useEffect(()=>{
    const url = 'https://text-translator2.p.rapidapi.com/translate';
  const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '01025545afmsh40133cdc026e95bp1d354fjsn5d2efe3cb027',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: 'en',
		target_language: 'ru',
		text: value
	})
};

fetch(url, options).then(responce => responce.json()).then(body => setTrans(body.data.translatedText));
  }, [value]);

  return (
    <div>
      <h2>Работа переводчика</h2>
      <h4 className='trans'>
        <span>Перевод</span> : {trans}
      </h4>
      <hr/>
      <form action='#'>
        <input type='text' onChange={(e)=>{
          if(e.target.value != ''){
            setValue(e.target.value)
          }
          else{
            setTrans("")
          }
        }}/>
      </form>
    </div>
  )
}
