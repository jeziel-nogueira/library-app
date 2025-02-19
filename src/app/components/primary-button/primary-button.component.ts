import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrimaryButtonComponent implements OnInit{
  
  @Input()  iconAlign: 'left' | 'right' = 'left'
  @Input() color: 'primary' | 'secondary' = 'secondary'
  @Input()
  set outline(value: boolean) {
    this._outline = value !== null && `${value}` !== 'false';
  }

  @HostBinding('class.custom-button') _custon_button = true
  @HostBinding('class.custom-button--outline') _outline = false
  @HostBinding('class.custom-button--primary') 
  get light():boolean{
    return this.color === 'primary'
  }
  @HostBinding('class.custom-button--secondary')
  get dark():boolean{
    return this.color === 'secondary'
  }

  constructor(){}
  ngOnInit(): void {}

}
