import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {ComputerDetailsService} from '../services/ComputerDetails/ComputerDetailsService';
import {ClusterDetailsService} from '../services/ClusterDetailsService';
import {HostDetailsService} from '../services/HostDetailsService';
import {ComputerDetailsViewModel} from '../viewModels/ComputerDetailsViewModel';
import {HostDetail} from '../viewModels/ClusterDetailsViewModel';
import {IComputerDetails} from '../dtos/ComputerDetails';
import {ICluster} from '../dtos/ClusterDetails';
import {IHostDetail} from '../dtos/HostDetails';

@Component({
  moduleId: module.id,
  selector: 'app-cluster-details',
  templateUrl: 'cluster-details.component.html',
  styleUrls: ['cluster-details.component.css']
})
export class ClusterDetailsComponent implements OnInit {

   private _service: ClusterDetailsService;
   private _service_host: HostDetailsService;
   clusterId: string;

  cluster: ICluster;
  

  private _router: Router;
  private _route: ActivatedRoute;
  hosts$: Observable<IHostDetail[]>;

  constructor(service: ClusterDetailsService,service2: HostDetailsService, route: ActivatedRoute, router: Router) {
    this._service = service;
    this._route = route;
    this._router = router;
    this._service_host = service2;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clusterId = params['clusterId'];

      this.retrieveCluster();
    });
  }
 private retrieveCluster(): void {
    this._service.getItemById(this.clusterId).subscribe(cluster => {
       this.cluster = cluster;
       this.hosts$ = this._service_host.getItemsById(this.cluster.hostIds.map(String));
    } 
    );
  }

    onNavigate(host: HostDetail): void {
    console.log(`Navigating to '${host.hostId}'...`);

    this._router.navigateByUrl(`host/${host.hostId}`);
  }
}
