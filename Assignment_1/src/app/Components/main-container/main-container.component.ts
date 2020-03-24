import { Component, OnInit, DoCheck } from '@angular/core';
import { ExplorerServiceService } from '../../Services/explorer-service.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit, DoCheck{
  arr = []
  gridView;
  today: number = Date.now();
  constructor(private explrServ: ExplorerServiceService) { }
  
  ngOnInit(): void {
    this.arr = this.explrServ.getData();
    
  }

  ngDoCheck(){
    this.gridView = this.explrServ.gridView;
  }
  

}
