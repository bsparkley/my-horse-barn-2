import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horse-edit',
  templateUrl: './horse-edit.component.html',
  styleUrls: ['./horse-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorseEditComponent implements OnInit {

  horse = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHorse(this.route.snapshot.params['id']);
  }

  getHorse(id) {
    this.http.get('/horse/'+id).subscribe(data => {
      this.horse = data;
    });
  }

  updateHorse(id, data) {
    this.http.put('/horse/'+ id, this.horse)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/horses']);  
        }, (err) => {
          console.log(err);
        }
      );
  }

}