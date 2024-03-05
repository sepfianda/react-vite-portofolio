import React from "react";

const Home = () => {
  return (
    <section id="home" class="bg-[#2D9596]">
        <div class="container">
          <div class="grid grid-cols-2 border p-10">
            <div class="w-full self-center px-4 lg:w-1/2">
              <h1 class="block font-bold text-cyan-800 text-4xl mt-10">
                I'm Sepfianda
                <span class="block font-bold text-cyan-800 text-4xl mt-1">
                  Eka Widhira!
                </span>
              </h1>
              <p class="font-medium text-neutral-500 mt-5 mb-10">
                as a Junior Web Developer
              </p>
              <button class="text-base font-semibold text-neutral-100 bg-sky-600 py-3 px-8 square-full hover:shadow-lg hover:opacity-80">
                READ MORE
              </button>
            </div>
            <div class="w-full self-end px-2 flex-cols-1 md:flex-row mt-10">
              <img src="foto-nonformal.avif" alt="foto" className="m-auto rounded-full h-[100px] w-[100px] md:h-[280px] md:w-[280px] object-cover"/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home;
