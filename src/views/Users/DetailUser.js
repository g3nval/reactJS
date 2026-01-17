import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {},
        activeTab: 'overview'
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            //Kiểm tra trong danh sách listUsers (từ App.js) trước
            let userFromSalary = this.props.listUsers && this.props.listUsers.find(item => String(item.id) === String(id));

            if (userFromSalary) {
                this.setState({
                    user: userFromSalary
                });
            } else {
                try {
                    let res = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`);
                    this.setState({
                        user: res && res.data ? res.data : {}
                    });
                } catch (error) {
                    console.log("Error fetching user from API: ", error);
                }
            }
        }
    }

    render() {
        let { user, activeTab } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <div className="detail-user-container">
                {isEmptyObj === false && (
                    <div className="profile-layout">
                        {/* Sidebar: Avatar & Menu */}
                        <div className="profile-sidebar">
                            <div className="avatar-section">
                                <img src={user.avatar} alt="avatar" />
                                <h3>{user.name}</h3>
                                <p>Software Engineer</p>
                                {user.salary && (
                                    <div className="status-badge" style={{ background: '#2374e1', color: 'white' }}>
                                        Salary: {user.salary}$
                                    </div>
                                )}
                                <div className="status-badge">Currently working</div>
                            </div>

                            <div className="menu-section">
                                <div className={`menu-item ${activeTab === 'overview' ? 'active' : ''}`}
                                    onClick={() => this.setState({ activeTab: 'overview' })}>
                                    📋 General information
                                </div>
                                <div className={`menu-item ${activeTab === 'contract' ? 'active' : ''}`}
                                    onClick={() => this.setState({ activeTab: 'contract' })}>
                                    📜 Contracts & Payroll
                                </div>
                                <div className={`menu-item ${activeTab === 'training' ? 'active' : ''}`}
                                    onClick={() => this.setState({ activeTab: 'training' })}>
                                    🎓 Training & KPIs
                                </div>
                            </div>
                            <button className="btn-back" onClick={() => this.props.history.push('/salary')}>
                                Back to Salary
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="profile-content">
                            {activeTab === 'overview' && (
                                <div className="content-panel">
                                    <h3>Personal information</h3>
                                    <div className="info-grid">
                                        <div className="field">
                                            <label>Email</label> <span>{user.email}</span>
                                        </div>
                                        <div className="field">
                                            <label>Role</label> <span>{user.role || 'Member'}</span>
                                        </div>
                                        <div className="field">
                                            <label>Status</label> <span>Active</span>
                                        </div>
                                        <div className="field">
                                            <label>Address</label> <span>Ha Noi, Viet Nam</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'contract' && (
                                <div className="content-panel">
                                    <h3>Contracts & Payroll</h3>
                                    <div className="info-grid">
                                        <div className="field">
                                            <label>Current Salary</label>
                                            <span style={{ color: '#31a24c', fontWeight: 'bold', fontSize: '20px' }}>
                                                {user.salary ? `${user.salary}$` : 'Not updated'}
                                            </span>
                                        </div>
                                        <div className="field">
                                            <label>Contract Type</label> <span>Full-time</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'training' && (
                                <div className="content-panel training-section">
                                    <div className="kpi-header">
                                        <h3>Performance Review & Training (2024)</h3>
                                        <div className="kpi-score">
                                            Overall Score: <span>8.5/10</span>
                                        </div>
                                    </div>

                                    {/* Phần KPIs Progress Bar */}
                                    <div className="kpi-metrics">
                                        <div className="metric-item">
                                            <div className="metric-info">
                                                <span>Task Completion</span>
                                                <span>92%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: '92%', background: '#31a24c' }}></div>
                                            </div>
                                        </div>

                                        <div className="metric-item">
                                            <div className="metric-info">
                                                <span>Code Quality</span>
                                                <span>85%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: '85%', background: '#2374e1' }}></div>
                                            </div>
                                        </div>

                                        <div className="metric-item">
                                            <div className="metric-info">
                                                <span>Communication</span>
                                                <span>70%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: '70%', background: '#f1c40f' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phần Lộ trình đào tạo */}
                                    <div className="training-courses">
                                        <h4>Registered Courses</h4>
                                        <ul className="course-list">
                                            <li className="course-item done">
                                                <span className="icon">✅</span>
                                                <div className="details">
                                                    <p className="name">React Advanced Patterns</p>
                                                    <p className="date">Completed: Dec 2023</p>
                                                </div>
                                            </li>
                                            <li className="course-item processing">
                                                <span className="icon">⏳</span>
                                                <div className="details">
                                                    <p className="name">System Design & Architecture</p>
                                                    <p className="date">In Progress (60%)</p>
                                                </div>
                                            </li>
                                            <li className="course-item todo">
                                                <span className="icon">📚</span>
                                                <div className="details">
                                                    <p className="name">Agile Management</p>
                                                    <p className="date">Planned for Q3 2024</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {isEmptyObj === true && <div>User not found or loading...</div>}
            </div>
        )
    }
}

export default withRouter(DetailUser);