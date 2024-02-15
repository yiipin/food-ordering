import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Welcome to 4Dragon Dumpling, your go-to destination for mouthwatering dumplings and noodle delights! 
          </p>
          <p>Indulge in our extensive menu from the comfort of your home with our convenient delivery service. From flavorful potstickers to sumptuous noodles and heartwarming soups, we bring the taste of authentic Asian cuisine right to your doorstep. </p>
          <p>Elevate your dining experience with our carefully crafted dishes, ensuring every bite is a delight. Order online now and treat yourself to a feast of flavors that will transport you to culinary bliss. It is not just a meal; it is an experience delivered to your door!</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +44 7585 666888
          </a>
        </div>
      </section>
    </>
  )
}
