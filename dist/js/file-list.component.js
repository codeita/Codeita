"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//import { FILES } from './files-mock';
var api_service_1 = require("./api.service");
var FileList = (function () {
    function FileList(apiService) {
        this.apiService = apiService;
        this.file = {
            id: 1,
            name: 'Windstorm'
        };
    }
    FileList.prototype.getFiles = function () {
        var _this = this;
        //this.files = this.apiService.getFiles();
        this.apiService.getFiles().then(function (files) { return _this.files = files; });
    };
    FileList.prototype.ngOnInit = function () {
        this.getFiles();
    };
    FileList.prototype.onSelect = function (file) {
        this.selectedFile = file;
    };
    return FileList;
}());
FileList = __decorate([
    core_1.Component({
        selector: 'file-list',
        templateUrl: 'tpl/file-list.html'
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], FileList);
exports.FileList = FileList;
//# sourceMappingURL=file-list.component.js.map