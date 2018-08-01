import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { IParts } from '../../parts';


@Injectable({
  providedIn: 'root'
})
export class PartsService {
private _url: string = "/assets/Data/parts.json";
 /* constructor(private http: HttpClient) { } */

 /* getParts(): Observable<IParts[]>{
    return this.http.get<IParts[]>(this._url);
      {"id": 1, "PartsDescription": "Rack End(Left)", "makeID": 2, "taskID": 5, "DistributorCost": "33.00", "SupplierID": 1 },
      {"id": 2, "PartsDescription": "Rack End(Right)", "makeID": 3, "taskID": 5, "DistributorCost": "31.00", "SupplierID": 1 },
      {"id": 3, "PartsDescription": "Rack Suspension(Left)", "makeID": 3, "taskID": 3, "DistributorCost": "322.00", "SupplierID": 2 },
      {"id": 4, "PartsDescription": "Rack Bushing(Right)", "makeID": 4, "taskID": 3, "DistributorCost": "12.00", "SupplierID": 12 },
      {"id": 5, "PartsDescription": "Rack Bushing(Left)", "makeID": 8, "taskID": 3, "DistributorCost": "32.00", "SupplierID": 4 },
      {"id": 6, "PartsDescription": "Canister(Left)", "makeID": 1, "taskID": 2, "DistributorCost": "31.00", "SupplierID": 12 },
      {"id": 7, "PartsDescription": "Pinion End(Right)", "makeID": 1, "taskID": 13, "DistributorCost": "12.00", "SupplierID": 5 } 
    ];
  }*/
  getParts(): IParts[] {
    return [
      {"id": 1, "PartsDescription": "Rack End(Left)", "makeID": 2, "taskID": 5, "DistributorCost": 33.00, "SupplierID": 1, "laborCost": 120.00 },
      {"id": 2, "PartsDescription": "Rack End(Right)", "makeID": 3, "taskID": 5, "DistributorCost": 31.00, "SupplierID": 1 , "laborCost": 120.00 },
      {"id": 3, "PartsDescription": "Rack Suspension(Left)", "makeID": 3, "taskID": 3, "DistributorCost": 322.00, "SupplierID": 2 , "laborCost": 120.00 },
      {"id": 4, "PartsDescription": "Rack Bushing(Right)", "makeID": 4, "taskID": 3, "DistributorCost": 12.00, "SupplierID": 12, "laborCost": 120.00  },
      {"id": 5, "PartsDescription": "Rack Bushing(Left)", "makeID": 8, "taskID": 3, "DistributorCost": 32.00, "SupplierID": 4 , "laborCost": 120.00 },
      {"id": 6, "PartsDescription": "Canister(Left)", "makeID": 1, "taskID": 2, "DistributorCost": 31.00, "SupplierID": 12 , "laborCost": 120.00 },
      {"id": 7, "PartsDescription": "Pinion End(Right)", "makeID": 1, "taskID": 13, "DistributorCost": 12.00, "SupplierID": 5, "laborCost": 120.00  } 
    ];
  }



}
