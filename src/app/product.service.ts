import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
@Injectable()
export class ProductService {

  _albumUrl='../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum (id:number) {
  
  }
  
}

