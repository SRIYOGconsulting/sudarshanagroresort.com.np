// import  selectedRoom from '../rooms/roomCards.jsx'
import { Link, useParams } from "react-router-dom";
import style from "./viewMore.module.css";
import { Bath, BedDouble, Calendar, ChevronLeft, ChevronRight, CircleCheck, IndianRupee, Info, PersonStanding } from "lucide-react";
import roomsData from "../../roomdata.json";
import Nav_Bar from "../../../Nav_Bar";
import Testimonials from "./testimonials";
 import Footer from "../../../Footer.jsx";
const ViewMore = () => {

      const { id } = useParams();

  const selectedRoom = roomsData.find(
    (room) => room.id === Number(id)
  );
   if (!selectedRoom) return <h2>Room Not Found</h2>;
    
  return (
  <div className={style.viewmore_container}>
    <Nav_Bar />
  <div className={style.popup_overlay}>
    <div className={style.popup_content}>
      {/* <h2>Choose Your Booking Date</h2> */}
        <form className={style.booking_date_form}>
          <div className={style.date_input_wrapper}>
            <label htmlFor="date">Select Date:</label>
                <input className={style.input_guest} type="text" id="date" placeholder="1st Jan - 2nd Jan  " required />
                <Calendar className={style.icon} />
      
          </div>
          
            <div className={style.date_input_wrapper}>
            <label htmlFor="roomGuest">Select Room and Guest:</label>
                <input className={style.input_guest} type="text" id="roomGuest" placeholder="1 room, 2 guest " required />
                <PersonStanding  className={style.icon}  />
      
          </div>
        
        <button className={style.promoBtn}>
          <img src="/images/rooms/popup/promo.webp" alt="edit" /> 
          <div className={style.btnContent}>Add Promo Code</div>
        </button>
      </form>
      
      {/* card */}
          <div className={style.popup_room_details_container}>
            
         {selectedRoom.gallery.map((img, index) => (
             <div key={index} className={style.popup_room_details}>
              <div className={style.img_content_container}>
                <img  className={style.roomimage} src={img} alt="" />
                <div className={style.content_wrapper}>
                    <h2 className={style.title}>{selectedRoom.title}</h2>
                    
                    <div className={style.details_room}>
                        <div className={style.All_icon_wrapper}>
                        <PersonStanding  size={20}  />  <p>sleeps 2</p>
                        </div>
                        
                        <div className={style.All_icon_wrapper}>
                         <BedDouble size={20}/> <p>2 single beds</p>
                         </div>
                             <div className={style.All_icon_wrapper}>
                         <Bath size={20}/> <p>Bathroom</p>
                         </div>
                    </div>
                    
                    
                    <p className={style.paragraph}>{selectedRoom.description}</p>
                 
                    
              </div>
           </div>
             <div className={style.cancle_icon_text_container}>
                <div className={style.cancle_icon_text_subcontainer}>
                <div className={style.cancle_icon_text_wrapper}>
                <CircleCheck size={20} /><p className={style.para}>Free Cancelation</p>
                </div>
                <div className={style.cancle_icon_text_wrapper}>
                <Info size={20} /><p classNpme={style.paytoday} >Pay Today</p>
                </div>
                <p className={style.moreinfo}>More Info</p>
                </div>
                <div className={style.cost_for_night_wrapper}>
                    <div className={style.rupee_wrap}>
                     <IndianRupee size={20}/> <p className={style.price}>2500</p>
                     </div>
                     <p className={style.costprice}>Cost for 1 night, 2 guests</p>
                </div>
             
                   <Link to="https://www.booking.com/hotel/np/sudarshan-resort.html" target="_blank" className={style.bookbtn_popup}> Go to Booking </Link>
                
              
                
            </div>
      </div>
      
    
        ))}
        
      </div>
      
      
     {/* testimonials */}
     
       <Testimonials />
        
      
    </div>
    
  </div>
  <Footer />
  </div>

  )
}

export default ViewMore
