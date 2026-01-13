
import { Link } from 'react-router-dom'
import style from './services_blog_cards.module.css'

const Offer_blog_cards = () => {
  
    const services=[
        {img:"images/services/barbecue.webp", service_name: "Barbecue",  service_description:  "Experience the essence of summer with our BBQ shot!"},
        {img:"images/services/wifi.webp", service_name: "Free wifi",  service_description:  "Enjoy complimentary WiFi access, staying connected seamlessly throughout your stay."},
        {img:"images/services/kings-bed.webp", service_name: "King Beds",  service_description:  "Experience ultimate comfort with luxurious king beds in every room."},
        {img:"images/services/laundry.webp", service_name: "Laundry",  service_description:  "Enjoy convenient laundry services for a hassle-free stay at your own ease."},
        {img:"images/services/drink.webp", service_name: "Drink",  service_description:  "Quench your thirst with our variety of beverage options available onsite."},
        {img:"images/services/farm-to-table.webp", service_name: "Farm-to-Table Dining",  service_description:  "We provide fresh, organic produce grown on-site or sourced locally. Guests often enjoy meals made from ingredients harvested directly from the resort's farm."},
        {img:"images/services/riverside.webp", service_name: "Riverside",  service_description:  "Enjoy peaceful mornings by the water and unforgettable views from our balcony."},
        {img:"images/services/fishing1.webp", service_name: "Fishing",  service_description:  "Experience the joy of fishing in our resort, where relaxation meets adventure."},
        {img:"images/services/parking.webp", service_name: "Parking",  service_description:  "Convenient on-site parking available for all guests."},
          {img:"images/services/snacks.webp", service_name: "Snacks",  service_description:  "Enjoy a variety of delicious snacks available throughout the resort."},
           {img:"images/services/spa.webp", service_name: "Spa",  service_description:  "Relax and rejuvenate with our luxurious spa services."},
           {img:"images/services/airportshuttle.webp", service_name: "Airport shuttle",  service_description:  "Convenient airport shuttle service to and from the resort."},
           {img:"images/services/family.webp", service_name: "Family rooms",  service_description:  "we offer spacious family rooms designed for comfort and convenience."},
           {img:"images/services/desktop.webp", service_name: "Media and Technology",  service_description:  "Flat-screen TVs, high-speed internet access, and charging stations.,radio,telephone"},
           {img:"images/services/breakfast.webp", service_name: "Breakfast in the room",  service_description:  "breakfast served in the room at your convenience."},
            {img:"images/services/puzzle.webp", service_name: "Board games/puzzles",  service_description:  "Enjoy a variety of board games and puzzles for all ages."},
    ]
    
  return (
    <div className={style.container_card}>
       <h1>What we offer</h1>
      <div className={style.line}></div>
      <div className={style.services}>
        {services.map((service)=>(
              <div className={style.service_card}>
                <img  src={service.img} alt="img" />
                
                <Link className={style.service_h1}> <h1 className={style.service_h1}>{service.service_name}</h1></Link>
                <p>{service.service_description}</p>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Offer_blog_cards
