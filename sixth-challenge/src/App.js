import InputPrice from './components/InputPrice';
import PaymentMethods from './components/PaymentMethods';
import { PriceContextProvider } from './contexts/PriceContext';

function App() {
  return (
    <PriceContextProvider>
      <div>
        <InputPrice />
        <PaymentMethods />
      </div>
    </PriceContextProvider>
  );
}

export default App;
