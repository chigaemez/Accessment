import { Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home_index from "./Pages/Home_index"
function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home_index/>}/>
      </Route>
    </Routes>
  )
}

export default App
