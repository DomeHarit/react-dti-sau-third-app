import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'
import PageD from './pages/PageD'
import PageE from './pages/PageE'
import PageF from './pages/PageF'
import PageG from './pages/PageG'


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/pagea' element={<PageA/>}/>
        <Route path='/pageb' element={<PageB/>}/>
        <Route path='/pagec' element={<PageC/>}/>
        <Route path='/paged' element={<PageD/>}/>
        <Route path='/pagee' element={<PageE/>}/>
        <Route path='/pagef' element={<PageF/>}/>
        <Route path='/pageg' element={<PageG/>}/>
      
      </Routes>
      </BrowserRouter>
    </>
  )
}
