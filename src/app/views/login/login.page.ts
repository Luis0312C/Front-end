import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  token: string = '';
  

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  // login() {
  //   this.authService.login(this.username, this.password).subscribe(response => {
  //     if (response.status) {
  //       localStorage.setItem('token', response.token);
  //       this.router.navigateByUrl('/home');
  //     } else {
  //       alert(response.message);
  //     }
  //   }, error => {
  //     console.error(error);
  //     alert('Error en el inicio de sesión');
  //   });
  // }

  //Inicio de sesión ---------------------------------------------------------->
  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response.status) {
        this.token = response.token;
        localStorage.setItem('token', this.token);
        console.log(this.token); // Imprimir token en la consola
        this.router.navigateByUrl('/home');
        this.reset();
      } else {
        this.reset();
        alert('Login failed');
      }
    }, error => {
      this.reset();
      console.error(error);
      alert('Login failed');
    });
  }
  //------------------------------------------------------------------------> 


 //limpia los campos de username y password ------------------------------------------->
 reset(){
  this.username = '';
  this.password = '';
 }
//------------------------------------------------------------------------> 


}

