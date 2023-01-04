/**
 * Monitor peripheral
 */
declare class Monitor implements Table {
    write: (this: void, text: string) => void;
    clearLine: (this: void) => void;
    setCursorPos: (this: void, x: number, y: number) => void;
}