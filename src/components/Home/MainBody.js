import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './mainBody.scss';

function MainBody() {
    return (
        <section id="home">
            <div className="text-center">
                <h1 className="title">Zero-Savvy</h1>
                <p className="typist">It take zero-knowledge to be a savvy, savvy?</p>
            </div>
            <div className="socials">
                
                <article className="twitter social-icon">
                    <a href="https://twitter.com/zero_savvy" className="social-icon-link">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </a>
                </article>
                <article className="github social-icon">
                    <a href="https://github.com/zero-savvy" className="social-icon-link">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                </article>
                <article className="linkedin social-icon">
                    <a href="linkedin.com/company/zero-savvy" className="social-icon-link">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                </article>
            </div>
            <a href="#aboutus" role="button" className="more-btn">
                More About Us
            </a>
        </section>
    );
}

export default MainBody;
