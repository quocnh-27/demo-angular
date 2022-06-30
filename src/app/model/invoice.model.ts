
export interface IInvoice {
  id?: number;
  taxCode?: string;
  invoiceTemplate?: string;
  newInvoiceTemplate?: string;
  qrCodeType?: string;
  newDiscount?: string;
  newTax?: string;
  
  // createdBy?: string;
  // createdDate?: string;
  // lastModifiedBy?: string;
  // lastModifiedDate?: string
}

export class Invoice implements IInvoice{
  constructor(
    public id?: number,
    public taxCode?: string,
    public invoiceTemplate?: string,
    public newInvoiceTemplate?: string,
    public qrCodeType?: string,
    public newDiscount?: string,
    public newTax?: string
    
    // public createdBy?: string,
    // public createdDate?: string,
    // public lastModifiedBy?: string,
    // public lastModifiedDate?: string
  ) {}
}
