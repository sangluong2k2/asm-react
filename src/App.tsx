import axios from 'axios'
import { useEffect, useState } from 'react' 
import {Routes, Route} from 'react-router-dom'
import ProductAdd from './ProductAdd'
import Products from './Products'
import { ProductType } from './types/product'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    async function getProducts(){
      const {data} = await axios.get("http://localhost:3001/products");
      setProducts(data)
    }
    getProducts();
  }, [])

  const onHandleAdd = async (product: ProductType) => {
   const {data} = await axios.post('http://localhost:3001/products', product);
    console.log(data);
    setProducts([...products, data]);
  }

  const onHandleRemove = async (id: number) => {
    axios.delete('http://localhost:3001/products/'+id);
    setProducts(products.filter(item => item.id !== id))
  }
  return (
    
    <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd}/>}/>
          <Route path="product" element={<Products products={products} onRemove={onHandleRemove}/>}/>
          
        </Routes>
    </div>
  )
}

export default App
