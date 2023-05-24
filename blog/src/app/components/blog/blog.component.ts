import {Observable} from 'rxjs';
import {Component, Input, OnInit} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import DataModel from "../../models/data-model";

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input() filterText: string = '';
  public items$!: DataModel[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.dataService.getAll().subscribe((data) => {
      this.items$ = data;
      console.log(data);
    });
  }
}
