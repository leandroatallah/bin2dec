import React from 'react'

export default function App() {
    function convertDec() {
        const inputBin = document.getElementById('input-binary')
        const inputDec = document.getElementById('input-decimal')
        const invalidInput = document.getElementById('invalid-input')
        
        const binaryValue = inputBin.value
        
        const binArr = binaryValue.split('')
        
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
        <>
            <p id="invalid-input" style={{'display': 'none'}}>Digite apenas 0 ou 1</p>
            <input type="text" name="binary" maxLength="8" id="input-binary" />
            <input type="text" name="decimal" id="input-decimal" disabled />
            <button onClick={() => convertDec()}>Convert</button>
        </>
    )
}