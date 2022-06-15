import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Cadaster from "../pages/Cadaster"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"

const MyRoutes = () => {

  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('KenzieHubToken')

    if (token) {
      return setAuthenticated(true)
    }
  }, [authenticated])

  return (
    <Routes>
      <Route
        path="/"
        element={<Login authenticated={authenticated}
          setAuthenticated={setAuthenticated} />}

      />
      <Route path="/cadaster" element={<Cadaster />} />
      <Route path="/dashboard" element={<Dashboard setAuthenticated={setAuthenticated} authenticated={authenticated} />} />
    </Routes>
  )
}

export default MyRoutes