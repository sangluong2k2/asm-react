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
import { TypeCategory } from './types/category'

import "bootstrap/dist/css/bootstrap.min.css";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

import "./dashboard.css";
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProductDetail from './pages/ProductDetail'
import ProductsPage from './pages/layouts/ProductsPage'
import { addcate, getall, removecate, updatecate } from './api/category'
import Categories from './pages/Categories'
import CategoryAdd from './pages/CategoryAdd'
import CategoryEdit from './pages/CategoryEdit'
import Users from './pages/Users'
import { editUser, listUser } from './api/auth'
import { User } from './types/User'
import CategoriesPage from './pages/layouts/CategoriesPage'


function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<TypeCategory[]>([])
  const [users, setUsers] = useState<User[]>([])

  //Product
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
    try {
      remove(_id);
      toastr.success("Xóa thành công")
      setProducts(products.filter(item => item._id !== _id))
    } catch (error) {
      toastr.error("Xóa không thành công")
    }
    
  }

  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data.id ? data : item))
  }

  //Categories 
  useEffect(() => {
    const getCategories = async () => {
      const {data} = await getall();
      setCategories(data); 
    }
    getCategories();
  }, [])

  const onAddCate = async (category: TypeCategory) => {
    const {data} = await addcate(category);
    setCategories([...categories, data]);
  }

  const onRemoveCate = async (_id: number) => {
    try {
      removecate(_id);
      toastr.success("Xóa thành công")
      setCategories(categories.filter(item => item._id !== _id))
    } catch (error) {
      toastr.error("Xóa không thành công")
    }
  }

  const onUpdateCate = async (editCategory: TypeCategory) => {
    const {data} = await updatecate(editCategory)
    setCategories(categories.map(item => item._id == data._id ? data : item))
  }

  //User
  useEffect(() => {
    const getUsers = async () => {
      const {data} = await listUser();
      setUsers(data)
    }
    getUsers();
  },[])

  // const onEditUser = async (user: User) => {
  //   const {data : newuser} = await editUser()
  // }
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage products={products}/>} />
        <Route path="/products" element={<ProductsPage products={products}/>} />
        <Route path="/help" element={<h1>Hỗ trợ</h1>} />
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/category/:slug' element={<CategoriesPage/> }/>


        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<Products products={products} onRemove={onHandleRemove} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>

          <Route path='categories'>
            <Route index element={<Categories categories={categories} onRemoveCate={onRemoveCate} />} />
            <Route path="add" element={<CategoryAdd onAddCate={onAddCate} />} />
            <Route path=':id/edit' element={<CategoryEdit onUpdateCate={onUpdateCate} />} />
          </Route>

          {/* <Route path='users'>
            <Route index element={<Users users={users} onRemoveCate={onRemoveCate} />} />
            <Route path="add" element={<CategoryAdd onAddCate={onAddCate} />} />
            <Route path=':id/edit' element={<CategoryEdit onUpdateCate={onUpdateCate} />} />
          </Route> */}
          
        </Route>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </div>
  )
}

export default App
