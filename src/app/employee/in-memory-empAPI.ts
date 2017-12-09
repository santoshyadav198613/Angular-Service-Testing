import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemEmployeeService implements InMemoryDbService {
    createDb() {
        let employee = [
            { id: 1, name: 'Santosh', dob: new Date('10-nov-2000'), salary: 45000 },
            { id: 2, name: 'Amit', dob: new Date('10-nov-1986'), salary: 55000 },
            { id: 3, name: 'Nilu', dob: new Date('10-nov-1987'), salary: 65000 },
            { id: 4, name: 'Swapnil', dob: new Date('10-nov-1988'), salary: 75000 }
        ];
        return { employee };
    }
}