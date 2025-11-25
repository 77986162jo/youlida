import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SiteTopBar from "./components/SiteTopBar";

import { SiteHeader } from "./components/SiteHeader"
import { SiteFooter } from "./components/SiteFooter"
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ActionsPage from './components/ActionsPage'
import GetInvolvedPage from './components/GetInvolvedPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <SiteTopBar />
        <SiteHeader />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/nos-actions" element={<ActionsPage />} />
            <Route path="/s-impliquer" element={<GetInvolvedPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <SiteFooter />
      </div>
    </Router>
  )
}

export default App