import React from 'react'
 import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
 import Link from "next/link";


const Contact = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
     
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>

        <p className="mb-4 max-w-md text-[#ADB7BE]">
          {""}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="social flex flex-row gap-2">
          <Link href="https://github.com" target="_blank">
            <FaGithub className="text-white text-2xl" />
          </Link>

          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="text-white text-2xl" />
          </Link>

          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="text-white text-2xl" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="max-w-md mx-auto">
          <form
            action="https://formspree.io/f/xyzgrqlg"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
              className="p-3 bg-black border border-pink-950 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block py-1 w-full text-center"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className="bg-black border border-pink-950 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block py-1 w-full text-center"
            />

            <textarea
              name="message"
              placeholder="Your message"
              autoComplete="off"
              required
              className="bg-black border border-pink-950 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block py-1 w-full text-center"
            ></textarea>

            <input
              type="submit"
              value="Send"
              className="w-full p-3 bg-pink-950 text-white font-semibold rounded-lg hover:bg-pink-500 transition-all duration-300"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
