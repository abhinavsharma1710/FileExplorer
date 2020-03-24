import { Component, OnInit } from '@angular/core';
import { ExplorerServiceService } from '../../../Services/explorer-service.service';

@Component({
  selector: 'app-file-modal',
  templateUrl: './file-modal.component.html',
  styleUrls: ['./file-modal.component.css']
})
export class FileModalComponent implements OnInit {
  showModal: boolean = false;
  name='';
  isValid = true;
  constructor(private explrServ: ExplorerServiceService) { }

  ngOnInit(): void {
    this.showModal = false;
  }

  ngDoCheck(){
    this.showModal = this.explrServ.getModalStatus('file');
  }

  create(){
    if(this.name === undefined || this.name === ''){
      this.isValid = false;
      return;
    }
    let data = { name :this.name, icon:'file'}
    this.explrServ.create(data);
    this.resetModal();
  }
  cancel(){
    this.resetModal()
    this.explrServ.closeModal()
  }
  resetModal(){
    this.name="";
    this.isValid = true;
  }


}
