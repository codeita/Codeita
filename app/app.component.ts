import { Component } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';

import { ApiService } from './api.service';
//import { FileItem } from './file-item';

@Component({
  selector: 'codeita',
  templateUrl: 'tpl/app.html',
  providers: [ApiService]
})



export class AppComponent {
  name = 'Codeita';

}
