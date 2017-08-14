import { Team } from './team.model';

export const ALL_TEAMS: Team[] = [
    {
        "teamName": "Java Team",
        "teamManager": "Sarawutt",
        "teamDept": {
            "deptHead": "Pakgon",
            "deptName": "Tech"
        },
        "employees": [
            {
                "empId": "100",
                "empName": "Jade",
                "skill": "Java"
            },
            {
                "empId": "101",
                "empName": "Dosz",
                "skill": "Angular"
            },
            {
                "empId": "102",
                "empName": "Kong",
                "skill": "Laravel"
            }
        ]
    }
];

export const ALL_SKILLS = [
    { name: 'Java', displayName: 'Java' },
    { name: 'Angular', displayName: 'Angular' },
    { name: 'Dot Net', displayName: 'Dot Net' }
]; 