import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-benefits',
  templateUrl: './user-benefits.page.html',
  styleUrls: ['./user-benefits.page.scss'],
})
export class UserBenefitsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      alert(params['id']);
      });
  }

}
