import React from "react";
import "./Home.scss";
import aboutImage from "../../assets/images/about-image.jpg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-overlay"></div>
                    <div className="hero-content animate-pop-in">
                        <p className="tagline">Elevating the experience and developing human resources.</p>
                        <button className="btn-primary" onClick={() => this.props.history.push('/salary')}>
                            Start now
                        </button>
                    </div>
                </section>

                <section className="info-section">
                    <div className="container grid-2-col">
                        <div className="info-image-wrapper animate-slide-in-left">
                            <img src={aboutImage} alt="About Genv Team" />
                        </div>
                        <div className="info-content-wrapper animate-slide-in-right">
                            <h2>About Genv</h2>
                            <p className="description">
                                Genv is an Employee Experience Management platform that helps businesses
                                build effective, engaging, and sustainable work environments.
                                We believe that people are our most important asset.
                            </p>
                            <div className="mission-box">
                                <h3>Our mission</h3>
                                <p>Connecting people – data – corporate culture, it supports managers in making accurate decisions based on real-world experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-section">
                    <h2>Employee experience management</h2>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <span className="icon"></span>
                            <h4>Real-time analysisReal-time analysis</h4>
                            <p>Visualize data through intelligent dashboards.</p>
                        </div>
                        <div className="feature-item">
                            <span className="icon"></span>
                            <h4>Cost optimization</h4>
                            <p>Reduce employee turnover rates and optimize personnel costs.</p>
                        </div>
                        <div className="feature-item">
                            <span className="icon"></span>
                            <h4>Culture of connection</h4>
                            <p>Improve employee satisfaction and engagement.</p>
                        </div>
                    </div>
                </section>

                <section className="achievements-section">
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

                <footer className="home-footer">
                    <div className="footer-content">
                        <div className="contact-info">
                            <h4>Contact us</h4>
                            <p>🌐 www.genv.vn | 📧 contact@genv.vn</p>
                            <p>📍 Viet Nam | ☎ Hotline: 0123 456 789</p>
                        </div>
                        <div className="footer-logo">
                            <p className="slogan">Genv – Grow Employees, Navigate Value</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

export default connect(mapStateToProps)(withRouter(Home));