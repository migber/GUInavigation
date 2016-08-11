import {provideRouter, Route} from '@angular/router';

import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ComputerListComponent} from './computer-list/computer-list.component';
import {ClusterListComponent} from './cluster-list/cluster-list.component';
import {ClusterDetailsComponent} from './cluster-details/cluster-details.component';
import {DataComponent} from './data/data.component';
import {HostDetailComponent} from './host-detail/host-detail.component';
import {VirtualMachineDetailComponent} from './virtual-machine-detail/virtual-machine-detail.component';

export const routes: Route[] = [
  { path: '',   component: WelcomePageComponent },
  { path: 'cluster', component: ClusterListComponent},
  { path: 'cluster/:clusterId', component: ClusterDetailsComponent },
  { path: 'host/:hostId', component: HostDetailComponent},
   { path: 'virtualMachine/:virtualMachineId', component: VirtualMachineDetailComponent}
  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];