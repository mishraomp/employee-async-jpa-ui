import axios from 'axios';

export default class EmployeeService {
    getAllEmployees(pageNumber, pageSize, sortBy) {
        return axios
            .get('http://localhost:8092/api/v1/employee', {
                headers: {"Content-Type": "application/json"},
                params: {pageNumber, pageSize, sortBy},
                data: {}
            })
            .then(res => res);
    }
}
