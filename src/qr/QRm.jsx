

// import Top from '../top.jsx'
import Nav_Bar from '../Nav_Bar.jsx'
import Hero from '../herosection.jsx'
import Footer from '../Footer.jsx'
import Whatsapp from '../whatsapp_logo.jsx'
import SeoHelmet from '../seoHelmet.jsx'
import Qr from './qrcodes/QR.jsx'


const QRm = () => {
  
  return (
    <div>
       <SeoHelmet
        title="QR | Sudarshan Resort"
        description="Get in touch with Sudarshan Resort for reservations, inquiries, or any assistance. We are here to make your stay memorable."
        image="/images/contact/whatsapplogo.webp"
        url="https://sudarshanresort.com/contact"
      />
      
        {/* <Top /> */}
        <Nav_Bar />
        <Hero h1="QR" tab="Home" p="QR" bg="images/background/1.webp"/>
        <Qr />
        <Footer />
        <Whatsapp />
    </div>
  )
}

export default QRm
