import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className=" dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              className="sm: scale-105 sm:-translate-x-11  max-h-[300px] drop-shadow-[]"
              src={CarPng}
              alt=""
            />
          </div>
          <div className="space-y-5 sm:p-16 pb-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-serif"
            >
              About us
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur omnis ullam sit reprehenderit. Provident.
            </p>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              voluptate!
            </p>
            <button data-aos="fade-up" className="button-outline">
              Get Stared
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
