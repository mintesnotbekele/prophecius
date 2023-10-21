import Data from "@data/sections/about.json";
import LinesIcon from "@layouts/svg-icons/Lines";

const AboutSection = () => {
    return (
        <>
            {/* about */}
            <section id="about">
                <div className="container mil-p-120-30">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-xl-5">

                            <div className="mil-mb-90">
                                <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                                
                                <div className="mil-about-quote">
                                    <div className="mil-avatar mil-up">
                                        <img src={Data.avatar.image} alt={Data.avatar.alt} />
                                    </div>
                                    <h6 className="mil-quote mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5">

                            <div className="mil-about-photo mil-mb-90">
                                <div className="mil-lines-place">
                                    <LinesIcon />
                                </div>
                                <div className="mil-up mil-img-frame" style={{"paddingBottom": "160%"}}>
                                {/* <video  src={Data.video.url} style={{paddingTop: '400px'}} height="800" autoPlay muted loop/> */}
                                    <img src={Data.video.url} alt={Data.image.url} className="mil-scale" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default AboutSection;