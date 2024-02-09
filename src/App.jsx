import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout'
import AddUser from './AddUser'
import ListUser from './ListUser'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<Layout />} />
        <Route path="add" element={<AddUser />} />
        <Route path="list" element={<ListUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
