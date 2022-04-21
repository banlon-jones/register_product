import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponseDto} from '../pages/model/ProductResponseDto';
import {environment} from '../../environments/environment';
import {ProductRequestDto} from '../pages/model/ProductRequestDto';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  header = {
    'access-control-allow-methods': '*',
  };
  baseURL: string = environment.url;
  getProduct(): Observable<ProductResponseDto[]> {
    return this.http.get <any> (`${this.baseURL}/products`);
  }

  createProduct(isCreated: ProductRequestDto): Observable<any> {
    console.log(isCreated);
    return this.http.post<any>(`https://gdhwqcwoaf.execute-api.us-east-1.amazonaws.com/prod/product`, {isCreated});
  }

  deleteProduct(): Observable<any> {
    return this.http.delete<ProductResponseDto[]>(this.baseURL);
  }

  editProduct(isEdited: boolean): Observable<any> {
    return this.http.put<ProductResponseDto[]>(this.baseURL, isEdited);
  }
}
