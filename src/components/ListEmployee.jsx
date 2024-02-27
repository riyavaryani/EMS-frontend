import React from 'react';

const ListEmployee = () => {

    const employees = [
        {
            id: 1,
            firstName: "ut",
            lastName: "ch",
            emailId: "utchak@gmail.com"
        },
        {
            id: 2,
            firstName: "r",
            lastName: "v",
            emailId: "rv@gmail.com"
        },
        {
            id: 3,
            firstName: "riya",
            lastName: "chak",
            emailId: "rchak@gmail.com"
        },
    ]

    return (
        <div className="p-4">
            <h2 className="text-center my-3">Lists of Employee</h2>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                {
                    employees.length > 0 && employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.emailId}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployee;