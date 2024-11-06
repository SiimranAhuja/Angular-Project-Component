import { Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent {
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  //@Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{title: string, text: string}>()
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle: string = '';
  enteredText: string = '';

  onSubmit() {
    // console.log(title);
    // console.log(ticketText);
    //this.form?.nativeElement.reset();
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    this.enteredTitle = '';
    this.enteredText = '';
    //this.form().nativeElement.reset();
  }
}
