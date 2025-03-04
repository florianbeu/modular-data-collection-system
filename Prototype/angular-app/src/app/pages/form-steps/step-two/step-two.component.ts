import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../../form.service";

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  step: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({
      workStreet: ['', Validators.required],
      workHouseNr: ['', Validators.required],
      workPlz: ['', Validators.required],
      workPlace: ['', Validators.required],
      distance: ['']
    });
    this.formService.stepReady(this.step, 'two')
  }

  ngOnInit(): void {
  }

}
