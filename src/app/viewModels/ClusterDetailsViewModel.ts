

export class UsageReport {    
    cpuUsage: number;
    memoryUsage: number;
    timeStamp: Date;
}
export class VirtualMachine {  
    virtualMachineId: number;
    name: string;
    state: number;
    virtualProcesorCount: number;
    virtualMemory: number;
    usageReport: UsageReport[];
}

export class HostDetail{

    hostId: number;
    state: number;
    procesorCount: number;
    physicalMemory: number;
    virtualMachine: VirtualMachine[];
}

export class Cluster{
   clusterId: number;
   name: string;
   HostDetail: HostDetail[];

}
