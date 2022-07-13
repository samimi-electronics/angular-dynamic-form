import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formAttributes = [
    {id: 1, attr_key: 'amount', attr_title: 'Amount ($)', attr_type: 'number'},
    {id: 2, attr_key: 'bank_account', attr_title: 'Bank Acc. No.', attr_type: 'string'},
    {id: 3, attr_key: 'bank_name', attr_title: 'Bank Name', attr_type: 'string'},
    {id: 4, attr_key: 'date_of_pay', attr_title: 'Payment Date', attr_type: 'date'},
    {id: 5, attr_key: 'just_for_lolz', attr_title: 'JUST FOR LOLZ', attr_type: 'string'}
  ];

  depositForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.depositForm = new FormGroup(this.generateFormGroup());
    this.depositForm = this.formBuilder.group(this.generateFormGroup());
  }

  public onSubmit() {
    console.log(this.depositForm.value);
  }

  private generateFormGroup() {
    const formControls: any = {};
    this.formAttributes.forEach(fa => {
      switch(fa.attr_type) {
        case 'string':
          formControls[fa.attr_key] = ['', Validators.compose([Validators.required, Validators.minLength(8)])];
          break;
        case 'number':
          formControls[fa.attr_key] = ['', Validators.compose([Validators.required, Validators.min(10)])];
          break;
        case 'date':
          formControls[fa.attr_key] = ['', Validators.required];
          break;
      }
    });
    return formControls;
  };

}
