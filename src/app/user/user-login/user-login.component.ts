import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toasterService: ToasterService
  ) {

  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // this.toasterService.pop('success', '', "ลงชื่อออกเรียบร้อยแล้ว");
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
        let status = data.data.status || 'ERROR';
        if (status == 'ERROR') {
          this.errorMessage = data.data.data.message;
          this.toasterService.pop('error', '', this.errorMessage);
        } else {
          this.toasterService.pop('success', '', data.data.data.message);
        }

        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.errorMessage = 'Bad Request Pleast try again!';
        this.toasterService.pop('error', '', this.errorMessage);
        this.loading = false;
      });
  }

}
