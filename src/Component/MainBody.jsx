import React, { useEffect, useState } from "react";
import image01 from "../Images/img01.svg";
import image02 from "../Images/img02.png";
import img1 from "../images/img1.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img6.png";
import bookimg from "../Images/book.png";
import img01 from "../Images/myImage1.png";
import img02 from "../Images/myImage2.png";
import img03 from "../Images/myImage3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import MainBody2 from "./MainBody2";
import Header from "../Component/Header";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const horizontalSlider = [
  [
    {
      title: "Ipsum Dolor Si",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
      img: image01,
    },
  ],
  [
    {
      title: "Ipsum Dolor Si",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
      img: image01,
    },
  ],
  [
    {
      title: "Ipsum Dolor Si",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
      img: image01,
    },
  ],
];

const horizontalSlider01 = [
  [
    {
      img: img5,
      title: "Simple Way Of Piece Life",
      para: "Armor Ramsey",
      price: "$ 40.00",
    },
    {
      img: img3,
      title: "The Lady Beauty Scarlett",
      para: "Arthur Doyle",
      price: "$ 45.00",
    },
    {
      img: img1,
      title: "Great Travel At Desert",
      para: "Sanchit Howdy",
      price: "$ 38.00",
    },
    {
      img: img4,
      title: "Once Upon A Time",
      para: "Klien Marry",
      price: "$ 35.00",
    },
  ],
  [
    {
      img: img5,
      title: "Simple Way Of Piece Life",
      para: "Armor Ramsey",
      price: "$ 40.00",
    },
    {
      img: img3,
      title: "The Lady Beauty Scarlett",
      para: "Arthur Doyle",
      price: "$ 45.00",
    },
    {
      img: img1,
      title: "Great Travel At Desert",
      para: "Sanchit Howdy",
      price: "$ 38.00",
    },
    {
      img: img4,
      title: "Once Upon A Time",
      para: "Klien Marry",
      price: "$ 35.00",
    },
  ],
  [
    {
      img: img5,
      title: "Simple Way Of Piece Life",
      para: "Armor Ramsey",
      price: "$ 40.00",
    },
    {
      img: img3,
      title: "The Lady Beauty Scarlett",
      para: "Arthur Doyle",
      price: "$ 45.00",
    },
    {
      img: img1,
      title: "Great Travel At Desert",
      para: "Sanchit Howdy",
      price: "$ 38.00",
    },
    {
      img: img4,
      title: "Once Upon A Time",
      para: "Klien Marry",
      price: "$ 35.00",
    },
  ],
  [
    {
      img: img5,
      title: "Simple Way Of Piece Life",
      para: "Armor Ramsey",
      price: "$ 40.00",
    },
    {
      img: img3,
      title: "The Lady Beauty Scarlett",
      para: "Arthur Doyle",
      price: "$ 45.00",
    },
    {
      img: img1,
      title: "Great Travel At Desert",
      para: "Sanchit Howdy",
      price: "$ 38.00",
    },
    {
      img: img4,
      title: "Once Upon A Time",
      para: "Klien Marry",
      price: "$ 35.00",
    },
  ],
];

const categories = [
  {
    title: "Higher Education",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,",
    image: img01,
  },
  {
    title: "Management Books",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,",
    image: img02,
  },
  {
    title: "Engineering Books",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,",
    image: img03,
  },
];

const MainBody = () => {
  const [current, setCurrent] = useState(0);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((pre) => (pre + 1) % horizontalSlider.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % horizontalSlider01.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <section>
        <div className="p-10 w-full px-5 md:px-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 w-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {horizontalSlider.map((items, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 md:flex md:justify-between md:items-center md:gap-8"
                >
                  <div className="md:w-1/2 md:space-y-4">
                    <h1 className="text-[#393280] text-2xl font-bold md:text-[3rem]">
                      {items[0].title}
                    </h1>

                    <p className="text-[#393280] mt-2 md:text-[1.3rem]">
                      {items[0].para}
                    </p>

                    <button className="flex gap-1 items-center text-[#393280] text-sm border p-2 rounded-sm mt-5 md:py-3 md:px-8 md:gap-2">
                      <span>READ MORE</span>
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </button>
                  </div>

                  <div className="md:w-1/2 mt-5 md:mt-0">
                    <img src={items[0].img} alt="" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-start space-x-2">
              {horizontalSlider.map((_, index) => (
                <div
                  key={index}
                  className={`${
                    current === index
                      ? "border border-red-500 rounded-full px-[0.400rem]"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full bg-gray-300 ${
                      current === index ? "bg-red-400" : ""
                    }`}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12  bg-gradient-to-r from-[#fef1ef] to-[#f5f9f6]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex-1">
            <p className="text-[#FF5959] font-semibold uppercase tracking-wide mb-2">
              Categories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#393292]">
              Explore our Top Categories
            </h2>

            <div className="flex gap-4 mt-6">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <FaArrowLeft className="text-gray-500" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#FF5959] flex items-center justify-center">
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex-1 text-[#393292] text-base leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
              ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum..
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <img
                src={category.image}
                alt={category.title}
                className="rounded-md w-full h-[250px] object-cover"
              />
              <h3 className="text-xl font-bold text-[#393292] mt-5">
                {category.title}
              </h3>
              <p className="text-[#5F5F7E] mt-2 px-2">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 border-2 border-[#393292] text-[#393292] rounded-md text-base font-medium hover:bg-[#393292] hover:text-white transition duration-300">
            VIEW MORE →
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row md:gap-10 w-full pt-8 md:py-0 items-center justify-center bg-gradient-to-r from-[#fef1ef] to-[#f5f9f6]">
        <div className="md:w-1/2 w-full space-y-6 px-4 md:px-7">
          <p className="text-[#f34c2e] font-medium uppercase tracking-wide">
            ebook
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1f254f] leading-tight">
            Access, Read, Practice & Engage <br />
            with Digital Content (eBook)
          </h1>
          <p className="text-[#696baf] text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-3 bg-white rounded-l-full sm:rounded-r-none rounded-full text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#f34c2e] text-white font-semibold px-6 py-3 rounded-full sm:rounded-l-none hover:bg-[#d93f21] transition"
            >
              Login
            </button>
          </form>
        </div>

        <div className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
          <img
            src={image02}
            alt="Stack of books"
            className=" w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="py-10">
        <p className="text-center text-gray-400 uppercase">
          Some Quality Items
        </p>
        <h2 className="text-center text-3xl font-bold text-indigo-900">
          New Release Books
        </h2>

        <div className="">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 w-full"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {horizontalSlider01.map((myItems, index) => (
                <section
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-shrink-0 w-full"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-md p-9">
                      <img
                        src={myItems[0].img}
                        alt="Book 1"
                        className="w-40 h-55 object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-indigo-900 mt-4 text-center">
                      {myItems[0].title}
                    </h3>

                    <p className="text-sm text-gray-500 text-center">
                      {myItems[0].para}
                    </p>
                    <p className="text-red-500 font-bold mt-1 text-center">
                      {myItems[0].price}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-md p-9">
                      <img
                        src={myItems[1].img}
                        alt="Book 1"
                        className="w-40 h-55 object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-indigo-900 mt-4 text-center">
                      {myItems[1].title}
                    </h3>

                    <p className="text-sm text-gray-500 text-center">
                      {myItems[1].para}
                    </p>
                    <p className="text-red-500 font-bold mt-1 text-center">
                      {myItems[1].price}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-md p-9">
                      <img
                        src={myItems[2].img}
                        alt="Book 1"
                        className="w-40 h-55 object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-indigo-900 mt-4 text-center">
                      {myItems[2].title}
                    </h3>

                    <p className="text-sm text-gray-500 text-center">
                      {myItems[2].para}
                    </p>
                    <p className="text-red-500 font-bold mt-1 text-center">
                      {myItems[2].price}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-md p-9">
                      <img
                        src={myItems[3].img}
                        alt="Book 1"
                        className="w-40 h-55 object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-indigo-900 mt-4 text-center">
                      {myItems[3].title}
                    </h3>

                    <p className="text-sm text-gray-500 text-center">
                      {myItems[3].para}
                    </p>
                    <p className="text-red-500 font-bold mt-1 text-center">
                      {myItems[3].price}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="flex gap-1 justify-center pt-10">
            {horizontalSlider01.map((_, index) => (
              <div
                key={index}
                onClick={() => setSlide(index)}
                className={`w-3 h-3 rounded-full bg-gray-500 ${
                  slide === index ? "bg-red-500" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-gradient-to-r from-[#fef6f8] to-[#f5f9f9] flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={bookimg}
              alt="Birds Gonna Be Happy"
              className="rounded-xl max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c2273] mb-4">
              Featured Book
            </h2>
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
              by Timbur Hood
            </p>
            <h3 className="text-2xl font-semibold text-[#2c2273] mb-4">
              Birds Gonna Be Happy
            </h3>
            <p className="text-gray-500 mb-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </p>
            <p className="text-[#f75c03] text-xl font-bold mb-6">$ 45.00</p>
            <button className="border border-[#2c2273] text-[#2c2273] px-6 py-3 rounded-lg font-medium hover:bg-[#2c2273] hover:text-white transition">
              VIEW MORE →
            </button>
          </div>
        </div>
      </section>

      <MainBody2 />
    </>
  );
};

export default MainBody;
