import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function GxpTrainig() {
  const listRefs = useRef([]);
const navigate=useNavigate()
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
  }, []);

  const scrollToMiddle = () => {
    window.scrollTo({
        top: 200, // Scroll to 500 pixels from the top of the page
        behavior: "smooth" // Smooth scrolling behavior
    });
};
  return (
    <>
      <BreadCrumb page="Feature" />

  <div className="researchbgimg">
    <div className="row ">
      <div className="col-md-6 py-3">
       
      </div>
      <div className="col-md-6 p-4">
      <h3 className="text-center">Innovative Research & Development: Shaping Tomorrow's Medicines </h3>
        <p className="text-center pt-3">At the forefront of medical innovation, our Research and Development division pioneers groundbreaking pharmaceutical advancements. With a multidisciplinary approach and state-of-the-art facilities, we continuously explore novel treatments and therapies, driving forward the frontiers of healthcare to improve patient outcomes and enhance quality of life.</p>
        <div className='business-btn' >
                                <button onClick={()=>navigate("/")} className=' btn btn-info'>Home</button>
                                <button onClick={scrollToMiddle} className=' btn btn-info'>View More..</button>
                            </div>
      </div>
    </div>
  </div>

      <div className="container-fluid py-5">
        <div className="container" style={{background:"#AFEEEE",paddingLeft:"20px", paddingTop:"30px", paddingBottom:"30px", borderLeft:"4px solid green"}}>
          <div className="row align-items-center g-5">
            <div className="col-lg-9  wow fadeIn" data-wow-delay="0.5s" style={{fontSize: "19px", fontWeight: "500"}}>
            At Novagen Pharmaceuticals, we believe that exceptional healthcare begins with innovative research and development. Our multidisciplinary team of scientists, engineers, and healthcare professionals is dedicated to discovering and developing breakthrough medicines that improve patient outcomes. By harnessing the latest advancements in technology and collaborating with leading experts, we are driving the future of medicine. Our commitment to scientific excellence and patient-centric innovation sets us apart, ensuring that we deliver transformative solutions that address unmet medical needs. Join us in our mission to shape the future of healthcare.
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-75 w-75 " data-aos="fade-right" >
                <img className="img-fluid  rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKB9Z-9k3Xs5sOOJaQ1_m2LEAN9k1WUzCiA&usqp=CAU" />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* ----------2nd Part---------- */}
          {/* ----------8th Part END---------- */}

      
    </>
  );
}
