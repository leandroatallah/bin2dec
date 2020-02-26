import React from 'react'
import './App.css'

export default function App() {
    function convertDec() {
        const inputBin = document.getElementById('input-binary')
        const inputDec = document.getElementById('input-decimal')
        const invalidInput = document.getElementById('invalid-input')
        
        const binaryValue = inputBin.value
        
        const binArr = binaryValue.split('')

        if(!binArr.length) {
            invalidInput.style.display = "block"
            return
        }
        
        for(let i = 0; i < binArr.length; i++) {
            if(!(binArr[i] === '0' || binArr[i] === '1')) {
                invalidInput.style.display = "block"
                return
            }
        }


        inputDec.value = parseInt(binaryValue, 2)

        invalidInput.style.display = "none"

    }

    return (
        <div id="form-container">
            <h1>Convert Binary 2 Decimal</h1>
            <hr/>
            <label>Binary</label>
            <input type="text" name="binary" id="input-binary" onKeyPress={() => convertDec()} />
            <p id="invalid-input" style={{'display': 'none'}}>Input only 0 or 1</p>
            <button onClick={() => convertDec()}>Convert</button>
            <hr/>
            <label>Decimal</label>
            <input type="text" name="decimal" id="input-decimal" disabled />
        </div>
    )
}