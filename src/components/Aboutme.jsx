import React from 'react'

const Aboutme = () => {
  return (
    <div className="bg-red-5000 w-[80%] mx-auto mt-2 bg-red-00">
      <h2 className="  text-2xl tracking-[4px] text-gray-200 font-bold p-4">About Me </h2>
      <div className="about-wrapper flex flex-col items-center md:flex-row  ">
        <div className="about-image  md:h-96 md:w-[80%] md:bg-[url('/src/img/33.png')] md:bg-contain  md:bg-no-repeat"></div>
        <div className="h-96 px-2">
          <p className=" text-gray-300  py-2">
            delectus dolore nemo maiores dolorem error tempora adipisci nihil
            enim a quod quaerat! Iusto, beatae. Est ea amet perspiciatis?
          </p>
          <p className=" text-gray-300 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            commodi consectetur. Quisquam, sequi! Temporibus, facere!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme