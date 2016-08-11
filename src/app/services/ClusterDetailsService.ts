import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from './ReadOnlyService';

import {ICluster} from '../dtos/ClusterDetails';

@Injectable()
export class ClusterDetailsService 
    extends ReadOnlyServiceBase<ICluster> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/clusters/");
        
    }

    
}