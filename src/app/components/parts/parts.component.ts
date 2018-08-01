import { Component, OnInit } from '@angular/core';
import { PartsService } from '../../services/parts/parts.service';
import { IParts } from '../../parts';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css'],
  providers: [PartsService]
})


export class PartsComponent {
  partsList: IParts[];
  
  constructor( private _partsService: PartsService) {
    this.partsList = this._partsService.getParts();
    }
  /*ngOnInit() {
   this._PartsService.getParts()
       .subscribe(data => this.partsList = data);  */
       addToList( id: number): void {
        console.log('ID is :', id);
      }
     
  }


