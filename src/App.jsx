import s from "./App.module.css"
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { DetailsPage } from './pages/DetailsPage/DetailsPage.jsx'
import { ROUTES } from "./routes/routes.js"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/NotFound/NotFound.jsx"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={ROUTES.index} />
          <Route element={<DetailsPage />} path={ROUTES.pokemon + "/:id"} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
