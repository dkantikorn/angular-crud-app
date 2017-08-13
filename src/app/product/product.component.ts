import { Component, OnInit } from '@angular/core';

//Import making with request params
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params['id'];
      console.log('your request params : ' + id);
    });
  }

  //Function making for redirect to Home Component
  gotoHome() {
    this.router.navigate(['home']);
  }

}
