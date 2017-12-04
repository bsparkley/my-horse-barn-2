import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horse-create',
  templateUrl: './horse-create.component.html',
  styleUrls: ['./horse-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorseCreateComponent implements OnInit {

  horse = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  }

  saveHorse() {
    this.http.post('/horse', this.horse)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/horses']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}