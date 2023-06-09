import React, { useState } from 'react';
import AntTest from './AntTest';
import FormAntTest from './FormAntTest';

export default function CustomeBootstrap() {
    const [res, setRes] = useState(0);

    function incrementNum(){
        setRes(res+1)
    }
    function decrementNum(){
        setRes(res-1)
    }
 


  return (
    <div>
        <h3>Custome Bootstrap component or Ant Design</h3>
        <button type="button" class="btn btn-success" onClick={incrementNum}>Increment</button>
        <button type="button" class="btn btn-info" onClick={decrementNum}>Decrement</button>
        <h6>{res}</h6>
        <hr/>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>

        <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <hr />
        <AntTest />
        <hr/>
        <FormAntTest />
    </div>
  )
}
