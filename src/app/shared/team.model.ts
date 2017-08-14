import { Employee } from './employee.model';
import { Department } from './department.model';

export class Team {
    teamName = '';
    teamManager = '';
    teamDept: Department;
    employees: Employee[];
}