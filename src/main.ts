import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

import {AppComponent, environment} from './app/';

import {ComputerDetailsService} from './app/services/ComputerDetails/ComputerDetailsService';
import {ClusterDetailsService} from './app/services/ClusterDetailsService';
import {HostDetailsService} from './app/services/HostDetailsService';
import {VirtualMachineService} from './app/services/VirtualMachineService';
import {UsageDataServiceFactory} from './app/services/ComputerDetails/UsageDataServiceFactory';


import {APP_ROUTER_PROVIDERS} from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
  [
    HTTP_PROVIDERS, 
    APP_ROUTER_PROVIDERS,
    ComputerDetailsService,
    ClusterDetailsService,
    UsageDataServiceFactory,
    VirtualMachineService,
    HostDetailsService,
    disableDeprecatedForms(), 
    provideForms()
    ]);