import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';
import { DISCOUNT, NEWTAX, QRCODE } from 'src/app/constants/invoice.constants';
import { Subscription } from 'rxjs';
import { Invoice, IInvoice } from 'src/app/model/invoice.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 

export class AppComponent implements OnInit {
  title = 'DemoConnectAPI';
  @Input() invoice: IInvoice;

  newDiscount: any[] = [];
  newTax: any[] = [];
  qrCodeType: any[] = [];
  ngSelect = '--Lựa chọn--';

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit() {
    this.buildForm();
    this.newDiscount = DISCOUNT;
    this.newTax = NEWTAX;
    this.qrCodeType = QRCODE;
  }

  
  save() {
    if (this.form.invalid) {
      return;
    }
    const data = this.getValueFromForm();
    this.invoiceService.save(data);
    console.log(data);

  }
  onCloseAddModal() {

  }

  getValueFromForm() {
    return {
      ...new Invoice(),
      taxCode: this.getValueOfField('taxCode'),
      invoiceTemplate: this.getValueOfField('invoiceTemplate'),
      newInvoiceTemplate: this.getValueOfField('newInvoiceTemplate'),
      newDiscount: this.getValueOfField('newDiscount'),
      newTax: this.getValueOfField('newTax'),
      qrCodeType: this.getValueOfField('qrCodeType')
    };
  }

  get formControl() {
    return this.form.controls;
  }


  getValueOfField(item: any) {
    return this.form.get(item).value;
  }

  setValueToField(item: any, data: any) {
    this.form.get(item).setValue(data);
  }

  trimSpace(element: any) {
    const value = this.getValueOfField(element);
    if (value) {
      this.setValueToField(element, value.trim());
    }
  }

  displayFieldHasError(field: string) {
    return {
      'has-error': this.isFieldValid(field)
    };
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      taxCode: [null, Validators.required],
      invoiceTemplate: [null, Validators.required],
      newInvoiceTemplate: [null],
      newDiscount: [null],
      newTax: [null],
      qrCodeType: [null]  
    });
  }

}
