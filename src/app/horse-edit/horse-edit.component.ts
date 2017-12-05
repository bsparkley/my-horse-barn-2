import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-horse-edit',
  templateUrl: './horse-edit.component.html',
  styleUrls: ['./horse-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorseEditComponent implements OnInit {

  horse = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getHorse(this.route.snapshot.params['id']);
  }

  getHorse(id) {
    this.http.get('/horse/'+id).subscribe(data => {
      this.horse = data;
    });
  }

  updateHorse(id, horse) {
    this.http.put('/horse/'+ id, this.horse)
      .subscribe(res => {
          let id = res['_id'];
          this.goBack(); 
        }, (err) => {
          console.log(err);
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

}