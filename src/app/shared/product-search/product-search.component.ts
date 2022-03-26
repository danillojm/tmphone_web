import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Utils } from '../../common/infra/utils';
import { Product } from '../../model/product-model';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'ngx-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit, OnChanges {

  products: Product[] = []
  searchForm: FormGroup

  constructor(private productService: ProductService, protected ref: NbDialogRef<ProductSearchComponent>, private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges): void {

  }
  public static readonly DEFAULT_SEARCH_DEBOUNCE_TIME = 500;
  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      search: ['']
    })

    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })

  }

  search(searchTerm: string) {



    this.searchForm.get('search').valueChanges.
      pipe(debounceTime(500))
      .pipe(distinctUntilChanged((v1: string, v2: string) => {
        if (v1 === v2) {
          return true
        }
        return false
      })).subscribe(searchTerm => {
        this.filterProduct(searchTerm);
      })

  }

  filterProduct(searchTerm: string) {
    console.log(searchTerm)
    let newArray: Product[] = []
    if (searchTerm && searchTerm.trim()) {
      const searchTermArray = Utils.unaccent(searchTerm.toLowerCase()).split(' ');
      this.products = this.products.filter(function (product) {
        return searchTermArray.every(function (element) {

          return Utils.unaccent(product.description.toLowerCase()).indexOf(element) > -1;

        });

      });
    } else {
      this.products = []
    }

  }

  click(product: Product): void {
    this.ref.close(product);
  }

  createSearchForm(): void { }


}
