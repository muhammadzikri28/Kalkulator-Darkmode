import React, { useState } from "react";


const Kalkulator = () => {
    const [result, setResult] = useState("");
    const handleClick = (e) => setResult(result.concat(e.target.name));
    const clear = () => setResult("");
    const backpace = () => setResult(result.slice(0, -1))
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (eror) {
            setResult("Error")
        }

    }
    return (
        <div className="container">
            <form>
                <input type={'text'} value={result} />
            </form>
            <div className="keypad">
                <button className="clear highlight" onClick={clear}>Clear</button>
                <button className="backpace highlight" onClick={backpace}>c</button>
                <button onClick={handleClick} name="/" className="highlight">&divide;</button>
                <button onClick={handleClick} name="7">7</button>
                <button onClick={handleClick} name="8">8</button>
                <button onClick={handleClick} name="9">9</button>
                <button onClick={handleClick} name="*" className="highlight">&times;</button>
                <button onClick={handleClick} name="4">4</button>
                <button onClick={handleClick} name="5">5</button>
                <button onClick={handleClick} name="6">6</button>
                <button onClick={handleClick} name="-" className="highlight">&ndash;</button>
                <button onClick={handleClick} name="1">1</button>
                <button onClick={handleClick} name="2">2</button>
                <button onClick={handleClick} name="3">3</button>
                <button onClick={handleClick} name="+" className="highlight">+</button>
                <button onClick={handleClick} name="0">0</button>
                <button onClick={handleClick} name=".">.</button>
                <button className="result highlight" onClick={calculate}>=</button>
            </div>
        </div>
    );
};


export default Kalkulator;
