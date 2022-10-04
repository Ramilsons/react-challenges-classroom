import { useEffect, useState } from 'react';

import WelcomeMessage from './WelcomeMessage';
import Input from './Input';

const Form = () => {
    const [name, setName] = useState('');

    useEffect(()=> {
        document.title = name;
    }, [name])

    return(
        <form>
            <WelcomeMessage name={name} />
            <Input handlerChange={setName} />
        </form>
    )
}

export default Form;