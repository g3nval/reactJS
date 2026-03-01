import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChildComponent = ({ arraypeople, deletePerson, isAdmin }) => {
    const [showPeople, setShowPeople] = useState(false);
    const history = useHistory();

    const handleViewDetail = (user) => {
        history.push(`/user/${user.id}`);
    };

    const handleDelete = (e, person) => {
        e.stopPropagation();
        deletePerson(person);
    };

    return (
        <section className='salary-list-container' aria-label="Salary List">
            {!showPeople ? (
                <div className="toggle-action">
                    <button className='btn-show-hide' onClick={() => setShowPeople(true)}>
                        Show List
                    </button>
                </div>
            ) : (
                <>
                    <div className='people-table' role="list">
                        {arraypeople.map((item) => {
                            if (item.salary >= 1000) {
                                return (
                                    <article
                                        className='table-row'
                                        key={item.id}
                                        onClick={() => handleViewDetail(item)}
                                        role="listitem"
                                    >
                                        <h3 className="col-name">{item.name}</h3>
                                        <p className="col-salary">{item.salary}$</p>

                                        {isAdmin && (
                                            <button
                                                className='btn-delete'
                                                onClick={(e) => handleDelete(e, item)}
                                                aria-label={`Delete ${item.name}`}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </article>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="toggle-action">
                        <button className='btn-show-hide' onClick={() => setShowPeople(false)}>
                            Hide List
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default ChildComponent;