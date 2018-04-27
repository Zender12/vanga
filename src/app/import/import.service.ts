import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Option } from '../shared/option.model';
import { AppService } from '../app.service';

@Injectable()
export class ImportService {
   constructor(
    private apiService: ApiService,
    private appService: AppService
  ) {}


}
