import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  name: any;
  description: any;
  img: any;

  constructor(private activatedroute:ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe((params)=> 
    {
      this.name = params['name'];
      this.img = params['img'];
      this.description = params['description'];
    });
    
  }

}
