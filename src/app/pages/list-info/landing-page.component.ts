import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {ProductResponseDto} from '../model/ProductResponseDto';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  isEdited = true;
  edit: ProductResponseDto[] = [];
  delete: ProductResponseDto[] = [];
  products: ProductResponseDto[] = [];
  subscriptions: Subscription[] = [];
  product!: ProductResponseDto;
  isProduct = false;

  constructor(private userService: UserService) { }

  ngOnDestroy(): void {
        for (const sub of this.subscriptions){
          sub.unsubscribe();
        }
    }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const subscription = this.userService.getProduct().subscribe( (res: any) => {
      this.products = res.products;
    }, ( error: HttpErrorResponse) => {
      console.log(error);
    });
    this.subscriptions.push(subscription);

  }

  editProduct(prod: ProductResponseDto): void {
    this.product = prod;
    console.log(this.product);
    this.userService.editProduct(this.isEdited).subscribe( (res) => {
      this.edit = res;
    });
  }

  deleteProduct(): void {
    this.userService.deleteProduct().subscribe( res => {
      this.delete = res;
    });
  }
}
