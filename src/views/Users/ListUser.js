import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAllUsers } from '../../store/slices/userSlice';
import person from "../../assets/images/someone.jpg";
import './ListUser.scss';

const ListUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { listUsers, isLoading } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="loader" role="status" aria-label="Loading users">
                <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>
            </div>
        );
    }

    return (
        <main className='list-user-container'>
            <header>
                <h1 className='title'>User Management</h1>
            </header>

            <section className='list-user-content' aria-label="Users list">
                {listUsers && listUsers.length > 0 ? (
                    listUsers.map((item, index) => (
                        <article className='user-card' key={item.id} onClick={() => history.push(`/user/${item.id}`)}>
                            <div className="user-index">{index + 1}</div>

                            <figure className="user-avatar">
                                <img src={item.avatar} alt={`${item.name}'s avatar`} onError={(e) => { e.target.src = person }} />
                            </figure>

                            <div className="user-info">
                                <h2 className="name">{item.name}</h2>
                                <p className="email">{item.email}</p>
                            </div>

                            <div className="view-btn">
                                <span>View detail</span>
                            </div>
                        </article>
                    ))
                ) : (
                    <p className="no-data">Không tìm thấy dữ liệu người dùng.</p>
                )}
            </section>
        </main>
    );
};

export default ListUser;