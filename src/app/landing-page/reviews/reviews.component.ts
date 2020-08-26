import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  //Formulario
  
  //Inputs
  user: FormControl;
  review: FormControl;
  reviewsForm: FormGroup;

  menu: any
  reviews: any

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) { 

    this.user = new FormControl('',[Validators.required])
    this.review = new FormControl('',[Validators.required])

    this.reviewsForm = new FormGroup({

      user: this.user,
      review: this.review

    })

   }

  ngOnInit(): void {
    this.service.getMenuItem(+this.route.snapshot.params["id"]).subscribe(data => {
      this.menu = data;
    });
    this.service.getReviews().subscribe((result:any)=>{
      this.reviews= result.data
      console.log(this.reviews)
    });
  }

  submitForm(item){
    item.id_pizza= this.menu.id
    let aqi= this.menu.id
    if(this.user.dirty){
      this.service.addReviews(item).subscribe(data=>{
        this.user.setValue("")
        this.review.setValue("")
        window.location.reload();
      })
  }
  }

  cancel(){
    this.router.navigate(['/dashboard'])
  }
  isLogged() {
    return this.service.isLogged();
  }

}
