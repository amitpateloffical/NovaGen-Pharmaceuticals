import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import MySlider from "../components/MySlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Home() {

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="slider-container ">
        <MySlider />
      </div>
<div className=" p-5 row gap-4">
      <div class="card home-card " >
  <img src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=sph" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Business Area</h5>
    <p class="card-text">Exploring diverse business avenues, our pharmaceutical enterprise encompasses research, development, and distribution. From innovative drug formulations to comprehensive healthcare services, we strive to meet global medical needs. Committed to excellence, we deliver quality products and solutions, driving positive change and fostering healthier communities worldwide.</p>
    <a  href="/businessareas" class="btn btn-secondary">Read more..</a>
  </div>
</div>

<div class="card home-card " >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56GYJxJWFT0b2bOobm3KaYCgaHEJDfvxVjg&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Research And Development</h5>
    <p class="card-text">Pushing boundaries in pharmaceutical innovation, our Research and Development division is dedicated to pioneering breakthrough treatments. With cutting-edge technology and a relentless pursuit of excellence, we explore novel compounds and therapeutic solutions. Committed to advancing medical science, we strive to bring transformative therapies from concept to reality for improved patient care</p>
    <a href="/features" class="btn btn-secondary">Read more..</a>
  </div>
</div>

<div class="card home-card " >
  <img src="https://media.istockphoto.com/id/598676126/photo/pharmaceutics-pharmaceutical-worker-operates-tablet-blister-packaging-machine.jpg?s=612x612&w=0&k=20&c=On-FBhA7IV79Cu8GTW9gFpdjpF0XnHMDu5s0V732dLU=" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Manufacturing</h5>
    <p class="card-text">Operating at the forefront of pharmaceutical manufacturing, we uphold the highest standards of quality and safety. Our state-of-the-art facilities and stringent processes ensure the production of reliable and effective medications. Committed to innovation and excellence, we strive to meet global demand while prioritizing patient well-being and regulatory compliance</p>
    <a href="/manufacturing" class="btn btn-secondary ">Read more..</a>
  </div>
</div>

<div class="card home-card " >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ODZv89IgC_Alz1vlE3xae3MMqCOBmlif0A&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">About Us</h5>
    <p class="card-text">At the heart of our pharmaceutical journey lies a commitment to excellence and compassion. With a rich legacy of innovation, [Pharmaceutical Company Name] is dedicated to advancing global healthcare. We prioritize integrity, quality, and patient well-being, striving to make a meaningful impact on lives and shaping a healthier tomorrow for all.</p>
    <a href="/about" class="btn btn-secondary">Read more..</a>
  </div>
</div>
</div>

      {/* <div className="container-fluid p-5  mb-5 mt-4">
        <div >
          <div className=" g-5 align-items-center slider-img">
            <div className="  wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="">
                <img width={"600px"} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0eu3NxaNxKhHeLZLyoEbMX3338dbxBX5nA&usqp=CAU" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div>
              <h1 className="heading-about">Revolutionary Pharmaceutical Solutions</h1>
              <p className="home-para">"Welcome to the forefront of pharmaceutical innovation.
               We harness groundbreaking science, cutting-edge technology, and unparalleled expertise
                to create transformative treatments that change lives. With a commitment to excellence
                 in research, development, and manufacturing, we're setting new standards in healthcare.
                  Explore our diverse portfolio and discover how we're revolutionizing patient care and 
                  shaping the future of medicine."</p>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="container-fluid p-5   mb-5 mt-4">
        <div className="">
          <div className="slider-img g-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                Manufacturing
              </div>
              <h1 className="heading-about">Building Trust, One Medication at a Time: A Look Inside Our Manufacturing Process</h1>
              <p className="home-para">"Transparency and trust are at the core of our commitment to delivering quality healthcare. We invite you to explore our world-class manufacturing facilities and discover the dedication and expertise that goes into every medication we produce. We believe in the power of science to make a difference, and our commitment to responsible manufacturing practices ensures the safe and reliable delivery of hope and healing."</p>

            </div>
            <div className="wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <img width={"600px"} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZerows86Muh3PUztm-gdVeYlgx4ywJZB7jQ&usqp=CAU" />
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="container-fluid p-5  mb-5 mt-4">
        <div >
          <div className=" g-5 align-items-center slider-img">
            <div className="  wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="">
                <img className="img-fluid"  src="https://media.istockphoto.com/id/997784670/photo/pharma-logistician-using-iot-based-on-blockchain.jpg?s=612x612&w=0&k=20&c=mDTYaUEB4laXzb6AQGeHs12liZu-denwznwIgTlIDh8=" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Research & Development
              </div>
              <h1 className="heading-about"> Groundbreaking Research & Development at Novagen Pharmaceuticals</h1>
              <p className="home-para">" At Novagen Pharmaceuticals, we are committed to pioneering research and development that drives the future of healthcare. With a relentless focus on innovation and a dedication to advancing therapeutic solutions, our world-class team of scientists, researchers, and healthcare professionals are revolutionizing the pharmaceutical landscape. From drug discovery and preclinical research to clinical trials and regulatory approval, we are dedicated to pushing the boundaries of what's possible. Join us on the journey to create groundbreaking treatments that improve and save lives."</p>

            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="container-fluid p-5   mb-5 mt-4">
        <div className="">
          <div className="slider-img g-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                About Us
              </div>
              <h1 className="heading-about">Clear Strategy, Consistent Performance</h1>
              <p className="home-para"> "Welcome to Novagen Pharmaceuticals, where our mission is to revolutionize healthcare through innovative,
                life-changing medicines. As a global leader in pharmaceuticals,
                we specialize in developing cutting-edge treatments for a wide range of medical conditions.
                Our commitment to excellence drives us to consistently deliver safe, effective,
                and affordable solutions that improve patient outcomes and enhance quality of life.
                Backed by a team of dedicated scientists, researchers, and healthcare professionals,
                we strive to make a meaningful impact on the world by pushing the boundaries
                of medical science and improving access to healthcare for all."</p>

            </div>
            <div className="wow fadeIn abouts" data-wow-delay="0.1s" data-aos="fade-right">

              <img className="img-fluid" height={"344px"} width={"612px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVdBgChoX8FO4cd2EFWKcB8FCPKMVjYSr4g&usqp=CAU" />

            </div>
          </div>
        </div>
      </div> */}



      {/* <div className="container-fluid bg-light mt-5 py-5 ">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow fadeIn"
              data-wow-delay="0.1s"
              data-aos="fade-right"
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Services
              </div>
              <h1 className="mb-4">
                Our Excellent AI Solutions for Your Business
              </h1>
              <p className="mb-4">
                Tailored AI Services to Elevate Your Business Unlock the full
                potential of Artificial Intelligence with our tailored solutions
                at [Your Business Name]. We offer dynamic and innovative
                services, seamlessly integrating AI into your operations. From
                intelligent automation to data-driven insights, our expertise
                ensures your business stays at the forefront of technological
                advancement.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.1s"
                      data-aos="flip-up"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faRobot} />
                        </div>
                        <h5 className="mb-3">Robotic Automation</h5>
                        <p>
                          Revolutionize Efficiency with Robotic Automation at
                          Life Link Digital. Streamlined processes for enhanced
                          productivity and a future-focused approach to work.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-12 wow fadeIn"
                      data-aos="flip-up"
                      data-wow-delay="0.5s"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faPowerOff} />
                        </div>
                        <h5 className="mb-3">Machine learning</h5>
                        <p>
                          Empower success with our Machine Learning solutions.
                          From predictive analytics to intelligent insights, we
                          unleash innovation for your business growth.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-aos="flip-up"
                      data-wow-delay="0.3s"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h5 className="mb-3">Education & Science</h5>
                        <p>
                          Empowering education and advancing scientific
                          discovery, our innovative services pave the way for
                          transformative learning experiences and groundbreaking
                          research. Elevate your journey in education and
                          science with us.{" "}
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-12 wow fadeIn"
                      data-aos="flip-up"
                      data-wow-delay="0.7s"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faBrain} />
                        </div>
                        <h5 className="mb-3">Predictive Analysis</h5>
                        <p>
                          Strategic Insights through Predictive Analysis.
                          Harness the future with our solutions, providing
                          actionable intelligence for informed decision-making.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Service End --> */}

      {/* <!-- Feature Start --> */}

      {/* <div className="container-fluid bg-themeColor feature pt-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              data-aos="fade-right"
              className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Why Choose Us
              </div>
              <h1 className="text-white mb-4">
                We&lsquo;re Best in AI Industry with 10 Years of Experience
              </h1>
              <p className="text-light mb-4">
                AI Excellence with a Decade of Expertise. Our commitment,
                innovative solutions, and proven track record set us apart.
              </p>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>
                  Cutting-edge AI Solutions for Business Transformation
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>
                  Decade-long Expertise in Crafting Innovative Technologies
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>Client-Centric Approach with Proven Success Stories</span>
              </div>
              <div className="row g-4 pt-3">
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="fa-3x text-white"
                    />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        93
                      </h2>
                      <p className="text-white mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="fa-3x text-white"
                    />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        107
                      </h2>
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="/feature.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Feature End --> */}
      {/* <!-- Case Start --> */}

      {/* <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Services
            </div>
            <h1 className="mb-4" data-aos="fade-right">
              Our Top Services
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.3s"
              data-aos="zoom-in"
              onClick={() => navigate("/elogbook")}
            >
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/eLogBook.jpg" alt="" />
                <a className="case-overlay text-decoration-none" href="">
                  <small>eLogBook</small>
                  <h5 className="lh-base text-white mb-3">
                    "Digital logbook service for efficient record-keeping."
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.5s"
              data-aos="zoom-in"
              onClick={() => navigate("/edms")}
            >
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/edms.jpg" alt="" />
                <a
                  className="case-overlay text-decoration-none"
                  href=""
                  onClick={(e) => e.preventDefault()}
                >
                  <small>EDMS</small>
                  <h5 className="lh-base text-white mb-3">
                    "Electronic Document Management System for organizing
                    digital files."
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.7s"
              data-aos="zoom-in"
              onClick={() => navigate("/eqms")}
            >
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/eqms.jpg" alt="" />
                <a className="case-overlay text-decoration-none" href="">
                  <small>EQMS</small>
                  <h5 className="lh-base text-white mb-3">
                    "Enterprise Quality Management System for process
                    optimization and compliance."
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
