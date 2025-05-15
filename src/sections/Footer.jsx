import { socialImgs } from "../constants";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                          <Link to="/terms"  >
                          <p  className="text-center md:text-start">Terms & Conditions</p>
                         </Link>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <a key={socialImg.url} className="icon" target="_blank" href={socialImg.url}>
                            <img src={socialImg.imgPath} alt="social icon" />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end" onClick={() => window.scrollTo(0, 0)}>
                        © {new Date().getFullYear()} Abdullah R. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;