import { Link, useNavigate } from 'react-router-dom';
import './BusinessAreas.css';
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BusinessAreas() {
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
            <div className="BusinessArea">
                {/* <section className="innerBanner">
                    <picture>
                        <img
                            className="responsive-image"
                            src=""
                            alt="Business Areas"
                           width="100%"
                           height="500px"
                        />
                    </picture>

                    <div className="container">
                        <div className="innerpageTitle d-flex justify-end">
                            <div className="row h-100">
                                <div className="  aos-init aos-animate" >
                                    <h1 data-aos="fade-right">Business Areas</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <div className='businessbgimg'>
                    <div className='row '>
                        <div className='col-md-6'></div>
                        <div className='col-md-6 pt-5 '>
                            <h2 className='text-center px-2'>Exploring Our Pharma Expertise</h2>
                            <h5 className='text-center py-5 px-3'>Delve into our multifaceted pharmaceutical endeavors, encompassing research, development, and distribution. Committed to pioneering innovations, we strive to enhance global healthcare and improve patient outcomes.</h5>
                            <div className='business-btn' >
                                <button onClick={()=>navigate("/")} className=' btn btn-info'>Home</button>
                                <button onClick={scrollToMiddle} className=' btn btn-info'>View More..</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='businesspage'>
                    <div className="row">
                        {/* <div className="col-md-3">
                            <div className="container mt-5">
                                <div className="card p-4 bg-light">
                                    <div className='d-flex flex-column align-items-start'>
                                        <Link to="/businessareas" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Overview</button></Link>
                                        <Link to="/indiabranded" data-aos="fade-right"> <button className='btn btn-warning mb-1'>India-Branding Generics</button></Link>
                                        <Link to="/emergingmarkets" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Emerging Markets - Branded Generics</button></Link>
                                        <Link to="/usgenerics" data-aos="fade-right"> <button className='btn btn-warning mb-1'>USA - Generics</button></Link>
                                        <Link to="/africainstitution" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Africa - Institution Business</button> </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="container">
                            <h3 className='p-4'>Driving Healthcare Excellence: Our Comprehensive Business Offerings</h3>
                            <div className="heading-business m-4" data-aos="fade-left">
                                We provide comprehensive range of specialty branded generic products targeting broad spectrum of chronic and acute therapies. We clearly understand our customers’ needs and use cutting-edge technology to present innovative solutions.
                            </div>
                        </div>
                        <div className="paratwo p-5 mb-4">
                            <div className="overview-part2 p-1" data-aos="fade-left">
                                We carefully identify gaps in our markets and commit ourselves to get the products to market places ahead of the competition giving huge competitive advantage of 1st to market. Our products have the hallmark of technology-based differentiation and cover the full range of dosage forms, including tablets, capsules, injectables, inhalers, ointments, creams and liquids.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}

export default BusinessAreas;
