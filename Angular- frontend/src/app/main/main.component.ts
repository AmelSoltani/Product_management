import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[]=[];

  constructor(private mainService: MainService){


  }
  ngOnInit(): void {

    this.mainService.all().subscribe(
      products=> { this.products = products;}
      
    );
    console.log(this.products);

  }

  Like(id:number): void{
    this.mainService.like(id).subscribe(
      () =>{
        this.products= this.products.map(
          (product: Product)=>{
            if (product.id == id)
          {
            product.likes++;

          }

          return product;

          }
          

        );
      }

    );

  }


}
