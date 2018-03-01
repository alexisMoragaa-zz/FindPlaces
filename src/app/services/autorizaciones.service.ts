import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";
import * as firebase from "firebase/app";
@Injectable()

export class AutorizacionesService{
constructor(private fireAuth : AngularFireAuth, private router:Router){
  this.isLogged();
}
public FacebookLogin(){
  this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  .then((result)=>{
    alert("Logeado Con Facebook");
      this.router.navigate(['lugares']);
      console.log(result);
  })
  .catch((error)=>{
    console.log(error);
    alert("lo sentimos, estamos teniendo problemas para logearte con facebook");
  })
}
  public login = (email,password) => {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response)=>{
        alert('Usuario Logeado con exito');
        this.router.navigate(['lugares']);
        console.log(response);
      })
      .catch((error)=>{
        alert('Usuario no registrado');
        console.log(error);
      });
  }

  public registro = (email,password) => {

    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response)=>{
        alert('Usuario Registrado con exito');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch((error)=>{
        alert('Usuario no registrado');
        console.log(error);
      })
  }

  public isLogged(){
    return this.fireAuth.authState;
  }

  public getName(){
    return this.fireAuth.auth.currentUser.displayName;
  }
  public logout(){
    alert("Hasta pronto!");
    this.fireAuth.auth.signOut();
    this.router.navigate(['lugares']);
  }
}
