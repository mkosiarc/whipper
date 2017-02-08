import { Component, OnInit } from '@angular/core';
import { WhipperRestService } from './whipper-rest.service';
import { Observer } from 'rxjs/Observer';

import { Job } from './job';

import 'rxjs/Rx';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  jobsSelection: boolean[] = [];

  constructor(private wrs: WhipperRestService) {}

  getJobs(): void{
    console.log("getting jobs");
    //let o:Observer<Job[]> = new Observer<Job[]>(() => {},() => {},() => {});
    this.wrs.getJobs(false).map(
      j => {
        console.log("result", j);
        this.jobs = j;
        this.jobsSelection = new Array(this.jobs.length);
        this.jobsSelection.fill(false);
      },
      e => console.log(e),
      () => console.log("done")
    );
  }

  ngOnInit() {
    console.log("init");
    this.getJobs();
  }

  jobClicked(i: number): void{
    this.jobsSelection[i] = !this.jobsSelection[i];
  }

  isSelected(i: number): boolean{
    return this.jobsSelection[i];
  }
}
