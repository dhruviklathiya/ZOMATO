import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import D_login from './components/Auth/Login/D_login'
import User_dashboard from './components/User/User_dashboard'
import Admin_dashboard from './components/Admin/Admin_dashboard'
import App_download from './components/App_download/App_download'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<D_login />} />
      <Route path="/user/dashboard" exact element={<User_dashboard />} />
      <Route path="/admin/dashboard" exact element={<Admin_dashboard />} />
      <Route path="/app-download" exact element={<App_download />} />
    </Routes>
  </BrowserRouter>
)
