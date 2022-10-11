import { createContext, useState, useEffect } from 'react';

export const PriceContext = createContext();

export const PriceContextProvider = ({ children }) => {
    const [price, setPrice] = useState(0);
    const [methodPayment, setMethodPayment] = useState([{ number: 2, valuePayment: 0 }, { number: 4, valuePayment: 0 }]);

    useEffect(()=>{
        let methodPaymentOrganizeArray = [];
        for(let eachMethod of methodPayment){
            methodPaymentOrganizeArray.push({number: eachMethod.number, valuePayment:  price/eachMethod.number})
        }
        
        setMethodPayment(() => methodPaymentOrganizeArray);
    }, [price])

    const updatePrice = (newPriceValue) =>{
        setPrice(newPriceValue);
    }

    return(
        <PriceContext.Provider value={{price, updatePrice, methodPayment}}>
            {children}
        </PriceContext.Provider>
    )
}