import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(private authService:SocialAuthService) { }
  

    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    user: any;
    loggedIn: any;
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        console.log(this.user);
        this.loggedIn = (user != null);
      });
    }
}
