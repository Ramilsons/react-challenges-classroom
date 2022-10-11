import { useContext } from 'react';
import { PriceContext } from '../contexts/PriceContext';

const InputValue = () => {
    const {price, updatePrice} = useContext(PriceContext);

    return(
        <input type="text" value={price} onChange={(e) => updatePrice(e.target.value)} />
    )
}

export default InputValue;