import { useState } from 'react';
import { EmailInput, DivStyled } from './InputStyle';

const Input = () => {
    const [isValid, setIsValid] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const isValidVerify = (event) => {
        if(event.target.value.indexOf(' ') >= 0){
            setIsValid(false);
        }else{
            setIsValid(true);
        }
        setInputValue(event.target.value);
    }

    return(
        <>
            <EmailInput isValid={isValid} id="email" type="email" name="email" value={inputValue} onChange={(e) => isValidVerify(e)} />
            <DivStyled>{ !isValid ? '🟥' : '✅' }</DivStyled>
        </>
    )
}

export default Input;