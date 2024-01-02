import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService ){}
  ngOnInit(): void {
    this.productService.all().subscribe(
      (res)=>{
        this.products = res;
      }
    );
  }

  delete(id:number):void{

    if (confirm("do you want to delete the product?")){
      this.productService.delete(id).subscribe(
        ()=>{
          this.products = this.products.filter(p=> p.id !== id );
        }
    )
    }
    
  }

}



