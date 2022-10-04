const WelcomeMessage = (props) => {
    return(
        <h4>Bem-vindo, { props.name.length > 0 ? props.name : 'Desconhecido' }</h4>
    )
}

export default WelcomeMessage;