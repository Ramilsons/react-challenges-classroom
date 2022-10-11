import { useContext } from "react";
import { PriceContext } from "../contexts/PriceContext";

const PaymentMethods = () => {
    const {methodPayment} = useContext(PriceContext);

    return(
        <>
            <h1>💳 Formas de pagamento </h1>
            {methodPayment.map((eachMethod, index)=>{
                return <p key={index}>em {eachMethod.number}x de: R$ {eachMethod.valuePayment}</p>
            })}
        </>
    )
}

export default PaymentMethods;