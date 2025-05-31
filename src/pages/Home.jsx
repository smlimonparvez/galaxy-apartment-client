import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";

const Home = () => {
  const coupons = [
    { code: "WELCOME10", discount: "10%", description: "New user discount" },
    { code: "SUMMER20", discount: "20%", description: "Summer offer" },
    { code: "EIDOFFER20", discount: "20%", description: "Eid offer" },
    { code: "WINTER20", discount: "20%", description: "Winter offer" },
  ];
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 23.764961,
      lng: 90.358624,
    },
    zoom: 11,
  };

  return (
    <div className="space-y-10">
      {/* Swiper Banner */}
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div
              className="h-[600px] flex items-center justify-center"
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/tJLGRwZq/3d-electric-car-building.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center space-y-4 ">
                <h1 className="text-3xl md:text-6xl text-gray-800 font-bold">
                  Discover Your Dream Apartment <br className="hidden md:block" /> with Our Real Estate Experts
                </h1>
                <p className="md:text-lg font-semibold text-gray-200">
                  We offer secure, clean, and comfortable apartments with all
                  the amenities you need. <br className="hidden md:block" /> Located at the heart of the city,
                  everything is easily accessible from your new home.
                </p>
                <button className="btn mt-5 text-xl">
                  Book Your Apartment
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[600px] flex items-center justify-center"
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/k5frRB6h/mumbai-skyline-skyscrapers-construction.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center space-y-4 ">
                <h1 className="text-3xl md:text-6xl text-gray-800 font-bold">
                  Discover Your Dream Apartment <br className="hidden md:block" /> with Our Real Estate Experts
                </h1>
                <p className="md:text-lg font-semibold text-gray-200">
                  We offer secure, clean, and comfortable apartments with all
                  the amenities you need. <br className="hidden md:block" />  Located at the heart of the city,
                  everything is easily accessible from your new home.
                </p>
                <button className="btn mt-5 text-xl">
                 Book Your Apartment
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[600px] flex items-center justify-center"
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/d0qP081y/new-york-city.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center space-y-4 ">
                <h1 className="text-3xl md:text-6xl text-gray-800 font-bold">
                  Discover Your Dream Apartment <br className="hidden md:block" /> with Our Real Estate Experts
                </h1>
                <p className="md:text-lg font-semibold text-gray-200">
                  We offer secure, clean, and comfortable apartments with all
                  the amenities you need. <br className="hidden md:block" /> Located at the heart of the city,
                  everything is easily accessible from your new home.
                </p>
                <button className="btn mt-5 text-xl">
                   Book Your Apartment
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* About Building */}
      <div className="flex flex-col md:flex-row item-center p-10 gap-5">
        <div>
          <img
            src="https://i.postimg.cc/tJLGRwZq/3d-electric-car-building.jpg"
            alt=""
            className="w-full rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Our Building</h2>
          <p className="text-gray-600 text-base">
            Welcome to Zenith Heights – your perfect place for peaceful and
            modern living. We offer secure, clean, and comfortable apartments
            with all the amenities you need. Located at the heart of the city,
            everything is easily accessible from your new home.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white border p-4 rounded-xl shadow-md w-full md:w-1/3">
              <h4 className="font-bold text-lg">Building Features</h4>
              <p className="text-green-600 font-semibold">Luxury Apartments</p>
              <p className="text-gray-500">
                Experience the best in modern living with our luxury apartments.
              </p>
            </div>
            <div className="bg-white border p-4 rounded-xl shadow-md w-full md:w-1/3">
              <h4 className="font-bold text-lg">Amenities</h4>
              <p className="text-green-600 font-semibold">Gym & Pool</p>
              <p className="text-gray-500">
                Enjoy our state-of-the-art gym and refreshing swimming pool.
              </p>
            </div>
            <div className="bg-white border p-4 rounded-xl shadow-md w-full md:w-1/3">
              <h4 className="font-bold text-lg">Security</h4>
              <p className="text-green-600 font-semibold">24/7 Security</p>
              <p className="text-gray-500">
                Your safety is our priority with round-the-clock security.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Coupons Section */}
      <div className="py-8">
        <h3 className="text-3xl text-center font-semibold mb-6">
          Available Coupons
        </h3>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {coupons.map((coupon, i) => (
            <div
              key={i}
              className="bg-white border p-4 rounded-xl shadow-md w-60 text-center"
            >
              <h4 className="font-bold text-lg">{coupon.code}</h4>
              <p className="text-green-600 font-semibold">
                {coupon.discount} OFF
              </p>
              <p className="text-gray-500">{coupon.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-100 p-8 text-center">
        <h3 className="text-3xl font-semibold mb-4">Our Location</h3>
        <p className="mb-4 flex items-center justify-center gap-2 text-gray-700">
          <FaMapMarkerAlt /> 123 Zenith Road, City Center, Dhaka
        </p>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};
export default Home;
