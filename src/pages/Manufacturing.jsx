import React from 'react'
import "./Home.css";
const Manufacturing = () => {
    return (
        <div className=''>
            <section className="innerBanner">
                <picture>
                    <img
                    width="100%"
                        className="responsive-image"
                        src="https://www.collidu.com/media/catalog/product/img/b/a/ba0e15043a9eeab9a74324d5911b16820c78bc175259dad460a849f90f34bfff/pharmaceutical-manufacturing-slide2.png"
                        alt="Business Areas"
                    />

                </picture>

                {/* <div className="container">
                    <div className="innerpageTitle">
                        <div className="row h-100">
                            <div className="col-md-6 align-self-center aos-init aos-animate" >
                                <h1 data-aos="fade-right">Manufacturing</h1>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
            {/* <div className='Manufacturing-head'>   
         <h1 className='manufacturing-heading'>Manufacturing</h1>
     </div> */}

            <div className="container-fluid p-5   mt-4">
                <div >
                    <div className=" g-5 align-items-center slider-img">
                        <div className=" " >
                            <div className="">
                                <img width="1200px" style={{ borderRadius: "15px 50px", boxShadow: "-5px -5px 9px rgba(184, 184, 184, 0.45) 5px 5px 9px rgba(78, 88, 104, 0.3)" }} className="img-fluid" src="https://media.istockphoto.com/id/1309776504/photo/female-research-scientist-with-bioengineer-working-on-a-personal-computer-with-screen-showing.jpg?s=612x612&w=0&k=20&c=FBI79EWdoWHailbTGvQWBBYOiOfx7owZLWuNnQxuDqo=" />
                            </div>
                        </div>
                        <div

                        >
                            
                            <h1 className="Manu-about">At Novagen Pharma we are passionate about every product we deliver to our customers</h1>
                            <p className="Manu-para">"Our commitment to manufacturing excellence ensures that patients and healthcare
                                professionals can trust in the safety and efficacy of every product bearing the Novagen Pharma name.
                                We are proud to be at the forefront of the pharmaceutical manufacturing industry,
                                delivering high-quality medicines that make a difference in people's lives."</p>


                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" p-5">
                <div style={{ background: "#AFEEEE", paddingLeft: "20px", paddingTop: "30px", paddingBottom: "30px", borderLeft: "4px solid green" }}>
                    <div className="  wow fadeIn p-2" data-wow-delay="0.5s" style={{ fontSize: "19px", fontWeight: "500" }}>
                        Our team thrives in an environment conducive to excellence and innovation, which is critical to advancing complex and challenging first-time combination products. The R&D team actively engages in projects from concept to Phase IV studies, as well as monitoring market acceptance and post-launch status for comprehensive insights.
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Manufacturing