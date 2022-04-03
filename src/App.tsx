import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { add, list, remove, update } from './api/product'

import Dashboard from './pages/Dashboard'
import AdminLayout from './pages/layouts/AdminLayout'
import HomePage from './pages/layouts/HomePage'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import Products from './pages/Products'

import { ProductType } from './types/product'

import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProductDetail from './pages/ProductDetail'
import ProductsPage from './pages/layouts/ProductsPage'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);

    setProducts([...products, data]);
  }

  const onHandleRemove = (_id: number) => {
    remove(_id);
    setProducts(products.filter(item => item._id !== _id))
  }

  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data.id ? data : item))
  }
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage products={products}/>} />
        <Route path="/products" element={<ProductsPage products={products}/>} />
        <Route path="/help" element={<h1>Hỗ trợ</h1>} />

        <Route path='/products/:id' element={<ProductDetail/>}/>



        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<Products products={products} onRemove={onHandleRemove} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </div>
  )
}

export default App
