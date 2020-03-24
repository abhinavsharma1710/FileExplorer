import { Component, OnInit, DoCheck } from '@angular/core';
import { ExplorerServiceService } from '../../../Services/explorer-service.service';

interface FileObject {
  name: string;
  icon: string;
}


@Component({
  selector: 'app-folder-modal',
  templateUrl: './folder-modal.component.html',
  styleUrls: ['./folder-modal.component.css']
})
export class FolderModalComponent implements OnInit, DoCheck {
  showModal: boolean = false;
  name="";
  isValid = true;
  constructor(private explrServ: ExplorerServiceService) { }

  ngOnInit(): void {
    this.showModal = false;
  }

  ngDoCheck(){
    this.showModal = this.explrServ.getModalStatus('folder');
  }

  create(){
    if(!this.name.length){
      this.isValid = false;
      return;
    }
    let data = { name :this.name, icon:'folder'}
    this.explrServ.create(data);
    this.resetModal();
  }
  cancel(){
   this.resetModal();
    this.explrServ.closeModal()
  }
  resetModal(){
    this.name="";
    this.isValid = true;
  }

}
