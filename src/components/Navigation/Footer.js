import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-title">Get In Touch</div>
                <div className="footer-content">
                    <p className="footer-content__about">
                        Feel free to get in touch via {' '}
                        <a
                            href="https://twitter.com/zero_savvy/"
                            className="footer-content__email link"
                        >
                            twitter/X 
                        </a>{' '}
                        or via {' '}
                        <a
                            href="https://linkedin.com/company/zero-savvy/"
                            className="footer-content__email link"
                        >
                            LinkedIn 
                        </a>
                        .
                    </p>
                    <div className="footer-developer-info">
                        <a
                            href="https://github.com/zero-savvy"
                            className="footer-developer-info__link link"
                        >
                            Zero-Savvy
                        </a>
                    </div>
                    {/* <p className="footer-content-end">
                        Project code is open source. Feel free to fork and make your own
                        version.
                    </p> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
