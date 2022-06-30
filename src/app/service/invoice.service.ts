import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IInvoice} from 'src/app/model/invoice.model';

@Injectable({
    providedIn: 'root'
})

// const httpOptions ={
//     headers : new HttpHeaders({'Content-Type':'Application/json'})
// }

export class InvoiceService {
    public url = 'http://localhost:8080/';

    constructor(private http:HttpClient) {}

    save(data : any): Observable<HttpResponse<any>> {
      console.log(data);
      return this.http.post<IInvoice>(this.url + 'api/saveInvoice', data, { observe: 'response' });
    }
}