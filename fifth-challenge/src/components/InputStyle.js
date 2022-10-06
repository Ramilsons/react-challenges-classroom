import styled from 'styled-components';

let heightComponents = 25;

const EmailInput = styled.input`
    border: none;
    border: 2px solid ${props => !props.isValid ? 'red' : '#ccc'};
    height: ${heightComponents}px;
`

const DivStyled = styled.div`
    height: ${heightComponents}px;
    display: inline-block;
    width: 40px;
    font-size: ${heightComponents}px;
    margin-left: 10px;
`

export { EmailInput, DivStyled};

