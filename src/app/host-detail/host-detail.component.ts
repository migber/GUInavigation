import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {ComputerDetailsService} from '../services/ComputerDetails/ComputerDetailsService';
import {ClusterDetailsService} from '../services/ClusterDetailsService';
import {VirtualMachineService} from '../services/VirtualMachineService';
import {HostDetailsService} from '../services/HostDetailsService';
import {ComputerDetailsViewModel} from '../viewModels/ComputerDetailsViewModel';
import {HostDetail} from '../viewModels/ClusterDetailsViewModel';
import {IComputerDetails} from '../dtos/ComputerDetails';
import {ICluster} from '../dtos/ClusterDetails';
import {IHostDetail} from '../dtos/HostDetails';
import {IVirtualMachine} from '../dtos/VirtualMachine';

@Component({
  moduleId: module.id,
  selector: 'app-host-detail',
  templateUrl: 'host-detail.component.html',
  styleUrls: ['host-detail.component.css']
})
export class HostDetailComponent implements OnInit {

 private _service: ClusterDetailsService;
 private _service_host: HostDetailsService;
 private _service_vM: VirtualMachineService;
 hostId: string;
 cluster: ICluster;
 host: IHostDetail;
  

  private _router: Router;
  private _route: ActivatedRoute;
  hosts$: Observable<IHostDetail[]>;
  virtualMachine$: Observable<IVirtualMachine[]>;


  constructor(service: ClusterDetailsService,service2: HostDetailsService, service3: VirtualMachineService ,route: ActivatedRoute, router: Router) {
    this._service = service;
    this._route = route;
    this._router = router;
    this._service_host = service2;
    this._service_vM = service3;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.hostId = params['hostId'];
      this.retrieveCluster();
    });
  }
 private retrieveCluster(): void {
    this._service_host.getItemById(this.hostId).subscribe(host => {
       this.host = host;

       this.virtualMachine$ = this._service_vM.getItemsById(this.host.virtualMachineIds.map(String));
    } 
    );
  }
 onNavigate(virtualMachine: number): void {
    console.log(`Navigating to '${virtualMachine}'...`);

    this._router.navigateByUrl(`virtualMachine/${virtualMachine}`);
  }

}
