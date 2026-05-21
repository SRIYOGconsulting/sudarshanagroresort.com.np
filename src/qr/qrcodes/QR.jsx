import qrImage1 from "/images/qr/qr-review.png";
import qrImage2 from "/images/qr/qr-location.png";
import qrImage3 from "/images/qr/qr-website.png";
import qrImage4 from "/images/qr/qr-roomservice.png";
import qrImage5 from "/images/qr/qr-booking.png";
import qrImage6 from "/images/qr/qr-booking.png";
import qrImage7 from "/images/qr/qr-review.png";
import qrImage8 from "/images/qr/qr-location.png";
import qrImage9 from "/images/qr/qr-website.png";
import qrImage10 from "/images/qr/qr-roomservice.png";
import qrImage11 from "/images/qr/qr-booking.png";
import qrImage12 from "/images/qr/qr-booking.png";

const Qr = () => {
  // Array with the QR code images, titles, and descriptions
  const qrCodes = [
    {
      title: "Google Review",
      description: "Scan this QR code to leave us a review on Google.",
      image: qrImage1,
    },
    {
      title: "Google Location",
      description: "Scan this code to view our location on Google Maps.",
      image: qrImage2,
    },
    {
      title: "Website",
      description: "Scan this code to view our website.",
      image: qrImage3,
    },
    {
      title: "Room Service",
      description: "Scan this QR code to view our room service.",
      image: qrImage4,
    },
    {
      title: "Booking",
      description: "Scan this QR code to view our page on booking.com.",
      image: qrImage5,
    },
    {
      title: "Airbnb",
      description: "Scan this QR code to view our page on airbnb.",
      image: qrImage6,
    },
    {
      title: "Wifi",
      description: "Scan this QR code for wifi.",
      image: qrImage7,
    },
    {
      title: "Restaurant",
      description: "Scan this code to view our restaurant.",
      image: qrImage8,
    },
    {
      title: "Complain",
      description: "Scan this code to leave complain.",
      image: qrImage9,
    },
    {
      title: "Payment Bank",
      description: "Scan this QR code for payment bank detail.",
      image: qrImage10,
    },
    {
      title: "Digital Wallet",
      description: "Scan this QR code for digital wallet detail.",
      image: qrImage11,
    },
    {
      title: "Emergency Helpline",
      description: "Scan this QR code for emergency services.",
      image: qrImage12,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 font-[sans-serif]">
      <section className="bg-white p-8 text-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {qrCodes.map((qr, index) => (
            <div key={index} className="w-full max-w-xs p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0A2241] mb-4">
                {qr.title}
              </h3>
              
              {/* QR Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={qr.image}
                  alt={`QR Code for ${qr.title}`}
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>

              {/* Paragraph */}
              <p className="text-[#707882] text-sm md:text-base mb-6">
                {qr.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Qr;