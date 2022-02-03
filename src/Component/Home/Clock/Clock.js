import React, { useState } from 'react';
import './Clock.css'
const Clock = () => {

    let Nowtime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(Nowtime)
    const UpdateTime = () => {
        let Nowtime = new Date().toLocaleTimeString()
        setTime(Nowtime)
    }
    setInterval(UpdateTime)

    let NowDate = new Date().toLocaleDateString()


    return (
        <div className="coundown ">
            <div style={{marginTop:"90px" , width: "100%", height: "250px"}}>
                <h1   >{time}</h1>
                <h1 className="">{NowDate}</h1>
            </div>
        </div>
    );
};

export default Clock;
