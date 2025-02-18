import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {

  @Input() title: string = "";
  @Input() primary_btn_text: string = "";
  @Input() secondary_btn_text: string = "";

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    console.log("OK")
    this.onSubmit.emit();
  }

  navigate(){
    console.log("nav")
    this.onNavigate.emit();
  }

}
