const ConditionalLogic = (props) => {
    return(
        <h2>
            { props.value === 'Dia' ? props.value + ' 🌞' :  props.value + ' 🌚'}
        </h2>
    )
}

export default ConditionalLogic;