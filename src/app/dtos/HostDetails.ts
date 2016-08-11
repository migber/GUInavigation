export interface IHostDetail{
    hostId: number;
    state: number;
    processorCount: number;
    physicalMemory: { value: number, unit: number};
    virtualMachineIds:number[];
}