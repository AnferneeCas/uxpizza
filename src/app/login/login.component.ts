import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

import { AppService } from '../app.service';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() show;
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  accessToken;
  authEmail;
  authNombre;
  constructor(protected appService: AppService, private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe((params) => {
      this.accessToken = params['accessToken'];
      this.authEmail = params['email'];
      this.authNombre = params['nombre'];
      var data: any = {
        user: {
          email: this.authEmail,
          name: this.authNombre,
        },
        accessToken: this.accessToken,
      };
      if (this.accessToken) {
        this.appService.setAuth({
          accessToken: this.accessToken,
          user: { email: this.authEmail, nombre: this.authNombre },
        });
      }
    });
  }
  @ViewChild('myModal', { static: true }) modal;
  public email = '';
  public pass = '';

  ngOnInit() {
    console.log(this.show);
  }
  ngAfterViewInit() {
    if (this.show) {
      this.modal.nativeElement.click();
    }
  }
  ngOnChanges() {
    if (this.show) {
      this.modal.nativeElement.click();
      this.showChange.emit(false);
    }
  }
  logWithGit() {
    this.appService.loginGithub();
  }

  register($event) {
    $event.preventDefault();
    console.log(this.email, this.pass);
    this.appService
      .register({ email: this.email, password: this.pass })
      .subscribe((res) => {
        console.log(res);
        this.appService
          .login({ email: this.email, password: this.pass, strategy: 'local' })
          .subscribe((res: any) => {
            console.log(res);
            if (res.accessToken) {
              this.appService.setAuth(res);
              this.modal.nativeElement.click();
            }
          });
      });
  }
  login($event) {
    $event.preventDefault();
    console.log(this.email, this.pass);
    this.appService
      .login({ email: this.email, password: this.pass, strategy: 'local' })
      .subscribe((res: any) => {
        console.log(res);
        if (res.accessToken) {
          this.appService.setAuth(res);
          this.modal.nativeElement.click();
        }
      });
  }
}
