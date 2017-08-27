import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
declare var $: any;

@Injectable()
export class UploadFileService {
  requestUrl: string;
  responseData: any;
  handleError: any;

  constructor(private router: Router,
    private http: Http
  ) {
    this.http = http;
  }

  postWithFile(url: string, postData: any, files: File[]) {

    let headers = new Headers();
    let formData: FormData = new FormData();
    formData.append('files', files[0], files[0].name);
    // For multiple files
    // for (let i = 0; i < files.length; i++) {
    //     formData.append(`files[]`, files[i], files[i].name);
    // }

    if (postData !== "" && postData !== undefined && postData !== null) {
      for (var property in postData) {
        if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
        }
      }
    }
    var returnReponse = new Promise((resolve, reject) => {
      this.http.post(url, formData, {
        headers: headers
      }).subscribe(
        res => {
          this.responseData = res.json();
          resolve(this.responseData);
        },
        error => {
          this.router.navigate(['/login']);
          reject(error);
        }
        );
    });
    return returnReponse;
  }
}

/** 
 //call your function (Component file):
  onChange(event) {
      let file = event.srcElement.files;
      let postData = {field1:"field1", field2:"field2"}; // Put your form data variable. This is only example.
      this._service.postWithFile(this.baseUrl + "add-update",postData,file).then(result => {
          console.log(result);
      });
  }

  //your html code:
  <input type="file" class="form-control" name="documents" (change)="onChange($event)" [(ngModel)]="stock.documents" #documents="ngModel">
*/