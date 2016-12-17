import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FileItem } from './file-item';
import { FILES } from './files-mock';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getFiles(): Promise<FileItem[]> {
    return this.http.get("/api/fs/list").toPromise().then(response => response.json().files as FileItem[]).catch(this.handleError);
    //return Promise.resolve(FILES);
  }
}
