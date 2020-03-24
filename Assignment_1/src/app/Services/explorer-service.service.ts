import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExplorerServiceService {
  showFolderModal : boolean = false;
  showFileModal : boolean = false;
  fileImg : string = '../assets/File-icon.png';
  folderImage : string= '../assets/Folder-icon.png';
  gridView : boolean = true;
  arr = [{
    name: 'Folder1',
    icon: this.folderImage,
    type:'folder'
  },
  {
    name: 'Folder2',
    icon: this.folderImage,
    type:'folder'
  },
  {
    name: 'File1',
    icon: this.fileImg,
    type: 'file'
  }
]
  constructor() { }
  getData() {
    return this.arr;

  }
  getModalStatus(type){
    if(type === 'folder'){
      return this.showFolderModal;
    }else{
      return this.showFileModal;
    }

  }
  openModal(type:string){
    if(type === 'folder'){
      this.showFolderModal = true;
      return this.showFileModal;
    }else{
      this.showFileModal = true;
      return this.showFileModal;
    }
  }

  closeModal(){
    this.showFolderModal = false;
    this.showFileModal = false;
  }

  create(data){
    let icon = data.icon === 'folder' ? this.folderImage : this.fileImg;
    this.arr.push({
      name:data.name,
      icon: icon,
      type:data.icon
    });
    this.closeModal();
  }

  changeLayout(layout){
    if(layout == 'grid'){
      this.gridView = true;
    }
    else{
      this.gridView = false;
    }
  }

}
