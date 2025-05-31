import { useState } from 'react'
import MUITypography from './components/MUI/MUITypography.jsx'
import MUIButton from './components/MUI/MUIButton.jsx'
import Navbar from './components/Navbar.jsx'
import Table from './components/Records.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar></Navbar>
        <Table></Table>
    </>
  )
}

export default App
