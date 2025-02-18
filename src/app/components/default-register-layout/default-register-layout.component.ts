import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-register-layout',
  imports: [],
  templateUrl: './default-register-layout.component.html',
  styleUrl: './default-register-layout.component.scss'
})
export class DefaultRegisterLayoutComponent {

  @Input() title: string = "";
  @Input() primary_btn_text: string = "";
  @Input() secondary_btn_text: string = "";
  @Input() disablePrimaryBtn: boolean = true;

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
