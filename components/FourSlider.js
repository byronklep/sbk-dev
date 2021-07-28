import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SimpleSlider({ fourProjects }) {
  console.log(fourProjects)
  var settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  return (
    <div className="text-blue-700 my-12 text-center container">
      <Slider {...settings}>
        {fourProjects.projects.map((project) => (
          <div
            key={project.slug}
            className=" flex  justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
            <div className="w-full">
              <div className="flex justify-center items-center w-full">
                <img
                  className="w-full"
                  src={project.image.url}
                  alt="spider-web"
                />
              </div>
              <div className="md:mt-6 mt-4">
                <p className="text-xs font-medium leading-3 text-white">
                  {project.category}
                </p>
              </div>
              <div className="md:mt-4 mt-2">
                <Link href={project.slug}>
                  <a>
                    <p className=" text-base md:text-2xl font-semibold text-white">
                      {project.title}
                    </p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/work/${project.slug}`}>
                <a className="cursor-pointer focus:outline-none focus:text-green-400 text-xs leading-3 hover:underline focus:underline text-gray-300">
                  <p>Go to project</p>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
