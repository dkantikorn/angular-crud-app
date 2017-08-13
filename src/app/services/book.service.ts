import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Book } from '../book.model';
import { BOOKS } from '../mock-book-data';

@Injectable()
export class BookService {
    //url = "http://localhost:4200/data/books.json";
    url = "api/books";
    constructor(private http: Http) { }


    /**
     * 
     * Get all Observable for books information
     */
    getBooksWithObservable(): Observable<Book[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    /**
     * 
     * Function add book information with observable
     * @param book type of Book model
     * @return Observable<Book>
     */
    addBookWithObservable(book:Book): Observable<Book> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, book, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    }

    /**
     * 
     * Get all Promise for books information
     */
    getBooksWithPromise(): Promise<Book[]> {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    addBookWithPromise(book:Book): Promise<Book> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, book, options).toPromise()
	           .then(this.extractData)
                   .catch(this.handleErrorPromise);
    }

    /**
     * 
     * Function extract data in Response Observable to the json output
     * @param res type of the Observable class
     */
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    /**
     * 
     * Function Handle for if has error log and notificate used only in Observable response
     * @param error type of the Observable class
     */
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    /**
     * 
     * Function Handle for if has error log and notificate used only in Promise response
     * @param error type of the Promise class
     */
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }


    /**
     * 
     * ------------------------------------------------------------------------------------
     * For book library
     * ------------------------------------------------------------------------------------
     */
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }

    addBook(book:Book): void {
		this.getBooks().then(books => {
		     let maxIndex = books.length - 1;
		     let bookWithMaxIndex = books[maxIndex];
		     book.id = (parseInt(bookWithMaxIndex.id) + 1).toString();
		     books.push(book);}
		);
    }
    
    getBook(id: string): Promise<Book> {
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }

    deleteBook(id: string): void {
		this.getBooks().then(books => {
		    let book = books.find(ob => ob.id === id);
                    let bookIndex = books.indexOf(book);
                    books.splice(bookIndex, 1);}
		);
    }
} 