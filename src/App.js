import React, { useState, useMemo } from 'react';
import './App.css';
import Select from 'react-select';
import * as R from 'ramda';
import FishTable from "./components/FishTable"
import BugTable from "./components/BugTable"
import SuggestionTable from './components/SuggestionTable';
import {ACNH_FISH, ACNH_FISH_OLD} from './ACNH_Data/Fish';
import ACNH_INSECTS from './ACNH_Data/Insects';

const App = () => {
  const [fishData, setFishData] = useState("Test App");
  const [bugData, setBugData] = useState("Test App");
  const [dateString, setDateString] = useState("The current date/time");

  const formatData = (values) => {
    return values.map(value => {
      return {value: value, label: value.name}
    })
  }

  useState(() => {
    const date = new Date()
    const hour = date.getHours();
    const mins = date.getMinutes();
    const dString = hour + ":" + (Number(mins) < 10 ? "0" + mins : mins) + ", " + date.toDateString();
    setDateString(dString)
  },[])

  const FISH_FIXED = useMemo(() => R.map((fish) => {
    const oldFish = R.find(R.propEq('id', fish.id.toString()))(ACNH_FISH_OLD);
    if(oldFish){
      fish.price = Number(oldFish.price.replace(/,/g, ''));
    }
    return fish;
  }, ACNH_FISH), [ACNH_FISH, ACNH_FISH_OLD]);

  const WHATTODO = useMemo(() => {
    const date = new Date();
    const Hour = date.getHours();
    const Month = date.getMonth();
    const currentFish = R.filter((fish) => {
      return fish.times.array.includes(Hour) && fish.months.northern.array.includes(Month)
    }, FISH_FIXED)
    
    const currentBugs = R.filter((bug) => {
      return bug.times.array.includes(Hour) && bug.months.northern.array.includes(Month)
    }, ACNH_INSECTS)

    return R.sortWith([R.descend(R.prop('price'))])(currentFish.concat(currentBugs));
    
  }, [FISH_FIXED, ACNH_INSECTS])

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
            <FishTable fishData={fishData} />
          </div>
          <div className="critterSection">
            <h3>Bugs</h3>
            <Select 
              options={formatData(ACNH_INSECTS)}
              className="Selector"
              onChange={selected => setBugData(selected.value)}
            />
            <BugTable bugData={bugData}/>
          </div>
        </div>
        <div className="App-Body">
          <div className="critterSection">
            <h3>What To Look for at {dateString}</h3>
            <SuggestionTable tableData={WHATTODO}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
