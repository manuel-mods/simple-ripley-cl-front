import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ProductService } from './product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  isLoadingDetail = false;
  products: any | undefined;
  scroll$: any;
  defaultImage = 'https://static.ripley.cl/images/loading.gif';
  closeResult: string;
  product: any;
  productDetail: any;
  constructor(private productService: ProductService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.productService
      .getAllProducts()  
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: any) => {
        data.map((product: any) => product.load = false);
        this.products = data;
      });
  }

  getSingleDetail(product:any) {
    this.isLoadingDetail = true;
    this.productService
    .getProduct({ sku: product.sku })  
    .pipe(
      finalize(() => {
        this.isLoadingDetail = false;
      })
    )
    .subscribe((data: any) => {
      this.productDetail = data.body;
    });
  }

  changeLoad(event: any, product: any) {
    console.log(event, product);
    product.load = true;
  }

  open(content:any, product:any) {
    this.product = product;
    this.getSingleDetail(this.product);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
