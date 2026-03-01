import React from "react";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Home.scss";
import aboutImage from "../../assets/images/about-image.jpg";

const Home = () => {

    const history = useHistory();


    return (
        <main className="home-container">
            <section className="hero-section" aria-label="Hero">
                <div className="hero-overlay"></div>
                <div className="hero-content animate-pop-in">
                    <h1>Genv</h1>
                    <p className="tagline">Elevating the experience and developing human resources.</p>
                    <button className="btn-primary" onClick={() => history.push('/salary')}>
                        Start now
                    </button>
                </div>
            </section>
            <section className="info-section" aria-labelledby="about-heading">
                <div className="container grid-2-col">
                    <div className="info-image-wrapper animate-slide-in-left">
                        <img src={aboutImage} alt="About Genv Employee Experience Management" />
                    </div>
                    <article className="info-content-wrapper animate-slide-in-right">
                        <h2 id="about-heading">About Genv</h2>
                        <p className="description">
                            Genv is an Employee Experience Management platform that helps businesses
                            build effective, engaging, and sustainable work environments.
                            We believe that people are our most important asset.
                        </p>
                        <div className="mission-box">
                            <h3>Our mission</h3>
                            <p>Connecting people – data – corporate culture, it supports managers in making accurate decisions based on real-world experience.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="features-section" aria-labelledby="features-heading">
                <h2 id="features-heading">Employee experience management</h2>
                <div className="feature-grid">
                    <article className="feature-item">
                        <span className="icon" aria-hidden="true"></span>
                        <h4>Real-time analysis</h4>
                        <p>Visualize data through intelligent dashboards.</p>
                    </article>
                    <article className="feature-item">
                        <span className="icon" aria-hidden="true"></span>
                        <h4>Cost optimization</h4>
                        <p>Reduce employee turnover rates and optimize personnel costs.</p>
                    </article>
                    <article className="feature-item">
                        <span className="icon" aria-hidden="true"></span>
                        <h4>Culture of connection</h4>
                        <p>Improve employee satisfaction and engagement.</p>
                    </article>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="achievements-section" aria-label="Achievements">
                <div className="stat-item">
                    <span className="number">100+</span>
                    <span className="label">Trusted by businesses</span>
                </div>
                <div className="stat-item">
                    <span className="number">20%</span>
                    <span className="label">Reduce employee turnover rate.</span>
                </div>
                <div className="stat-item">
                    <span className="number">TOP 1</span>
                    <span className="label">HR Tech Award</span>
                </div>
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <div className="footer-content">
                    {/* Bọc phần thông tin liên hệ bằng thẻ <address> */}
                    <address className="contact-info">
                        <h4>Contact us</h4>
                        <p>🌐 www.genv.vn | 📧 contact@genv.vn</p>
                        <p>📍 Viet Nam | ☎ Hotline: 0123 456 789</p>
                    </address>
                    <div className="footer-logo">
                        <p className="slogan">Genv – Grow Employees, Navigate Value</p>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Home;