import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseComponent } from '../horse/horse.component';

@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorseDetailComponent implements OnInit {

  horse = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
    route.params.subscribe(val => {
      this.getHorseDetail(this.route.snapshot.params['id']);
    });
  }

  ngOnInit() {
    this.getHorseDetail(this.route.snapshot.params['id']);
  }

  getHorseDetail(id) {
    this.http.get('/horse/' + id).subscribe(data => {
      this.horse = data;
    });
  }

  deleteHorse(id) {
    this.http.delete('/horse/' + id, this.horse)
      .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      }
      );
  }



}