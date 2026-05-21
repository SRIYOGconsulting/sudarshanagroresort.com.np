import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/mgorjpyp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          type: "newsletter",
        }),
      });

      await emailjs.send(
        "service_jfkkf89",
        "template_hi03tnf",
        { email },
        "fn-kr1dma-v26TXtl"
      );

      setSuccess(true);
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0f3d1f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Sudarshan Agro Resort"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-white font-semibold text-lg">
                Sudarshan Agro Resort
              </span>
            </Link>

            <p className="text-sm leading-relaxed opacity-80">
              Experience peaceful getaways with authentic Nepali hospitality.
              Creating memorable stays surrounded by nature.
            </p>

            {/* SOCIALS */}
            <div  className="flex gap-4 mt-5">
              {[{ Icon: Facebook, link: "https://www.facebook.com" }, { Icon: Instagram, link: "https://www.instagram.com" }, { Icon: Linkedin, link: "https://www.linkedin.com" }].map(({ Icon, link }, i) => (
                <a
                  key={i} 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition cursor-pointer"
                >
                    <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition cursor-pointer">
                  <Icon className="w-4 h-4 text-gray-300 hover:text-white" />
                </div>
                </a>
              ))}
            </div>
       </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Rooms", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                Lalbhitti, Belbari-2, Morang, Nepal
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+9779852020058" className="hover:text-white">
                  +977-9852020058
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:booking@sudarshanagroresort.com.np"
                  className="hover:text-white"
                >
                  booking@sudarshanagroresort.com.np
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>

            <p className="text-sm opacity-80 mb-4">
              Get exclusive offers and updates directly in your inbox.
            </p>

            {success ? (
              <p className="text-green-400 text-sm">
                Subscribed successfully 
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-[#7fbf42]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#7fbf42] py-2 rounded-md text-white font-medium hover:bg-[#6aa835] transition disabled:opacity-50"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-400">
        © 2026 Sudarshan Agro Resort. All rights reserved.
        <br />
        <span className="opacity-70">
          Technology Partner{" "}
          <a
            href="https://sriyog.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:underline"
          >
            SRIYOG
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;