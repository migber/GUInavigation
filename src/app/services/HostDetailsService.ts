import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from './ReadOnlyService';

import {IHostDetail} from '../dtos/HostDetails';

@Injectable()
export class HostDetailsService 
    extends ReadOnlyServiceBase<IHostDetail> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/hosts/");
        
    }

    
}