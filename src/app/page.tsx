import Herosection from "./component/Herosection";
import Navbar from "./component/Navbar";
import Aboutsection from "./component/Aboutsection";
import Projectsection from "./component/Projectsection";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="bg-black flex min-h-screen">
        <div className="container mx-auto px-12 py-4">
          <Navbar />
          <Herosection />
          <Aboutsection />
          <Projectsection />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
