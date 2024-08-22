import { Component } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrl: './form-a.component.css'
})
export class FormAComponent {
  selectedValue : string = '';
  onChanges(param : any){
    
   this.selectedValue = param.target.value
    

  }
}
