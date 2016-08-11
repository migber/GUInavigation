export interface IVirtualMachine {  
    virtualMachineId: number;
    name: string;
    state: number;
    virtualProcessorCount: { value: number, unit: number};
    virtualMemory: number;
}