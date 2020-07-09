import React, { useState, useMemo } from 'react';
import './App.scss';
import Select from 'react-select';
import * as R from 'ramda';
import FishTable from "./components/FishTable"
import BugTable from "./components/BugTable"
import CreatureTable from "./components/CreatureTable"
import SuggestionTable from './components/SuggestionTable';
import IconSelect from './components/utilities/IconSelect'
import { listFish, listBugs, listSeaCreatures } from './api/acnhapi';
import Skeleton from 'react-loading-skeleton';

const App = () => {
  const [allFish, setAllFish] = useState([]);
  const [allBugs, setAllBugs] = useState([]);
  const [allCreatures, setAllCreatures] = useState([]);
  const [fishData, setFishData] = useState(null);
  const [bugData, setBugData] = useState(null);
  const [creatureData, setCreatureData] = useState(null)
  const [dateString, setDateString] = useState("The current date/time");

  const formatData = (values) => {
    return values.map(value => {
      return {value: value, label: value.name, icon: value.icon_uri}
    })
  }

  const formatForUS = (data) => {
    return data.length && data.length > 0 ?
      data.map(datum => {
        return {...datum, name: capitalize(datum.name["name-USen"])}
      })
      :
      {...data, name: capitalize(data.name["name-USen"])}
  }

  const capitalize = (str) => {
    if(str){
      str = str.split(" ");
      for (var i = 0, x = str.length; i < x; i++) {
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }
      return str.join(" ");
    }
  }

  useState(() => {
    const date = new Date()
    const hour = date.getHours();
    const mins = date.getMinutes();
    const dString = hour + ":" + (Number(mins) < 10 ? "0" + mins : mins) + ", " + date.toDateString();
    setDateString(dString)
    listFish().then(data => {
      const formatted = formatForUS(data);
      setAllFish(formatted);
      setFishData(formatted[0]);
    });
    listBugs().then(data => {
      const formatted = formatForUS(data);
      setAllBugs(formatted);
      setBugData(formatted[0]);
    });
    listSeaCreatures().then(data => {
      const formatted = formatForUS(data);
      setAllCreatures(formatted);
      setCreatureData(formatted[0]);
    });
  },[])

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="TitleBox neuMorphismOut critterContainer gradient-box">
            <div>
              <h3 style={{margin: "0px"}}>ACNH Critter Data</h3>
            </div>
          </div>
        </header>
        <div className="App-Body">
          {allBugs.length > 0 ?
            <div className="critterSection">
              <h3>Bugs</h3>
                <IconSelect 
                  options={formatData(allBugs)}
                  onChange={selected => setBugData(selected.value)}
                />
                <BugTable bugData={bugData} />
            </div>
            :
            <Skeleton count={5} />
          }
          {allFish.length > 0 ?
            <div className="critterSection">
              <h3>Fish</h3>
                <IconSelect 
                  options={formatData(allFish)}
                  onChange={selected => setFishData(selected.value)}
                />
                <FishTable fishData={fishData} />
            </div>
            :
            <Skeleton count={5} />
          }
          {allCreatures.length > 0 ?
            <div className="critterSection">
              <h3>Sea Creatures</h3>
                <IconSelect 
                  options={formatData(allCreatures)}
                  onChange={selected => setCreatureData(selected.value)}
                />
                <CreatureTable creatureData={creatureData} />
            </div>
            :
            <Skeleton count={5} />
          }
        </div>
        {/* <div className="App-Body">
          <div className="critterSection">
            <h3 style={{margin: "0px"}}>What To Look for Now:</h3>
            <h3 style={{marginTop: "0px"}}>{dateString}</h3>
            <SuggestionTable tableData={[]}/> 
          </div>
        </div>  */}
      </div>
    </>
  );
}

export default App;
