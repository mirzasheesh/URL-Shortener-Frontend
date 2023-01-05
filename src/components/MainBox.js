import Styles from '../styles.module.css';

import axios from 'axios';
import { useState } from "react";

function Pop(props) {
    return (
        <div className={Styles.popup}>
            <p>Hey your short URL is ready!</p>
            <input readOnly value={props.short} />
        </div>
    );
}

function Load() {
    return (
        <div className={Styles.loadSection}>
            <div className={Styles.loadBar}></div>
            <p>Loading...</p>
        </div>
    );
}

export default function Box() {

    const [thisLong, setLong] = useState('');
    const [thisShort, setShort] = useState('');
    const [isClicked, setClick] = useState(false);

    function fetchLong() {

        axios.post(`${process.env.REACT_APP_BACKEND}/short`, {
            URL: thisLong,
        })
            .then((response) => {
                let short = response.data.shortURL;

                if (short) {
                    setClick(false);
                    setShort(short);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });

    };

    return (
        <>
            <div className={Styles.midBox}>
                <p>Paste The URL Here & Launch The Rocket</p>
                <div className={Styles.container}>
                    <input type="text" value={thisLong} onChange={(thisInput) => setLong(thisInput.target.value)} />
                    <button onClick={() => {
                        fetchLong();
                        setClick(true);
                    }}>🚀</button>
                </div>
            </div>
            {isClicked ? <Load /> : null}
            {!isClicked && thisShort ? <Pop short={thisShort} /> : null}
        </>
    );
}