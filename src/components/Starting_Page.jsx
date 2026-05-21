import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SeoHelmet from "../seoHelmet.jsx";

const Starting_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleClose = () => navigate("/");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <SeoHelmet
        title="Welcome to Sudarshan Agro Resort"
        description="Loading Sudarshan Agro Resort – discover natural stays, premium rooms, and authentic agro tourism experiences in Nepal."
        image="/images/home/SudarshanHome.jpg"
        url="https://sudarshanagroresort.com.np/splash"
      />
      <div className="relative inline-block">
        <button
          onClick={handleClose}
          className="cursor-pointer absolute -top-3 -right-3 w-7 h-7 rounded-full bg-red-600 text-white text-sm z-10"
        >
          X
        </button>
        <img
          src="loadingicon.webp"
          alt="loading"
          className="h-[500px] w-auto max-w-[90vw] rounded-md sm:h-[500px]"
        />
        <div className="mt-4 text-center">
          <Link
            to="/"
            className="text-white underline hover:text-[#c19b76]"
          >
            Enter Sudarshan Agro Resort
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Starting_Page;
