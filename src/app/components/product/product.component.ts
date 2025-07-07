import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ToastModule
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent implements OnInit {
  
  products: Product[] = [];
  product: Product = { 
    title: '', 
    description: '', 
    price: 0, 
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: ''
  };
  productDialog: boolean = false;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private messageService: MessageService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando productos:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los productos' });
        this.loading = false;
      }
    });
  }

  openNew(): void {
    this.product = { 
      title: '', 
      description: '', 
      price: 0, 
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: ''
    };
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: Product): void {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product): void {
    if (product.id) {
      this.productService.deleteProduct(product.id).subscribe({
        next: () => {
          this.loadProducts();
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto eliminado' });
        },
        error: (error) => {
          console.error('Error eliminando producto:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar el producto' });
        }
      });
    }
  }

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct(): void {
    this.submitted = true;
    
    if (this.product.title?.trim()) {
      if (this.product.id) {
        this.productService.updateProduct(this.product.id, this.product).subscribe({
          next: () => {
            this.loadProducts();
            this.productDialog = false;
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto actualizado' });
          },
          error: (error) => {
            console.error('Error actualizando producto:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el producto' });
          }
        });
      } else {
        this.productService.createProduct(this.product).subscribe({
          next: () => {
            this.loadProducts();
            this.productDialog = false;
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto creado' });
          },
          error: (error) => {
            console.error('Error creando producto:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear el producto' });
          }
        });
      }
    }
  }
}