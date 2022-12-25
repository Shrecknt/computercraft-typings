// Based on old documentation @ https://computercraft.info/wiki/Term_(API)
// Does not currently implement methods exclusive to monitors or windows

declare let term: {
	write: (this: void, text: string) => void;
	blit: (this: void, text: string, colors: string, background: string) => void;
	clear: (this: void) => void;
	clearLine: (this: void) => void;
	getCursorPos: (this: void) => LuaMultiReturn<[x: number, y: number]>;
	setCursorPos: (this: void, x: number, y: number) => void;
	setCursorBlink: (this: void, bool: boolean) => void;
	isColor: (this: void) => boolean;
	getSize: (this: void) => LuaMultiReturn<[x: number, y: number]>;
	scroll: (this: void, n: number) => void;
	redirect: (this: void, target: any) => Table;
	current: (this: void) => Table;
	native: (this: void) => Table;
	setTextColor: (this: void, color: number) => void;
	getTextColor: (this: void) => number;
	setBackgroundColor: (this: void, color: number) => void;
	getBackgroundColor: (this: void) => number;
}