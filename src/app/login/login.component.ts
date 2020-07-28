import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() show;
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('myModal', { static: true }) modal;
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
}
