
import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[400px]"
          src={assets.main_about_image}
          alt="About MentorConnect"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to <b>MentorConnect</b>, your trusted platform for connecting
            with experienced professionals across diverse career fields. We help
            you find and book appointments with mentors and counsellors who can
            guide you toward the right career path — all from the comfort of your home.
          </p>
          <p>
            At MentorConnect, we understand that every career journey is unique.
            Whether you’re a student exploring options, a professional seeking a
            career switch, or someone looking for skill-based mentorship, our
            platform makes it easy to connect with the right experts who can offer
            valuable insights and actionable guidance.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at MentorConnect is to empower individuals to make confident
            career decisions by providing direct access to trusted mentors across
            industries. We aim to bridge the gap between ambition and opportunity —
            helping you learn, grow, and succeed with the right professional guidance.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Expert Mentors:</b>
          <p>
            Connect with verified professionals and industry experts who bring real-world experience and insights.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Easily browse and schedule appointments with mentors from various domains, all in one place.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalized Guidance:</b>
          <p>
            Get tailored mentorship and actionable advice based on your goals, interests, and career stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
