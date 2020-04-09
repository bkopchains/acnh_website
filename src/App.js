import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import * as R from 'ramda';
import './App.css';

import {ACNH_FISH, ACNH_FISH_OLD} from './ACNH_Data/Fish';
import ACNH_INSECTS from './ACNH_Data/Insects';

const App = () => {
  const [fishData, setFishData] = useState("Test App");
  const [bugData, setBugData] = useState("Test App");

  const formatData = (values) => {
    return values.map(value => {
      return {value: value, label: value.name}
    })
  }

  const FISH_FIXED = useMemo(() => R.map((fish) => {
    const oldFish = R.find(R.propEq("id", fish.id.toString()))(ACNH_FISH_OLD);
    if(oldFish){
      fish.price = oldFish.price;
    }
    return fish;
  }, ACNH_FISH), [ACNH_FISH, ACNH_FISH_OLD])

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="TitleBox">
            <div>ACNH Critter Data</div>
          </div>
        </header>
        <div className="App-Body">
          <div className="critterSection">
            <h3>Fish</h3>
            <Select 
              options={formatData(FISH_FIXED)}
              className="Selector"
              onChange={selected => setFishData(selected.value)}
            />
            <table className="critterTable">
              <tr>
                <th>Name:</th> 
                <th>{fishData.name}</th>
              </tr>
              <tr>
                <th>Location: </th>
                <th>{fishData.location} </th>
              </tr>
              <tr>
                <th>Size:</th> 
                <th>{fishData.shadow_size}</th>
              </tr>
              <tr>
                <th>Sell Price:</th> 
                <th>{fishData.price}</th>
              </tr>
              <tr>
                <th>Times:</th> 
                <th>{fishData.times &&  fishData.times.text}</th>
              </tr>
              <tr>
                <th>Months:</th> 
                <th>{fishData.months && fishData.months.northern.text}</th>
              </tr>
            </table>
          </div>
          <div className="critterSection">
            <h3>Bugs</h3>
            <Select 
              options={formatData(ACNH_INSECTS)}
              className="Selector"
              onChange={selected => setBugData(selected.value)}
            />
            <table className="critterTable">
              <tr>
                <th>Name:</th> 
                <th>{bugData.name}</th>
              </tr>
              <tr>
                <th>Location: </th>
                <th>{bugData.location} </th>
              </tr>
              <tr>
                <th>Sell Price:</th> 
                <th>{bugData.price}</th>
              </tr>
              <tr>
                <th>Times:</th> 
                <th>{bugData.times &&  bugData.times.text}</th>
              </tr>
              <tr>
                <th>Months:</th> 
                <th>{bugData.months && bugData.months.northern.text}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
