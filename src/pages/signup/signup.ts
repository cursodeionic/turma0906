import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public form: FormGroup;

  constructor(public navCtrl: NavController, private builder: FormBuilder) {
    this.form = this.builder.group({
      'email': ['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
  }

  submit(){
    console.log(this.form.controls.values);
  }

}
