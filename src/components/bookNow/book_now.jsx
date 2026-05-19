
// import Top from '../top.jsx'
import Nav_bar from '../Nav_Bar.jsx'
import Hero from '../herosection.jsx'
import Booking_Form from './form/booking_form.jsx'
import Footer from '../Footer.jsx'
import SeoHelmet from '../seoHelmet.jsx'
import Herosection from '../herosection.jsx'
const Book_now = () => {
 
  return (
    <div>
        <SeoHelmet
        title="Booking Form | Sudarshan Resort"
        description="Book your stay at Sudarshan Resort easily with our online booking form. Choose your preferred room and dates for a memorable stay."
        image="/images/rooms/room1.jpg"
        url="https://sudarshanagroresort.com.np/booking"
      />
      {/* <Top /> */}
      <Nav_bar />
      <Herosection 
  h1="Booking Form" 
 tab="Rooms" 
  p="Booking Form"
  bg="images/about/SudarshanAbout.webp"
/>
      <Booking_Form />
      <Footer/>
    </div>
  )
}

export default Book_now
