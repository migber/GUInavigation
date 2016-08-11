import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {ComputerDetailsService} from '../services/ComputerDetails/ComputerDetailsService';

import {DummyComputerDetailsService} from '../services/ComputerDetails/DummyComputerDetailsFacadeService';
import {UsageDataServiceFactory, IUsageDataServiceFactory} from '../services/ComputerDetails/UsageDataServiceFactory';
import {IUsageData} from '../dtos/UsageData';
import {UsageData} from '../viewModels/ComputerDetailsViewModel';

@Component({
  moduleId: module.id,
  selector: 'app-data',
  templateUrl: 'data.component.html',
  styleUrls: ['data.component.css']
})
export class DataComponent implements OnInit {

  private _service: ComputerDetailsService;

  private _factory: IUsageDataServiceFactory;

  computerId: string;

  usageData$: Observable<IUsageData[]>;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: ComputerDetailsService, route: ActivatedRoute,
      router: Router, factory: UsageDataServiceFactory) {
    this._service = service;
    this._route = route;
    this._router = router;
    this._factory = factory;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.computerId = params['computerId'];

      this.retrieveUsageData();
      //this.retrieveComputer();
    });
  }

    private retrieveUsageData(): void {
      let service = this._factory.create(this.computerId);

      this.usageData$ = service.getAllItems();
  }

}
