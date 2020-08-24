import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {


  //Formulario
  newMenuForm: FormGroup;
  //Inputs
 
  name: FormControl;
  description: FormControl;
  price: FormControl;
  active: FormControl;

  constructor(private service: AppService, private router: Router) { 

    this.name = new FormControl('', [Validators.required])
    this.description = new FormControl('', [Validators.required])
    this.price = new FormControl('', [Validators.required])
    this.active = new FormControl('', [Validators.required])

    this.newMenuForm = new FormGroup({

   
      name: this.name,
      description: this.description,
      price: this.price,
      active: this.active

    })

  }

  ngOnInit(): void {
    //
  }

  addToMenu(info){
    this.service.addToMenu(info).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }

  cancel(){
    this.router.navigate(['/dashboard'])
  }

}
