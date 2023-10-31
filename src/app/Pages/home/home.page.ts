import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mensaje: string ="";
  constructor(private rutaActiva : ActivatedRoute) { 
    this.rutaActiva.queryParams.subscribe(params=>{
        if(params['userUsuario'])
        {
          this.mensaje = params ['userUsuario']
        }

    })

    /*
    data:any;

    constructor(private activeroute: ActivatedRoute, private router: Router) {
      this.activeroute.queryParams.subscribe(params => {
       if (this.router.getCurrentNavigation().extras.state) {
           this.data = this.router.getCurrentNavigation().extras.state.user;
           console.log(this.data)
         }else{this.router.navigate(["/login"])}
     });
   }*/
  }
  ngOnInit() {}


}