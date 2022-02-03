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
        <div className="countdown mt-5">
            <div >
                <h1  style={{marginTop:"90px"}} >{time}</h1>
                <h1 className="">{NowDate}</h1>
            </div>
        </div>
    );
};

export default Clock;
