
import { Routes, Route } from 'react-router-dom'

import Starting_Page from './components/Starting_Page.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Room from './components/rooms/room.jsx'
import Services from './components/services/services.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Contact from './components/contact/contact.jsx'
import ScrollToTop from "./components/scrolltop.jsx";
import Book_Now from './components/bookNow/book_now.jsx'
import Location from './components/location/location.jsx'
import ViewMore from './components/rooms/rooms/viewMore/viewMore.jsx'


const App = () => {
  return (
  <>
   <ScrollToTop />
    <Routes>
      <Route path="/" element={<Starting_Page/>} />
      <Route path='/home' element={ <Home/>} />
      <Route path="/about" element={<About />} />
      <Route path='/rooms' element={<Room />} />
      <Route path='/services' element={<Services />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/location' element={<Location />} />
      <Route path='/book' element={<Book_Now />} />
      <Route path="/rooms/viewmore/:id" element={<ViewMore />} />
        
    </Routes>
    </>
  )
}

export default App
