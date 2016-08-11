import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/from';

import {IReadOnlyService} from '../ReadOnlyService';
import {ComputerDetailsViewModel, UsageData} from '../../viewModels/ComputerDetailsViewModel';

export class DummyComputerDetailsService {
    
    private _computers: ComputerDetailsViewModel[];

    constructor() {
        let computer1 = new ComputerDetailsViewModel();
        let computer1UsageData = new UsageData();

        computer1UsageData.availableDiskSpace = 10;
        computer1UsageData.cpuUsage = 20;
        computer1UsageData.memoryUsage = 30;
        computer1UsageData.timeStamp = new Date;
        
        let computer1UsageData2 = new UsageData();

        computer1UsageData2.availableDiskSpace = 10;
        computer1UsageData2.cpuUsage = 20;
        computer1UsageData2.memoryUsage = 30;
        computer1UsageData2.timeStamp = new Date;
        
        computer1.name = "dummy1";
        computer1.ipAddress = "127.0.0.1";
        computer1.memory = 9000;
        computer1.user = "me";
        computer1.usageData= [];
        computer1.usageData.push(computer1UsageData);
        computer1.usageData.push(computer1UsageData2);
        
        let computer2 = new ComputerDetailsViewModel();
        let computer2UsageData = new UsageData();

        computer2UsageData.availableDiskSpace = 10;
        computer2UsageData.cpuUsage = 20;
        computer2UsageData.memoryUsage = 300;
        computer2UsageData.timeStamp = new Date;

        computer2.name = "dummy2";
        computer2.ipAddress = "127.0.0.1";
        computer2.memory = 9000;
        computer2.user = "another";
        computer2.usageData= [];
        computer2.usageData.push(computer1UsageData);

        this._computers = [computer1, computer2];        
    }

    // getAllItems(): Observable<ComputerDetailsViewModel[]> {
    //     return Observable.from([this._computers]);
    // }

    // getItemById(computerName: string): Observable<ComputerDetailsViewModel> {
    //     let match = this._computers.filter(c => c.name == computerName);

    //     return Observable.from(match);
    // }

    // getUsageDataById(computerName: string): Observable<UsageData[]> {
    //     let match:ComputerDetailsViewModel[] = this._computers.filter(c => c.name == computerName);
        
    //     return Observable.from(match.map(c=> c.usageData));
    // }
}