import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  //Formulario
  reviewsForm: FormGroup;
  //Inputs
  name: FormControl;
  email: FormControl;
  review: FormControl;

  menu: any

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) { 

    this.name = new FormControl('', [Validators.required])
    this.email = new FormControl('',[Validators.required])
    this.review = new FormControl('',[Validators.required])

    this.reviewsForm = new FormGroup({

      name: this.name,
      email: this.email,
      review: this.review

    })

   }

  ngOnInit(): void {
    //
  }

  submitForm(item){
    //TODO
    this.router.navigate(['/dashboard'])
  }

  cancel(){
    this.router.navigate(['/dashboard'])
  }

}
