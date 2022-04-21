import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {ProductResponseDto} from '../model/ProductResponseDto';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductRequestDto} from '../model/ProductRequestDto';

@Component({
  selector: 'app-form-info',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  isCreated = true;
  submit: ProductResponseDto[] = [];
  prod = '';
  @Input() product!: ProductResponseDto;
  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [''],
      brand: [''],
      number: [''],
      description: ['']
    });
  }

  createProduct(): void {
    const payload: ProductRequestDto = {
      productname: this.productForm.value.name,
      productbrand: this.productForm.value.brand,
      details: this.productForm.value.description,
      productnumber: this.productForm.value.number,
      productid: '1350'
    };
    this.userService.createProduct(payload).subscribe(( res: ProductResponseDto[]) => {
      // this.submit = res;
      console.log(res);
    }, ( error: HttpErrorResponse) => {
      console.log(error);
    });
    this.router.navigate(['/list-info']);
  }

}
