import { useState } from "react";
import style from "./booking_form.module.css";
import FilterDropdown from "./filter";
import { X } from "lucide-react";

const Booking_form = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ purpose: "Stay" ,stay:"1 Day",bed_type:"",room_type:"", room_quantity:"1",travel_assistance:""});
  const [isSubmitted, setIsSubmitted] = useState(false);

  
    const [showReportModal, setShowReportModal] = useState(false);
   // Report button handler
  const reporthandler = () => {
    setShowReportModal(true); 
  };

  const closeReportModal = () => {
    setShowReportModal(false); 
  };

 
   
   
   
   
   
  const purposeOptions = [
    { label: "Stay", color: "#d1dfd2ff" },
    { label: "Business", color: "#32c7b3ff" },
    { label: "Travelling", color: "#70eeffff" },
    { label: "Event / Function", color: "#ccffee" },
  ];
  
  
    const stayDuration = [
    { label: "1 Day", color: "#d1dfd2ff" },
    { label: "2 Days", color: "#32c7b3ff" },
    { label: "3 Days", color: "#70eeffff" },
    { label: "4 Days", color: "#ccffee" },
    { label: "More than 4 Days", color: "#ccffee" },
  ];
  
  const roomType=[
      { label: "King Bedroom", color: "#d1dfd2ff" },
    { label: "Twin Bedroom", color: "#32c7b3ff" },
  ]
  
  const bedType=[
    
    { label: "Twin", color: "#00ffbfff" },
    { label: "King", color: "#32c7b3ff" }
];
const roomQuantity=[
     { label: "1", color: "#00ffbfff" },
    { label: "2", color: "#32c7b3ff" },
     { label: "3", color: "#00ffbfff" },
    { label: "4", color: "#32c7b3ff" },
     { label: "5", color: "#00ffbfff" },
    { label: "6", color: "#32c7b3ff" },
     { label: "7", color: "#00ffbfff" },
    { label: "8", color: "#32c7b3ff" },
    { label: "9", color: "#32c7b3ff" }
]
const travelAssistance=[
     { label: "Yes", color: "#00ffbfff" },
    { label: "No", color: "#32c7b3ff" },
]


const handleOpenCalendar = (e) => {
  // force open date picker
  requestAnimationFrame(() => e.target.showPicker());
};



  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const requiredFields = [
      "fullname",
      "gender",
      "country",
      "state",
      "city",
      "phone",
      "number",
      "room_type",
      "room_quantity",
      "bed_type",
      "arrival_date",
    ];

    requiredFields.forEach((field) => {
       if (!form[field]) {
      newErrors[field] = true;
    }
    });

    setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
    setIsSubmitted(true); 
  }
  
  console.log( form);
  };

  return (
    <div   className={`${style.container} ${
    showReportModal ? style.noScroll : ""
  }`}>
      <div className={style.header}>
        <h2 className={style.resort_booking_from}>Resort Booking Form</h2>
        <p className={style.bookatyour_fingertips}>Booking at your fingertips.</p>
      </div>
      <form className={style.form} onSubmit={handleSubmit} >
        <label className={style.label} htmlFor="fullname">
          Full Name <span className={style.star}>*</span>
        </label>

        {errors["fullname"] && (
          <span className={style.error_content}>
            This field is required. You have to enter something before
            submitting.
          </span>
        )}
        <input
            className={style.borderinput}
          type="text"
          id="fullname"
          onChange={(e) => {
            setForm({ ...form, fullname: e.target.value });
            setErrors({ ...errors, fullname: false });
          }}
        />

        <FilterDropdown
          label="Gender"
          astric="*"
          id="gender"
          options={[
            { label: "Male", color: "#00ffbfff" },
            { label: "Female", color: "#32c7b3ff" },
            { label: "Others", color: "#70eeffff" },
            { label: "Rather not to say", color: "#70eeffff" },
          ]}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
          
        />
        
        <FilterDropdown
          label="Country"
          astric="*"
          id="country"
          options={[
            { label: "Nepal", color: "#d1dfd2ff" },
            { label: "India", color: "#32c7b3ff" },
            { label: "other", color: "#70eeffff" },
          ]}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
        />
        
        <label className={style.label} htmlFor="phone">
          State/Province <span className={style.star}>*</span>
        </label>
        {errors["state"] && (
          <span className={style.error_content}>
            This field is required. You have to enter something before
            submitting.
          </span>
        )}
        <input
          type="text"
           className={`${style.borderinput} ${style.input}` }
          id="state"
          onChange={(e) => {
            setForm({ ...form, state: e.target.value });
            setErrors({ ...errors, state: false });
          }}
        />
        

        <label className={style.label} htmlFor="city">
          City <span className={style.star}>*</span>
        </label>
        {errors["city"] && (
          <span className={style.error_content}>
            This field is required. You have to enter something before
            submitting.
          </span>
        )}
        <input
         className={style.borderinput}
          type="text"
          id="city"
          onChange={(e) => {
            setForm({ ...form, city: e.target.value });
            setErrors({ ...errors, city: false });
          }}
        />

        <label className={style.label} htmlFor="phone">
          Phone <span className={style.star}>*</span>
        </label>
        {errors["phone"] && (
          <span className={style.error_content}>
            This field is required. You have to enter something before
            submitting.
          </span>
        )}
        <input
        className={style.borderinput}
          type="text"
          id="phone"
          onChange={(e) => {
            setForm({ ...form, phone: e.target.value });
            setErrors({ ...errors, phone: false });
          }}
        />

        <label className={style.label} htmlFor="whatsapp">
          WhatsApp
        </label>
        <input className={style.borderinput} type="text" id="whatsapp" />

        <FilterDropdown
          label="Purpose"
          id="purpose"
          options={purposeOptions}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
        />
        

        <label className={style.label} htmlFor="number">
          Number of Guests <span className={style.star}>*</span>
        </label>
        {errors["number"] && (
          <span className={style.error_content}>
            This field is required. You have to enter something before
            submitting.
          </span>
        )}
        {/* input for number of guests */}
       <input
  className={`${style.number} ${style.borderinput}`}
  type="text"
  id="number"
  inputMode="numeric"
  onKeyDown={(e) => {
    if (
      e.key.length === 1 && !/[0-9]/.test(e.key) ||
      e.key === " " ||
      e.key === "-" ||
      e.key === "+" ||
      e.key === "."
    ){
      e.preventDefault();
    }
  }}
  onPaste={(e) => {
    // Block pasting letters/symbols
    const paste = e.clipboardData.getData("text");
    if (!/^[0-9]+$/.test(paste)) {
      e.preventDefault();
    }
  }}
  onChange={(e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setForm({ ...form, number: value });
      setErrors({ ...errors, number: false });
    }
  }}
/>




         <FilterDropdown
          label="Room Type"
          astric="*"
          id="room_type"
          options={roomType}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
        />
        

        <FilterDropdown
          label="Room Quantity"
        //   astric="*"
          id="room_quantity"
          options={roomQuantity}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
        />

        <FilterDropdown
          label="Travel Assistance"
          id="travel_assistance"
          options={travelAssistance}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
        />

        <label className={style.label} htmlFor="message">
          Message
        </label>
        <textarea
            id="message"
            className={style.messageBox}
            onChange={(e) => {
                setForm({ ...form, message: e.target.value });
            }}
        ></textarea>


        <FilterDropdown
          label="Bed Type"
          astric="*"
          id="bed_type"
          options={bedType}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
          
        
          
        />

        <label className={style.label} htmlFor="arrival_date">
          Arrival Date <span className={style.star}>*</span>
        </label>
        {errors["arrival_date"] && (
          <span className={style.error_content}>
            This field is required. You have to enter something before
            submitting.
          </span>
        )}
        <input
        className={`${style.date} ${style.borderinput}`}
          type="date"
          id="arrival_date"
          onFocus={(e) => e.target.showPicker()}
          onClick={handleOpenCalendar}
          onChange={(e) => {
            setForm({ ...form, arrival_date: e.target.value });
            setErrors({ ...errors, arrival_date: false });
          }}
        />

        <FilterDropdown
          label="Stay Duration"
          id="stay"
          options={stayDuration}
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
          

        />

        {/* hidden content */}
        <div className={style.error_list_all}>
          {/* Show this message ONLY after submit & if ANY error exists */}
          {Object.values(errors).some((val) => val) && (
            <span className={style.all_error}>
              Looks like you missed some of the required fields:
            </span>
          )}

          <ul className={style.ul_error}>
            {errors["fullname"] && <li className={style.li_all}>Full Name</li>}
            {errors["gender"] && <li className={style.li_all}>Gender</li>}
            {errors["country"] && <li className={style.li_all}>Country</li>}
            {errors["state"] && <li className={style.li_all}>State/Province</li>}
            {errors["city"] && <li className={style.li_all}>City</li>}
            {errors["phone"] && <li className={style.li_all}>Phone</li>}
            {errors["number"] && <li className={style.li_all}>Number of Guests</li>}
            {errors["room_type"] && <li className={style.li_all}>Room Type</li>}
            {errors["bed_type"] && <li className={style.li_all}>Bed Type</li>}
            {errors["arrival_date"] && <li className={style.li_all}>Arrival Date</li>}
          </ul>
        </div>

        <button className={style.btn_submit} type="submit" > Submit</button>
        <span className={style.donot_submit}>Do not submit passwords through this form. <br /> <button className={style.reportbtn}   type="button"
  onClick={(e) => {
    e.preventDefault();
    reporthandler();
  }}>Report malicious form</button></span>
        
        {isSubmitted && <div className={style.thankyou_container} ><div>Thank you for submitting the form! </div></div>}
        
        
        {showReportModal &&
        <div className={`${style.overlay} ${style.overlayActive}`}  >
        <div  className={`${style.modalBox} ${style.modalActive}`}  onClick={(e) => e.stopPropagation()}>
            <form className={style.popupform}>
       <div  >
        <h2 className={style.h2}>
          Report a malicious form
          <X size={20}  onClick={closeReportModal} style={{ cursor: "pointer" }} />
        </h2>
        <div className={style.line}></div>
      </div>

      <div>
        <span className={style.content}>
          Please briefly describe how this form is being misused. Our team will
          review your report as soon as possible.
        </span>
        <div className={style.selector_textarea_wrapper}>
            <div className={style.input_span}>
            <input type="radio" name="report_type" className={style.selector}/><span className={style.span}>Spam, malware, or phishing</span>
            </div>
            <div className={style.input_span}>
            <input type="radio" name="report_type" className={style.selector}/><span className={style.span}>Other (please explain)</span>
            </div>
            <textarea className={style.textarea} placeholder="Optionally, please briefly describe how this form is being misused." name="text" id="textarea"></textarea>
        </div>
        
      </div>
      
    <div className={style.btn_container}>
        <button onClick={(e) => {
            e.preventDefault();
            closeReportModal();
        }} className={style.btn_cancle}>Cancel</button>
        <button onClick={reporthandler} className={style.btn}>Submit</button>
      </div>
     
      
      
     </form>
      
    </div>
    </div>
        
        }
    
        
      </form>
      
    </div>
  );
};

export default Booking_form;
