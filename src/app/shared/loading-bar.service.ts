import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgProgressComponent } from "@ngx-progressbar/core";

@Injectable()
export class LoadingBarService {
  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;
  private processesCount: number = 0;
  private processesCount$: BehaviorSubject<number> = new BehaviorSubject(null);

  public start() {
    this.processesCount++;
    this.triggerProcessCountChange(this.processesCount);
    this.progressBar.start();
  }

  public complete() {
    this.processesCount--;
    this.triggerProcessCountChange(this.processesCount);
    if (this.processesCount === 0) {
      this.progressBar.complete();
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

