import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    usuario:'',
    password:''
  }

  constructor(private router: Router) { }

  ngOnInit() {}
  
  ingresar() {

    /*let navigationExtras: NavigationExtras = {
      state: {
        user:this.user
        }
      };
    this.router.navigate(['/home'], navigationExtras );
    }*/
  
    /*let navigationExtras: NavigationExtras ={
      state:{
        user:this.user
      }
    };
    this.router.navigate(['/home'],navigationExtras);
    -------------------------------------------------*/

  //  console.log("usuario" + this.user.usuario)
  // console.log("password" + this.user.password)
  
  /*if (this.user.usuario && this.user.password) {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user,
      },
    };
    this.router.navigate(['/home'], navigationExtras);
  }-------------------------------------------------*/

  console.log("usuario" + this.user.usuario)
  console.log("password" + this.user.password)
  
  let enviarDatos: NavigationExtras = {
    queryParams: {
      userUsuario:  this.user.usuario,
      //userpassword:this.user.password
     }
  }
  this.router.navigate(['/home'], enviarDatos );
  }


  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
}
