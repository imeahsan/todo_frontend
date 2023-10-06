import React, {useState} from 'react';

function SelectDay(props) {
    const [day, setDay] = useState(Date.now());
    console.log(day)


    return (
        <div className="day-select">
            <input type="date"/>


        </div>
    );
}

export default SelectDay;