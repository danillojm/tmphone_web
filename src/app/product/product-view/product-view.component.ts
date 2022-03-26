import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';
import { FormValidation } from '../../@core/utils/FormValidation';
import { Category } from '../../model/category-model';
import { Product } from '../../model/product-model';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'ngx-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  productForm: FormGroup;
  categories: Category[] = [];
  product: Product
  loading = false
  constructor(private formBuilder: FormBuilder, private productService: ProductService,
    private dialogService: NbDialogService, private toastrService: NbToastrService,
    private activatedRoute: ActivatedRoute, private router: Router) {


  }
  ngOnInit(): void {
    this.createProductForm(new Product())
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id)

      this.productService.getById(params.id).subscribe(product => {
        this.product = product
        this.createProductForm(this.product)
      })

    })
  }

  createProductForm(product: Product) {

    console.log(product)
    this.productForm = this.formBuilder.group({

      salePrice: [product.salePrice],
      observation: [product.observation]
    })

    this.productForm.disable()
  }

  update() {
    this.productForm.enable()
  }


  save() {

    this.product.salePrice = this.productForm.get('salePrice').value
    this.product.observation = this.productForm.get('observation').value


    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Comfirmar',
        msg: "Deseja confirmar as alterções?",
      },

    }).onClose.subscribe((confirm) => {
      if (confirm) {
        this.loading = true

        setTimeout(() => {
          this.productService.update(this.product).subscribe(() => {

            this.showSuccessToast('success');
            this.productForm.disable()
            error => {
              console.log(error)
            }
          })
        }, 1000)
        this.loading = false
      }
    });
  }


  delete() {

    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Comfirmar',
        msg: "Deseja confirmar as alterções?",
      },

    }).onClose.subscribe(() => {


      this.loading = true;

      this.productService.delete(this.product.id).subscribe(() => {
        this.loading = false;
        this.showSuccessToast('success');
        this.router.navigate(['/product/list']);
      })

    })


  }

  showSuccessToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Compra atualizada com sucesso", { status });
  }

  showDangerToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Erro ao atualizar", { status });
  }



}
