/**
 * Monitor peripheral
 */
declare interface Monitor extends Table {
    write: (this: void, text: string) => void;
    clearLine: (this: void) => void;
    setCursorPos: (this: void, x: number, y: number) => void;
}
