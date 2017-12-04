import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseDetailComponent } from '../horse-detail/horse-detail.component';


@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})


export class HorseComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  horses: any;

ngOnInit() {
  this.http.get('/horse').subscribe(data => {
    this.horses = data;
  });
}

}
