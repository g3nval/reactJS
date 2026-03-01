import React, { useState } from "react";
import { toast } from 'react-toastify';

const AddComponent = ({ addNewSalaryUser }) => {
    const [formData, setFormData] = useState({
        name: '', baseSalary: '', workDays: '', allowance: ''
    });

    const handleOnChangeInput = (e, id) => {
        setFormData({ ...formData, [id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, baseSalary, workDays, allowance } = formData;

        if (!name || !baseSalary || !workDays) {
            toast.error("Please enter all required information.");
            return;
        }

        const finalSalary = Math.floor((parseFloat(baseSalary) / 26) * parseFloat(workDays) + (parseFloat(allowance) || 0));

        addNewSalaryUser({
            id: Math.floor(Math.random() * 10000).toString(),
            name: name,
            salary: finalSalary,
            email: `${name.toLowerCase().replace(/\s/g, '')}@company.com`,
            avatar: `https://i.pravatar.cc/150?u=${name}`
        });

        setFormData({ name: '', baseSalary: '', workDays: '', allowance: '' });
        toast.success("Salary calculation successful!");
    };

    return (
        <section className='add-salary-container' aria-label="Add new salary record">
            <form className="salary-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="emp-name">Employee's full name</label>
                    <input id="emp-name" type="text" value={formData.name} placeholder="Enter a name"
                        onChange={(e) => handleOnChangeInput(e, 'name')} />
                </div>

                <div className="input-row">
                    <div className="input-group">
                        <label htmlFor="base-salary">Basic salary ($)</label>
                        <input id="base-salary" type="number" value={formData.baseSalary} placeholder="Example: 3000"
                            onChange={(e) => handleOnChangeInput(e, 'baseSalary')} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="work-days">Number of working days</label>
                        <input id="work-days" type="number" value={formData.workDays} placeholder="Max: 26"
                            onChange={(e) => handleOnChangeInput(e, 'workDays')} />
                    </div>
                </div>

                <div className="input-group">
                    <label htmlFor="allowance">Allowance ($)</label>
                    <input id="allowance" type="number" value={formData.allowance} placeholder="Allowance"
                        onChange={(e) => handleOnChangeInput(e, 'allowance')} />
                </div>

                <button type="submit" className="btn-submit">Add to payroll</button>
            </form>
        </section>
    );
};

export default AddComponent;