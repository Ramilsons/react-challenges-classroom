import StylingComponent from "./StylingComponent/StylingComponent";
import SendDataByProps from "./SendDataByProps/Parent";
import ConditionalLogic from "./ConditionalRendering/ConditionalLogic";

function App() {
  return (
    <div className="App">
        <h1>Formas de estilizar componentes</h1>
        <StylingComponent />
        

        <h1>Enviando dados entre componentes via <i>Props</i></h1>
        <SendDataByProps />
        <hr />

        <h1>Renderização <i>Condicional</i></h1>
        <ConditionalLogic value={'Dia'} />
        <ConditionalLogic value={'Noite'} />
        <hr />
    </div>
  );
}

export default App;
