import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import img1 from "../Images/book1 (1).png";
import img2 from "../Images/book1 (2).png";
import img3 from "../Images/book1 (3).png";
import img4 from "../Images/book1 (4).png";
import img5 from "../Images/Unsplash.png";

const imageSlide = [
  {
    img: img1,
    para: "Learn about this week's top author",
    para2:
      "Jump start your book reading by quickly check through the popular book categories...",
  },
  {
    img: img2,
    para: "Why we celebrate readers",
    para2:
      "Jump start your book reading by quickly check through the popular book categories...",
  },
  {
    img: img3,
    para: "Toddlers can also read",
    para2:
      "Jump start your book reading by quickly check through the popular book categories...",
  },
  {
    img: img4,
    para: "Get started on your game",
    para2:
      "Jump start your book reading by quickly check through the popular book categories...",
  },
];

const horizontalSlider03 = [
  [
    {
      title: "All books are 50% off now! Don't miss such a deal!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      img: img5,
    },
  ],
  [
    {
      title: "All books are 50% off now! Don't miss such a deal!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      img: img5,
    },
  ],
  [
    {
      title: "All books are 50% off now! Don't miss such a deal!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      img: img5,
    },
  ],
  [
    {
      title: "All books are 50% off now! Don't miss such a deal!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      img: img5,
    },
  ],
];

const MainBody2 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % horizontalSlider03.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <section className="py-20 w-full">
        <div className="overflow-hidden px-4 md:px-10">
          <div
            className="w-full flex rounded-3xl transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlider * 100}%)` }}
          >
            {horizontalSlider03.map((myItems, index) => (
              <section
                key={index}
                className="flex-shrink-0 flex flex-col-reverse md:flex-row items-center w-full p-6 md:p-12 gap-6"
              >
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-[#3B2C72] text-[1.8rem] md:text-[2.5rem] font-bold leading-tight">
                    {myItems[0].title}
                  </h2>
                  <p className="text-[#3B2C72] text-base md:text-lg">
                    {myItems[0].para}
                  </p>

                  <div className="flex gap-6 flex-wrap">
                    {[
                      { label: "DAYS", value: "768" },
                      { label: "HOUR", value: "01" },
                      { label: "MINT", value: "27" },
                      { label: "SEC", value: "55" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-red-500 text-[1.5rem] font-bold">
                          {item.value}
                        </span>
                        <span className="text-black font-medium tracking-wide">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={myItems[0].img}
                    alt="Books"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-start gap-3 mt-6 px-2 md:px-12">
            {horizontalSlider03.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlider(index)}
                className={`w-5 h-5 rounded-full border border-red-500 flex items-center justify-center ${
                  currentSlider === index ? "bg-red-500" : "bg-gray-300"
                }`}
              >
                {currentSlider === index && (
                  <span className="w-2 h-2 rounded-full bg-white block" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FDFC] py-20 px-6 md:px-16 border-y">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
              Subscribe To <br /> Our Newsletter
            </h2>
          </div>

          <div>
            <p className="text-gray-500 mb-6 text-lg leading-relaxed">
              Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit
              amet, consectetur. Elit adipiscing enim pharetra hac.
            </p>
            <div className="flex items-center border-b border-gray-400">
              <input
                type="email"
                placeholder="Enter Your Email Addresss Here"
                className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 py-2 pr-4"
              />
              <button className="text-[#F1592A] font-semibold flex items-center gap-1">
                SEND
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#F1592A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6m8-6a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 px-5 md:px-10">
        <div>
          <p className="text-center font-semibold text-gray-700 text-[1.5rem] md:text-[1.7rem]">
            Read our many blogs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {imageSlide.map((items, index) => (
            <div key={index} className="flex items-end relative">
              <img src={items.img} alt="" />

              <div className="text-white px-5 absolute pb-8">
                <p
                  className="font-bold text-[1.4rem]"
                  style={{ wordSpacing: "1px", letterSpacing: "2px" }}
                >
                  {items.para}
                </p>
                <p className="w-[40vw]">{items.para2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainBody2;
