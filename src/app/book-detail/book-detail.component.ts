import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
    route.params.subscribe(val => {
      this.getBookDetail(this.route.snapshot.params['id']);
    });
  }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/book/' + id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/book/' + id, this.book)
      .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      }
      );
  }



}