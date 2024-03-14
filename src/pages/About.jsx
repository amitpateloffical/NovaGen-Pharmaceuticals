import { useEffect, useRef, } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";


function About() {
  const listRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ""
    }
    const observers = [];

    listRefs.current.forEach((listRef) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems =
              listRef.current.querySelectorAll(".list-group-item");
            listItems.forEach((item) => {
              item.classList.add("list-item-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      });

      if (listRef.current) {
        observer.observe(listRef.current);
      }
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [listRefs]);

  return (
    <>


      {/* <!-- About Start --> */}


      <div id='header'>
        <h1 id='header-h1'>About us</h1>
        <h5 className="about-h5"> Pioneering Innovations, Empowering Healthier Lives</h5>
      </div>




      <div
        className="col-12 wow fadeIn p-3"
        data-wow-delay="0.1s"
        data-aos="flip-up"
      >
        <div className="service-item d-flex flex-column justify-content-center text-center rounded ">

          {/* <h5 className="mb-3 home-heading">Manufacturing</h5> */}
          <h3 className="home-subHeading py-1">Empowering Health, Enriching Lives: Our Story</h3>
          <p>
          At NovaGen Pharma, we are dedicated to enhancing global health outcomes through innovation, integrity, and compassion. With a rich legacy of excellence, we strive to drive positive change in healthcare, providing trusted solutions that improve lives and inspire hope for a healthier future.
          </p>
        </div>
      </div>

      <div
        className="col-12 wow fadeIn p-3"
        data-wow-delay="0.1s"
        data-aos="flip-up"
      >
        <div className="service-item d-flex flex-column justify-content-center text-center rounded ">

          {/* <h5 className="mb-3 home-heading">Manufacturing</h5> */}
          <h3 className="home-subHeading py-1">Unveiling Our Purpose: Leading the Path to Healthier Futures</h3>
          <p>
          Embark on a journey with NovaGen Pharma as we unveil our mission to empower individuals and communities with life-changing healthcare solutions. With a steadfast commitment to excellence and compassion, we are dedicated to driving innovation and shaping a brighter, healthier tomorrow for all.
          </p>
        </div>
      </div>

      <div
        className="col-12 wow fadeIn p-3"
        data-wow-delay="0.1s"
        data-aos="flip-up"
      >
        <div className="service-item d-flex flex-column justify-content-center text-center rounded ">

          {/* <h5 className="mb-3 home-heading">Manufacturing</h5> */}
          <h3 className="home-subHeading py-1">Discovering Our Commitment: Nurturing Health and Wellness</h3>
          <p>
          Explore the essence of NovaGen Pharma as we navigate the realms of pharmaceutical excellence with a steadfast dedication to promoting health and wellness. Through cutting-edge research, compassionate care, and unwavering integrity, we strive to make a meaningful impact on the lives of individuals and communities worldwide
          </p>
        </div>
      </div>

    </>
  );
}

export default About;
