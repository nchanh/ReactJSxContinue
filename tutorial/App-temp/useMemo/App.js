import { useMemo, useRef, useState } from 'react';
import './App.css';


function App() {
  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ products, setProducts ] = useState([]);
  
  const refName = useRef();

  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price
      }
    ])

    setName('')
    setPrice('')
    refName.current.focus()
  }
  
  const total = useMemo(() => {
    return products.reduce(
      (result, product) => result + product.price,
      0
    )
  }, [products])

  return (
    <div style={{ padding: 20 }}>
      <input
        ref={refName}
        type="text"
        placeholder="Input name..."
        value={ name }
        onChange={ e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Input price..."
        value={ price }
        onChange={ e => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>
        Add product
      </button>

      <hr/>

      Total: { total }
      { products && products.map((product, i) => (
        <li key= {i }>{ product.name }: { product.price }</li>
      )) }
    </div>
  );
}

export default App;
