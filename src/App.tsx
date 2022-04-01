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

  const onHandleRemove = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item.id !== id))
  }

  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item))
  }
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<h1>Product page</h1>} />



        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products'>
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route index element={<Products products={products} onRemove={onHandleRemove} />} />
            <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
