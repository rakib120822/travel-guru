import { FaArrowRight } from "react-icons/fa";
import HeroSlider from "../component/HeroSlider";
import { useHero } from "../context/HeroProvider";
import { Link } from "react-router";

function Home() {
  const { heroData } = useHero();

  return (
    <div className="grid grid-cols-12 ">
      <section className="left flex flex-col gap-2 col-span-4  justify-center">
        <h1 className="font-[Bebas_Neue] text-6xl text-white font-bold">
          {heroData.name}
        </h1>
        <p className="text-primary-content">{heroData.description}</p>
        <div>
          <Link to={`/booking/${heroData.id}`} className="btn btn-primary text-black  ">
            Booking <FaArrowRight />
          </Link>
        </div>
      </section>
      <section className="col-span-1"></section>
      <section className="right flex justify-between items-center col-span-7 p-3">
        <HeroSlider />
      </section>
    </div>
  );
}

export default Home;
