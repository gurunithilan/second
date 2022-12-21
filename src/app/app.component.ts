import { Component, VERSION,HostListener  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterState, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular13';
  name ='test';
  version = VERSION.full;
  profileForm;
  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
  console.log('clicked now this event is available !');  
  }
  constructor(private fb:FormBuilder, private router:Router){
    
    const state: RouterState = router.routerState;
    const root: ActivatedRoute = state.root;
    console.log(state,root);
    const child = root.firstChild;
    //const id: Observable<string> = child.params.map(p => p.id);
    this.profileForm = this.fb.group({//new FormGroup({
      //firstName: new FormControl(''),
      //lastName: new FormControl(''),
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
    });
  }
  ngOnInit(){
    console.log('version',VERSION)
  }
  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Muralitharan',
      lastName: 'Manivel',
    });
  }
  submit(){
    if (this.profileForm.invalid) {
      return;
    }
    console.log('submitForm',this.profileForm)
    var fname = this.profileForm.controls['firstName'].value;
    var lname = this.profileForm.controls["lastName"].value;
    console.log('fname:',fname,'lname',lname);
  }
}

