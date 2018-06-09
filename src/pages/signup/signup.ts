import { UserServiceProvider } from './../../providers/user-service/user-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public form: FormGroup;

  constructor(public navCtrl: NavController, 
    private builder: FormBuilder,
    private _service: UserServiceProvider
  ) {
    this.form = this.builder.group({
      'email': ['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
  }

  submit(){
    this._service.createUser(this.form.controls.values).subscribe(
      data => {
        console.log(data);
      }
    );
    console.log(this.form.controls.values);
  }

}
