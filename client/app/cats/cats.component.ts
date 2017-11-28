import { Component, OnInit, trigger,
  state,
  style,
  transition,
  animate,
  keyframes } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(1000, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class CatsComponent implements OnInit {

  

  cat = {};
  donorEvents = [];
  isLoading = true;
  isEditing = false;

  addCatForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private catService: CatService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              private http: Http) { }

  ngOnInit() {
    console.log("init");
    this.getDonorEvents();
    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getDonorEvents() {
  
    Observable
    .interval(5000)
    .switchMap(() => this.http.get('http://globalgivinghack.us-west-1.elasticbeanstalk.com/api/donorEvent'))
    .map((data) => data.json())
    .subscribe(
      data => {
        this.isLoading = false;
        if (this.donorEvents.length !== data.length) {
          console.log("data changed." + JSON.stringify(data));
          this.donorEvents = data;
          this.donorEvents.sort((a, b) => b.timestamp - a.timestamp);
          console.log("data sorted." + JSON.stringify(this.donorEvents));

        }
        
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false
    );

  }

}
