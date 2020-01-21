<template>
    <v-container fluid class="full-height">
        <v-row align="center" justify="center">
            <DataTable
                :value="employees"
                :lazy="true"
                :paginator="true"
                :rows="10"
                :totalRecords="totalRecords"
                :loading="loading"
                @page="onPage($event)"
            >
                <Column field="employeeName" header="Name" />
                <Column field="job" header="Job" />
                <Column field="manager" header="Manager" />
                <Column field="hireDate" header="Hire Date" />
                <Column field="comm" header="Comm" />
                <Column field="departmentNum" header="Department" />
            </DataTable>
        </v-row>
    </v-container>
</template>
<script>
// @ is an alias to /src
import EmployeeService from '../service/employee-service';

export default {
    name: 'Employee',
    data() {
        return {
            loading: false,
            totalRecords: 0,
            employees: null
        };
    },
    employeeService: null,
    created() {
        this.employeeService = new EmployeeService();
    },
    mounted() {
        this.loading = true;
        this.employeeService
            .getAllEmployees(0, 10, null)
            .then(res => {
                this.totalRecords = res.totalRecords;
                this.employees = res.contents;
                this.loading = false;
            })
            .catch(error => console.error(error));
    },
    methods: {
        onPage(event) {
            this.loading = true;
            this.employees = this.employeeService.getAllEmployees(
                event.first,
                event.first,
                null
            );
            this.loading = false;
        }
    }
};
</script>
