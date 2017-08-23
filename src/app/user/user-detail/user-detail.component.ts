import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    user: any;
    constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) {}

    ngOnInit() {
        this.findUserByUserId();
    }

    //Function load a user infomation whare match parameter id
    //Function for view page
    findUserByUserId() {
        this.route.params
            .switchMap((params: Params) => this.userService.findUserByUserId(+params['user-id']))
            .subscribe(info => this.user = info);
    }

    /**
     * 
     * Function go back when click the back button
     * @author sarawutt.b
     */
    goBack() {
        this.location.back();
    }

}
