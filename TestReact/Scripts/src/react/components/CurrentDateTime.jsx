import React, {useState, useEffect} from "react";
import {formatDate} from "../utilities/formatDate";

export const CurrentDateTime = () => {
    const [current, setCurrent] = useState(Date.now());
    useEffect(() => {
        setTimeout(() => setCurrent(current + 1000), 1000);
    }, [current]);
    return (
        <div>
            <span>Current is {formatDate(new Date(current))}</span>
        </div>
    );
};
