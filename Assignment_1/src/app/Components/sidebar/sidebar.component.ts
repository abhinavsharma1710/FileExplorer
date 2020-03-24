import { Component, OnInit } from '@angular/core';
import { ExplorerServiceService } from '../../Services/explorer-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  arr = [];
  constructor(private explrServ: ExplorerServiceService) { }

  ngOnInit(): void {
    this.arr = this.explrServ.getData();
  }

}
