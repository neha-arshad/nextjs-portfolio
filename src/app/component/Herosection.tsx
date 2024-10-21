"use client";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';


const Herosection:any = () => {
	return (
    <section className="lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-10">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-green-300 mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-950 to-pink-200">
              HELLO! I'M{" "}
            </span>

            <br></br>

            <TypeAnimation
              sequence={["NEHA", 1000, "Full-Stack", 1000,
								"Developer", 1000,
							]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h1 className="mt-12 text-xl font-bold text-center text-pink-900">
            Welcome to my portfolio!
          </h1>

          <p className="text-white mt-4 text-base sm:text-lg italic  mb-6 lg:text-xl">
            Hello! I’m Neha, a passionate Full Stack Developer I am on the path
            to becoming a full stack developer, and I'm excited about the
            journey ahead. Currently, I am exploring the latest advancements in
            web technologies and the Web 3.0 metaverse. My goal is to integrate
            cutting-edge innovations into practical applications, harnessing the
            power of decentralized systems and immersive digital environments.
            As I advance in my career, I aim to contribute effectively to the
            technology field.. I love transforming ideas into reality and am
            always eager to learn new technologies. Explore my projects below to
            see what I can do!
          </p>

          <div>
            <Link href={"#contact"}>
              <button className="text-white font-semibold text-xl px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-red-950 via-pink-400 to-green-500  rounded-full mr-4 hover:from-pink-400 hover:via-pink-900 hover:to-pink-500 transition-colors:bg-white duration-300 ease-in-out">
                Hire Me
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-4 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-pink-800 w-[250px] h-[250px] lg:w[400px] lg:h[400px] justify-center overflow-hidden relative">
            <img
              src="/images/profrile-removebg-preview.png"
              alt="d.p"
              className="w-[93%] h-[95%] object-cover rounded-full m-0 mt-2 mb-2 ml-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;

