import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgProgress, NgProgressComponent } from "@ngx-progressbar/core";

@Injectable()
export class LoadingBarService {
  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;
  private processesCount: number = 0;
  private processesCount$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor(
    public ngProgress: NgProgress
  ) {}

  public start() {
    this.processesCount++;
    this.triggerProcessCountChange(this.processesCount);
    this.ngProgress.start();
  }

  public complete() {
    this.processesCount--;
    this.triggerProcessCountChange(this.processesCount);
    if (this.processesCount === 0) {
      console.log('complite');
      this.ngProgress.complete();
    }
  }

  private triggerProcessCountChange(processesCount) {
    this.processesCount$.next(processesCount);
  }

  public getProcessesCountSteram() {
    return this.processesCount$;
  }

  public resetProcessesCountStream() {
    this.processesCount$.next(null);
  }
}

