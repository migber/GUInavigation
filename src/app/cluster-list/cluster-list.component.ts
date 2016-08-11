import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {ClusterDetailsService} from '../services/ClusterDetailsService';
import {Cluster} from '../viewModels/ClusterDetailsViewModel';
import {ICluster} from '../dtos/ClusterDetails';

@Component({
  moduleId: module.id,
  selector: 'app-cluster-list',
  templateUrl: 'cluster-list.component.html',
  styleUrls: ['cluster-list.component.css']
})
export class ClusterListComponent implements OnInit {


 private _service: ClusterDetailsService;
 private _router: Router;
 cluster$: Observable<ICluster[]>;

  constructor(service: ClusterDetailsService, router: Router) {
    this._service = service;
    this._router = router;
    this.cluster$ = service.getAllItems();
   }
   
  ngOnInit() {
  }

   onNavigate(cluster: Cluster): void {
    console.log(`Navigating to '${cluster.clusterId}'...`);

    this._router.navigateByUrl(`cluster/${cluster.clusterId}`);
  }
}
