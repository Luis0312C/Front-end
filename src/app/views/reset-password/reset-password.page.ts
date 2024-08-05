import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  username: string ='';

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }  
  
  //Recuperación de contraseña --------------------------------------------->
  resetPassword() {
    this.authService.resetPassword(this.username).subscribe(response => {
      if (response.status) {
        alert(response.message);
        this.reset();
      } else {
        alert(response.message);
        this.reset();
      }
    }, error => {
      console.error(error);
      alert('Error');
      this.reset();
    });
  }

  //----------------------------------------------------------------------->

  

 //limpia el campo de username ------------------------------------------->
  reset(){
    this.username = '';
  }
//------------------------------------------------------------------------> 

}
