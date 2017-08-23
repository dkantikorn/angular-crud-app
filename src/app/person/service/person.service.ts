import { Injectable } from '@angular/core';
import { Person } from '../person';

const PERSONS = [
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),
  new Person(3, 'Kishna', 'Mathura')
];
let personsPromise = Promise.resolve(PERSONS);

@Injectable()
export class PersonService {

  getPersons(): Promise<Person[]> {
    return personsPromise;
  }
  getPerson(id: number): Promise<Person> {
    return this.getPersons()
      .then(persons => persons.find(person => person.personId === id));
  }
  updatePerson(person: Person): Promise<Person> {
    return this.getPersons()
      .then(persons => {
        let personObj = persons.find(ob => ob.personId === person.personId);
        personObj = person;
        return personObj;
      }
      );
  }


}
