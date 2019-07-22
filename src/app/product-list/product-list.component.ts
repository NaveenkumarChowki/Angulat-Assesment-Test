import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Naveen';
  numberArray:number[] = [2, 3, 4 ,5, 6, 7];

  // removeElement(elementId:number) {
  //   //console.log("Will remove element: ", indexOf(elementId));
  //   console.log(this.numberArray.indexOf(elementId))

  //   console.log(this.numberArray.splice(2,1));
  //   console.log(this.numberArray)

  //}
  deleteRow(id:number)
  {
    console.log("Got: ", id);
    // for(let i=0;i<=this.products.length;++i)
    // {
    //   if(this.products[i].id===id)
    //   {
    //     this.products.splice(i,1);
    //     break;
    //   }
    // }

    this.products = this.products.filter(element => {return element.id != id});
  }

  newCategory:string = "";
  newProductName:string = "";
  newPrice:string= "";


  getNextId() {
    let temp:number = this.products[0].id;
    // for(let i=1; i<this.products.length; i++) {
    //   if(this.products[i].id > temp) {
    //     temp = this.products[i].id;
    //   }
    // }
    this.products.forEach(element => {(element.id > temp) ? temp = element.id : "";});

    return temp+1;
  }

   addProduct()
   {
console.log(this.newCategory, this.newProductName, this.newPrice);
let newId = this.getNextId();
let newProduct:Products = {
  id: newId,
  category: this.newCategory,
  productname: this.newProductName, 
  price: this.newPrice
}

this.products.push(newProduct);

   }

   updateRow(id:number) {
    for(let i=0; i<this.products.length; i++) {
      if(this.products[i].id === id) {
        this.products[i].productname = this.products[i].productname + "-";
      }
    }
   }

  products:Products[]=[];
  constructor(private http: HttpClient, private servicess:ProductServiceService) { }

  ngOnInit() {
    this.servicess.getHttpData().subscribe(data=>{
      console.log(data);
      this.products=data;
    });
  //   this.servicess.getHttpData().subscribe(data=>{
  //     console.log(data);
  //     this.jsondata=data;
  //   });
  // }
  // getData(jsondata:any){
  //   console.log(jsondata);
  //   this.jsondata=jsondata;
    

  // }
    // getData(){

    // }

  }
  categoryClicked:string = "";
  setCategoryClicked(category:string) {
    this.categoryClicked = category;
  }

  isCategoryClicked(category:string) {
    // return (category === 'toys' && this.isToysCategoryClicked) || (category === 'kids' && this.isKidsCategoryClicked)
    return category === this.categoryClicked;
  }

  getUniqueCategories() {
    let categories = new Set();
    this.products.forEach(element => categories.add(element.category));
    return categories;
  }

  getProductsInCategories(category:string) {
   return this.products.filter( element => { return element.category === category });
  }
  // addProduct(id:number){
  //   this.addProduct;
  // }
  deleteProduct(id:number)
{
this.products = this.products.filter(element=>{return element.id!=id});
}
}
