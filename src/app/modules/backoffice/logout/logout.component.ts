import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core';
import { Router } from '@angular/router';

@Component({
   selector: 'backoffice-logout',
   templateUrl: './logout.component.html',
   styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

   constructor(private authService : AuthService, private router: Router) { }

   ngOnInit() {
      this.authService.logout();
      this.router.navigate(['/']);
   }

}