import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardGuard } from 'src/app/helpers/auth-guard.guard';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

declare const particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSideNavOpen: boolean = false;
  isSecure:boolean = true;

  isField  =false;
  userSvc:UserServiceService;
  tokenSvc:TokenStorageService;



  constructor(userService:UserServiceService,tokenService:TokenStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.userSvc = userService;
    this.tokenSvc = tokenService;
   }

  ngOnInit(): void { 
    this.isSecure = this.userSvc.isSignedIn() 

    this.isField = this.userSvc.isField;

    // particlesJS( "particles-js", {
    //   "particles": {
    //     "number": {
    //       "value": 80,
    //       "density": {
    //         "enable": true,
    //         "value_area": 700
    //       }
    //     },
    //     "color": {
    //       "value": "#F00000"
    //     },
    //     "shape": {
    //       "type": "circle",
    //       "stroke": {
    //         "width": 0,
    //         "color": "#000000"
    //       },
    //       "polygon": {
    //         "nb_sides": 5
    //       },
    //     },
    //     "opacity": {
    //       "value": 0.5,
    //       "random": false,
    //       "anim": {
    //         "enable": false,
    //         "speed": 0.1,
    //         "opacity_min": 0.1,
    //         "sync": false
    //       }
    //     },
    //     "size": {
    //       "value": 3,
    //       "random": true,
    //       "anim": {
    //         "enable": false,
    //         "speed": 10,
    //         "size_min": 0.1,
    //         "sync": false
    //       }
    //     },
    //     "line_linked": {
    //       "enable": true,
    //       "distance": 150,
    //       "color": "#F00000",
    //       "opacity": 0.4,
    //       "width": 1
    //     },
    //     "move": {
    //       "enable": true,
    //       "speed": 2,
    //       "direction": "none",
    //       "random": false,
    //       "straight": false,
    //       "out_mode": "out",
    //       "bounce": false,
    //       "attract": {
    //         "enable": false,
    //         "rotateX": 600,
    //         "rotateY": 1200
    //       }
    //     }
    //   },
    //   "interactivity": {
    //     "detect_on": "canvas",
    //     "events": {
    //       "onhover": {
    //         "enable": true,
    //         "mode": "grab"
    //       },
    //       "onclick": {
    //         "enable": true,
    //         "mode": "push"
    //       },
    //       "resize": true
    //     },
    //     "modes": {
    //       "grab": {
    //         "distance": 140,
    //         "line_linked": {
    //           "opacity": 1
    //         }
    //       },
    //       "bubble": {
    //         "distance": 400,
    //         "size": 40,
    //         "duration": 2,
    //         "opacity": 8,
    //         "speed": 3
    //       },
    //       "repulse": {
    //         "distance": 200,
    //         "duration": 0.4
    //       },
    //       "push": {
    //         "particles_nb": 4
    //       },
    //       "remove": {
    //         "particles_nb": 2
    //       }
    //     }
    //   },
    //   "retina_detect": true
    // });
  }
  
  route(route){
    this.router.navigate([route] );
    let currentUrl = route;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  signOut(){
    this.tokenSvc.signOut();
    this.userSvc.setSignIn(false);

    this.router.navigate(['/secure-player']);
  }

  closeInfoMenu(){
    let menu = document.getElementById("infoDropdown")
    menu.style.display=='none'
  }

  openInfoMenu(){
    let menu = document.getElementById("infoDropdown")
    if(menu.style.display=='none'){
      menu.style.display='block';
    }else{
      menu.style.display='none';
    }


  }

  openMenu(){
    let menu = document.getElementById("navdrop")
    menu.classList.toggle('collapse')
  }
 


}
