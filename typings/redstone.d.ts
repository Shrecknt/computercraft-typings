declare let redstone: {
    getSides(this: void): Side[];
    setOutput(this: void, side: Side, on: boolean): void;
    getOutput(this: void, side: Side): boolean;
    getInput(this: void, side: Side): boolean;
    setAnalogOutput(this: void, side: Side, value: number): void;
    setAnalogueOutput(this: void, side: Side, value: number): void;
    getAnalogOutput(this: void, side: Side): number;
    getAnalogueOutput(this: void, side: Side): number;
    getAnalogInput(this: void, side: Side): number;
    getAnalogueInput(this: void, side: Side): number;
    setBundledOutput(this: void, side: Side, output: number): void;
    getBundledOutput(this: void, side: Side): number;
    getBundledInput(this: void, side: Side): number;
    testBundledInput(this: void, side: Side, mask: number): boolean;
};