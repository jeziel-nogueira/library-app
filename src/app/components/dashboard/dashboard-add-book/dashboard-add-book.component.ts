import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HTTPClientService } from '../../../services/login.service';
import { Book } from '../../../models/book-model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-dashboard-add-book',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    HTTPClientService
  ],
  templateUrl: './dashboard-add-book.component.html',
  styleUrl: './dashboard-add-book.component.scss'
})
export class DashboardAddBookComponent {

  bookForm!: FormGroup;
  isSubmitting:boolean = false;
  successMessage:string = ''

  constructor(private fb:FormBuilder, private httpService: HTTPClientService, private toastService: ToastrService){
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      author: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      genre: [''],
      isbn: [''],
      status: ['AVAILABLE', Validators.required],
      publisher: [''],
      tags: [''],
      coverUrl: ['']
    });
  }
  
  submitBook() {
    if (this.bookForm.invalid) return;

    this.isSubmitting = true;
    const book: Book = this.bookForm.value;

    this.httpService.addBook(book).subscribe({
      next: () => {
        this.successMessage = 'Livro cadastrado com sucesso!';
        this.bookForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        alert('Erro ao cadastrar livro!');
        this.isSubmitting = false;
      }
    });
  }  
}
