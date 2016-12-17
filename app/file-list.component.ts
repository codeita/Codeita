import { Component, OnInit } from '@angular/core';

import { FileItem } from './file-item';
//import { FILES } from './files-mock';

import { ApiService } from './api.service';

@Component({
  selector: 'file-list',
  templateUrl: 'tpl/file-list.html'
})

export class FileList implements OnInit {
  constructor(private apiService: ApiService) { }

  files: FileItem[];
  file: FileItem = {
    id: 1,
    name: 'Windstorm'
  };
  selectedFile: FileItem;

  getFiles(): void {
    //this.files = this.apiService.getFiles();
    this.apiService.getFiles().then(files => this.files = files);
  }

  ngOnInit(): void {
    this.getFiles();
  }

  onSelect(file: FileItem): void {
    this.selectedFile = file;
  }

}
