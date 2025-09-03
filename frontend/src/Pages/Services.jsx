import React from 'react'
import web from "../assets/web.png";
import android from "../assets/android.png";
import cloud from "../assets/cloud.png";
import cyber from "../assets/cyber.png";


import DevCard from '../components/DevCard';

function Services() {

    const tracksData = [
  {
    id: 1,
    image: android,
    title: "Development",
    highlight: "Android",
    description:
      "Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.",
    buttonText: "CodeLabs",
    buttonLink: "https://developer.android.com/codelabs",
    bgColor: "#ECFDF5", // light green
    set : false
  },
  {
    id: 2,
    image: web,
    title: "Development",
    highlight: "Web",
    description:
      "Explore modern web development with the latest technologies. From frontend frameworks to backend systems, build scalable and responsive applications for the web.",
    buttonText: "CodeLabs",
    buttonLink: "https://web.dev/",
    bgColor: "#EFF6FF", // light blue
    set : true

  },
  {
    id: 3,
    image: cloud,
    title: "Development",
    highlight: "Cloud",
    description:
      "Learn cloud computing with Google Cloud Platform. Discover how to deploy, scale, and secure applications in the cloud to power modern businesses.",
    buttonText: "CodeLabs",
    buttonLink: "https://cloud.google.com/training",
    bgColor: "#F0FDF4", // very light green
    set : false

  },
  {
    id: 4,
    image: cyber,
    title: "Development",
    highlight: "Machine Learning",
    description:
      "Dive into AI and ML with Google’s powerful tools. Gain practical skills to create intelligent models, work with datasets, and solve real-world problems.",
    buttonText: "CodeLabs",
    buttonLink: "https://developers.google.com/machine-learning",
    bgColor: "#FEF9C3", // light yellow
    set : true

  },
];
  return (
    <div className="max-w-full mx-auto mt-10 flex flex-col gap-8">
      {tracksData.map((track) => (
        <DevCard key={track.id} {...track} />
      ))}
    </div>
  )
}

export default Services
