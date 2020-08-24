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
  id: FormControl;
  name: FormControl;
  description: FormControl;
  price: FormControl;
  active: FormControl;

  menu: any

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) { 

    this.name = new FormControl('',[Validators.required])
    this.description = new FormControl('', [Validators.required])
    this.price = new FormControl('',[Validators.required])

    this.editMenuForm = new FormGroup({

      // id: this.menu.id,
      name: this.name,
      description: this.description,
      price: this.price,
      // active: this.menu.active
    })

   }

  ngOnInit(): void {
  
    this.service.getMenuItem(+this.route.snapshot.params["id"]).subscribe(data => {
      this.menu = data;
      console.log(data)
    })
    this.editMenuForm.controls['name'].setValue(this.menu.name)
    this.editMenuForm.controls['description'].setValue(this.menu.description)
    this.editMenuForm.controls['price'].setValue(this.menu.price)


  }

  submitForm(item){
    item.id= this.menu.id
    item.active= this.menu.active
    this.service.updateMenu(item, item.id).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }

  cancel(){
    this.router.navigate(['/dashboard'])
  }

}
