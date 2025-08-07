import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './context/AuthContext.jsx'
import UserContex from './context/UserContex.jsx'
import ListingContext from './context/ListingContex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <UserContex>
        <ListingContext>
          <App />
        </ListingContext>
      </UserContex>
    </AuthContext>
  </BrowserRouter>
)
