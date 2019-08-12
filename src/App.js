import React, { useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


const App = () => {
    const [stateRobots] = useState(robots);
    const [searchfield, setField] = useState('');
   
    const onSearchChange = (event) => {
        setField(event.target.value);
        
        console.log(filteredRobots);
    }
    const filteredRobots = stateRobots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <CardList robots={filteredRobots}/>
        </div>
    )
}

export default App;