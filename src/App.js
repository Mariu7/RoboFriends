import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'


const App = () => {
    //StateHook
    const [robots, setRobots] = useState([]);
    const [searchfield, setField] = useState('');
   
    //Replaces componentDidMount()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>{setRobots(users)});         
    }, []);



    //Function
    const onSearchChange = (event) => {
        setField(event.target.value);
        
        console.log(filteredRobots);
    }
    //Render
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    )
}

export default App;