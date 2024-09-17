import './aboutUs.scss';

function AboutUs() {
    return (
        <section id="aboutus">
            <div className="about-container">
                <div className="row">
                    <div className="about-img">
                        <div className="image-container">
                            <img
                                src={require('../../assets/images/zero-savvy.jpg')}
                                alt="About"
                            />
                        </div>
                    </div>
                    <div className="about-content">
                        <h1 className="about-content__title">About Us</h1>
                        <p className="about-content__description">
                        Zero-Savvy, established in 2023, is a team of applied cryptography researchers on a mission to eliminate trust barriers in daily digital routines. Join our community, contribute, and collaborate to shape a future where everyone enjoys a hassle-free, secure, and private cyber experience! 🌐🔒🛡️
                        </p>
                        <p className="contact">
                            <a href="https://twitter.com/zero_savvy" className="contact-btn">
                                Contact Us
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
