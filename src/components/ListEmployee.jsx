import { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService.js';

const ListEmployee = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		listEmployees()
			.then((res) => setEmployees(res.data))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="container mb-5">
			<h2 className="text-center my-3">Lists of Employee</h2>
			<table className="table table-striped table-hover table-bordered">
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
							<td>{emp.email}</td>
						</tr>
					))
				}
				</tbody>
			</table>
		</div>
	);
};

export default ListEmployee;