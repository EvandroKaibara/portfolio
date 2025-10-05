import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import { ENG } from "./pages/eng"
import { ES } from "./pages/es"
import { PT } from "./pages/pt"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PT />}/>
        <Route path='/eng' element={<ENG />}/>
        <Route path='/es' element={<ES />}/>
      </Routes>

      <Toaster 
        richColors 
        position="bottom-right"
        closeButton 
        duration={3000}
      />
    </BrowserRouter>

    
  )
}

export default App