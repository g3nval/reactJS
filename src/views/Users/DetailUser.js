import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../store/slices/userSlice";

const DetailUser = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const [user, setUser] = useState({});
    const [activeTab, setActiveTab] = useState('overview');

    //Lấy dữ liệu từ SalarySlice
    const listSalaries = useSelector(state => state.salary.listSalaries);

    //Lấy dữ liệu từ UserSlice
    const { listUsers, isLoading } = useSelector(state => state.users);

    //Fetch user nếu danh sách trống
    useEffect(() => {
        if (listUsers.length === 0) {
            dispatch(fetchAllUsers());
        }
    }, [dispatch, listUsers.length]);

    useEffect(() => {
        //Lấy thông tin cơ bản từ API (chứa email, avatar, role...)
        const apiUser = listUsers.find(item => String(item.id) === String(id));

        //Lấy thông tin bổ sung từ bảng Lương (chứa salary, department...)
        const salaryUser = listSalaries.find(item => String(item.id) === String(id));

        //Gộp cả 2 lại. Cái gì của salaryUser sẽ đè lên apiUser
        if (apiUser || salaryUser) {
            setUser({
                ...apiUser,
                ...salaryUser
            });
        } else {
            setUser({});
        }
    }, [id, listSalaries, listUsers]);

    const isEmptyObj = Object.keys(user).length === 0;

    if (isLoading && isEmptyObj) {
        return (
            <div className="loader">
                <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>
            </div>
        );
    }

    return (
        <main className="detail-user-container">
            <div className="profile-layout">
                <aside className="profile-sidebar">
                    <section className="avatar-section">
                        <img src={user.avatar || 'https://via.placeholder.com/150'} alt={`${user.name || 'User'}'s avatar`} />
                        <h3>{user.name || user.username || 'No Name'}</h3>
                        <p>{user.role || 'Software Engineer'}</p>

                        {user.salary && (
                            <div className="status-badge" style={{ background: '#2374e1', color: 'white' }}>
                                Lương: {user.salary}$
                            </div>
                        )}
                        <div className="status-badge">Đang hoạt động</div>
                    </section>

                    <nav className="menu-section">
                        <button className={`menu-item ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                            📋 Thông tin chung
                        </button>
                        <button className={`menu-item ${activeTab === 'contract' ? 'active' : ''}`} onClick={() => setActiveTab('contract')}>
                            📜 Hợp đồng & Lương
                        </button>
                        <button className={`menu-item ${activeTab === 'training' ? 'active' : ''}`} onClick={() => setActiveTab('training')}>
                            🎓 Đào tạo & KPIs
                        </button>
                    </nav>
                    <button className="btn-back" onClick={() => history.push('/salary')}>Trở lại bảng lương</button>
                </aside>

                <section className="profile-content">
                    {activeTab === 'overview' && (
                        <div className="content-panel">
                            <h3>Thông tin cá nhân</h3>
                            <div className="info-grid">
                                <div className="field"><label>Email</label> <span>{user.email || 'Chưa cập nhật'}</span></div>
                                <div className="field"><label>Chức vụ</label> <span>{user.role || 'Thành viên'}</span></div>
                                <div className="field"><label>Trạng thái</label> <span>Đang hoạt động</span></div>
                                <div className="field"><label>Địa chỉ</label> <span>Hà Nội, Việt Nam</span></div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'contract' && (
                        <div className="content-panel">
                            <h3>Hợp đồng & Lương bổng</h3>
                            <div className="info-grid">
                                <div className="field">
                                    <label>Mức lương hiện tại</label>
                                    <span style={{ color: '#31a24c', fontWeight: 'bold', fontSize: '20px' }}>
                                        {user.salary ? `${user.salary}$` : 'Chưa cập nhật'}
                                    </span>
                                </div>
                                <div className="field"><label>Loại hợp đồng</label> <span>Toàn thời gian</span></div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'training' && (
                        <div className="content-panel training-section">
                            <header className="kpi-header">
                                <h3>Đánh giá hiệu suất (2024)</h3>
                                <div className="kpi-score">Tổng điểm: <span>8.5/10</span></div>
                            </header>

                            <div className="kpi-metrics">
                                <div className="metric-item">
                                    <div className="metric-info"><span>Hoàn thành công việc</span><span>92%</span></div>
                                    <div className="progress-bar"><div className="progress-fill" style={{ width: '92%' }}></div></div>
                                </div>
                                <div className="metric-item">
                                    <div className="metric-info"><span>Chất lượng Code</span><span>85%</span></div>
                                    <div className="progress-bar"><div className="progress-fill" style={{ width: '85%', background: '#2374e1' }}></div></div>
                                </div>
                            </div>

                            <section className="training-courses">
                                <h4>Khóa học đã đăng ký</h4>
                                <ul className="course-list">
                                    <li className="course-item done">
                                        <div className="details">
                                            <p className="name">React Advanced Patterns</p>
                                            <p className="date">Hoàn thành: Dec 2025</p>
                                        </div>
                                    </li>
                                    <li className="course-item processing" style={{ borderLeft: '4px solid #f1c40f' }}>
                                        <div className="details">
                                            <p className="name">System Design & Architecture</p>
                                            <p className="date">Đang học (60%)</p>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};

export default DetailUser;