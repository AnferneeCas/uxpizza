import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { interface } from '...'


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  //Formulario
  editMenuForm: FormGroup;
  //Inputs
  idPizza: FormControl;
  namePizza: FormControl;
  descriptionPizza: FormControl;
  pricePizza: FormControl;
  activePizza: FormControl;

  menu: any

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) { 

    this.idPizza = new FormControl('',[Validators.required])
    this.namePizza = new FormControl('',[Validators.required])
    this.descriptionPizza = new FormControl('', [Validators.required])
    this.pricePizza = new FormControl('',[Validators.required])
    this.activePizza = new FormControl('',[Validators.required])

    this.editMenuForm = new FormGroup({

      idPizza: this.idPizza,
      namePizza: this.namePizza,
      descriptionPizza: this.descriptionPizza,
      pricePizza: this.pricePizza,
      activePizza: this.activePizza

    })

   }

  ngOnInit(): void {
  
    this.service.getMenuItem(+this.route.snapshot.params["id"]).subscribe(data => {
      this.menu = data;
    })

  }

  submitForm(item){
    item.idPizza = this.menu.idPizza
    this.service.updateMenu(item, item.idPizza).subscribe(data => {
      this.router.navigate(['/'])
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }

}
