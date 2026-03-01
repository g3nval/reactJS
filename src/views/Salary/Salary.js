import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
import { addNewPerson, deletePerson } from '../../store/slices/SalarySlice';
import "./Salary.scss";

const Salary = () => {
    const dispatch = useDispatch();

    //Lấy dữ liệu danh sách lương từ SalarySlice
    const { listSalaries } = useSelector(state => state.salary);

    //Lấy thông tin đăng nhập từ AuthSlice
    const { currentUser, isLoggedIn } = useSelector(state => state.auth);

    const isAdmin = isLoggedIn && currentUser?.role === 'Admin';

    return (
        <main className="salary-container">
            <header className="salary-header">
                <h1 className="salary-title">Salary Management</h1>

                {isLoggedIn && currentUser && (
                    <div className="user-role-badge">
                        Logged in as: <span className={isAdmin ? "role-admin" : "role-staff"}>
                            {currentUser.username} ({currentUser.role})
                        </span>
                    </div>
                )}
            </header>

            <section className="salary-body">
                {isAdmin ? (
                    <AddComponent
                        addNewSalaryUser={(person) => dispatch(addNewPerson(person))}
                    />
                ) : (
                    <p className="permission-info">
                        * Bạn không có quyền thêm mới bản ghi lương.
                    </p>
                )}
                <ChildComponent
                    arraypeople={listSalaries}
                    deletePerson={(person) => dispatch(deletePerson(person))}
                    isAdmin={isAdmin}
                />
            </section>
        </main>
    );
};

export default Salary;