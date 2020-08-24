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
  idPizza: FormControl;
  namePizza: FormControl;
  descriptionPizza: FormControl;
  pricePizza: FormControl;
  activePizza: FormControl;

  constructor(private service: AppService, private router: Router) { 

    this.idPizza = new FormControl('', [Validators.required])
    this.namePizza = new FormControl('', [Validators.required])
    this.descriptionPizza = new FormControl('', [Validators.required])
    this.pricePizza = new FormControl('', [Validators.required])
    this.activePizza = new FormControl('', [Validators.required])

    this.newMenuForm = new FormGroup({

      idPizza: this.idPizza,
      namePizza: this.namePizza,
      descriptionPizza: this.descriptionPizza,
      pricePizza: this.pricePizza,
      activePizza: this.activePizza

    })

  }

  ngOnInit(): void {
    //
  }

  addToMenu(info){
    this.service.addToMenu(info).subscribe(data => {
      this.router.navigate(['/'])
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }

}
