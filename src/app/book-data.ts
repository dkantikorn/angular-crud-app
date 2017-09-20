import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class BookData implements InMemoryDbService {
  createDb() {
    let books = [
      { id: '1', name: 'Angular 2 with Angular-CLI', category: 'Angular', writer: 'sarawutt.b' },
      { id: '2', name: 'AngularJS simple Application on CRUD', category: 'Angular', writer: 'sarawutt.b' },
      { id: '3', name: 'Angular 2 with Typescript', category: 'Angular', writer: 'sarawutt.b' },	
      { id: '4', name: 'Core Java OOP', category: 'Java', writer: 'sarawutt.b' },
      { id: '5', name: 'JSP & Servlet', category: 'Java', writer: 'sarawutt.b' },
      { id: '6', name: 'JPA', category: 'Java', writer: 'sarawutt.b' },
      { id: '7', name: 'Hibernate', category: 'Hibernate', writer: 'sarawutt.b' }
    ];
    return {books};
  }
}