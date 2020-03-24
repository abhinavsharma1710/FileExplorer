import { Component, OnInit } from '@angular/core';
import { ExplorerServiceService } from '../../Services/explorer-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private explrServ : ExplorerServiceService) { }

  ngOnInit(): void {
  }

  openModal(type:string){
    this.explrServ.openModal(type);

  }

  setLayout(layout){
    this.explrServ.changeLayout(layout);
  }

}
