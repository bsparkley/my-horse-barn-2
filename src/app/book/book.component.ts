import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  books: any;

ngOnInit() {
  this.http.get('/book').subscribe(data => {
    this.books = data;
  });
}

}
