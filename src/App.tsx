import { Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home_index from "./Pages/Home_index"
import Popup from "./Components/popup/Popup"
function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home_index/>}/>
      </Route>
    </Routes>
    <Popup/>
   </>
  )
}

export default App
