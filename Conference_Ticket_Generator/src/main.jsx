import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Conference_Ticket_Generator">
    <Routes>
      <Route path="*" elememt ={<App />}></Route>
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
