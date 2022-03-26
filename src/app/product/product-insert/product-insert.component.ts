import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { FormValidation } from '../../@core/utils/FormValidation';
import { Category } from '../../model/category-model';
import { Product } from '../../model/product-model';
import { CategoryService } from '../category.service';

import { ProductService } from '../product.service';

@Component({
  selector: 'ngx-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.scss']
})
export class ProductInsertComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private productService: ProductService,
    private toastrService: NbToastrService, private categoryService: CategoryService) {


  }

  positions = NbGlobalPhysicalPosition;
  ngOnInit(): void {
    this.createProductForm(new Product());

    this.categoryService.getAll().subscribe(categories => {

      this.categories = categories;

    })
  }

  createProductForm(product: Product) {


    this.productForm = this.formBuilder.group({
      code: [product.code, [Validators.required, FormValidation.isEmpty]],
      description: [product.description, [Validators.required, FormValidation.isEmpty]],
      category: [product.category, [Validators.required]],
      brand: [product.brand, [Validators.required, FormValidation.isEmpty]],
      salePrice: [product.salePrice],
      observation: [product.observation]
    })
  }


  insert() {


    let product = new Product();
    product.code = this.productForm.get('code').value
    product.category_id = this.productForm.get('category').value.id
    product.brand = this.productForm.get('brand').value
    product.observation = this.productForm.get('observation').value
    product.description = this.productForm.get('description').value
    product.salePrice = this.productForm.get('salePrice').value

    this.productService.insert(product).subscribe(() => {


      this.createProductForm(new Product())

      this.showToast('success')

    })


  }

  showToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Produto adicionado com sucesso", { status });

  }

  get formControl() {

    return this.productForm.controls
  }

}
