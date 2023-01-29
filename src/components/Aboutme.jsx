import React from 'react'

const Aboutme = () => {
  return (
    <div className="bg-red-5000 w-[80%] mx-auto">
      <h2 className="text-4xl text-gray-200 font-bold p-4">About me </h2>
      <div className="about-wrapper flex flex-col items-center md:flex-row  ">
        <div className="about-image md:mix-blend-difference md:h-96 md:w-[80%] md:bg-[url('/src/img/33.png')] md:bg-contain  md:bg-no-repeat md:bg-justice"></div>
        <div className="h-96 w-[80%]">
          <p className="text-xl text-gray-200  py-2">
            delectus dolore nemo maiores dolorem error tempora adipisci nihil
            enim a quod quaerat! Iusto, beatae. Est ea amet perspiciatis?
          </p>
          <p className="text-xl text-gray-200 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            commodi consectetur. Quisquam, sequi! Temporibus, facere!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme