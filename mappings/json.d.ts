/** @noSelf **/
declare class json {
    static encode(toEncode: object): string;
    static decode(toDecode: string): object;
}