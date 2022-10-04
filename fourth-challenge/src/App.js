import Card from './components/Card';

// style
import styles from './App.module.css';

function App() {
  let Products = [
    {
      id: 'p1',
      name: 'Camisa Corinthians I Torcedor 20/21',
      urlImage: 'https://www.timaomania.com.br/wp-content/uploads/2021/11/camisa-corinthians-i-20-21-1.jpg',
      price: 179.99
    },
    {
      id: 'p2',
      name: 'Camisa Corinthians III 19/20',
      urlImage: 'https://cf.shopee.com.br/file/954f4afaeee3314085bfd4144920ccce',
      price: 149.99
    },
    {
      id: 'p3',
      name: 'Camisa Corinthians Pré-Jogo',
      urlImage: 'https://static.netshoes.com.br/produtos/camisa-corinthians-pre-jogo-nike-masculina/28/2IC-4662-028/2IC-4662-028_zoom1.jpg?ts=1647543083',
      price: 129.99
    },
  ]

  return (
    <div className="App">
      <div className={styles.banner}></div>
      <div className={styles.container}>
        { 
          Products.map(product => 
            <Card key={product.id} Name={product.name} UrlImage={product.urlImage} Price={product.price}  />
          ) 
        }
      </div>
      </div>
  );
}

export default App;
