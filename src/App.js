import "./App.css";
import React from "react";
import Card from "./components/Card";
import {getStays} from "./data";
import { useEffect } from "react";

export default function App() {
    function setUserName() { console.log("You clicked the button!"); }
    let stays = getStays();
    return (
        <div className="app">
            <header className="app-header">
                <h1>Dive into Dreams</h1>
            </header>
            <h2>To walk alone in London is the greatest rest</h2>
            <button>Change User</button>
            <p id="welcomeMessage"></p>
            <h3>Activites</h3>
            <ul>Though the weather is said to be terrible you can: 
                <li>-Go meet the Queen!(Just a joke)</li>
                <li>-Go on the London eye</li>
                <li>-Go to the pub</li>
                <li>-Drink some tea and eat crumpets (no one does that though)</li></ul>
            <button onclick={setUserName()}>Click me</button>
            <div className="container">
                <h3>Stays</h3>
                {stays.map((stay) => {
                    return <Card
                        key={stay.id}
                        id={stay.id}
                        name={stay.name}
                        description={stay.description}
                        img={stay.img}
                    />
                 })}
             </div>
         </div>
    );
                }
<div className="footer"></div>