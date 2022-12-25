// Based on old documentation @ https://computercraft.info/wiki/Term_(API)
// Does not currently implement methods exclusive to monitors or windows

declare let term: {
	write: (text: string) => void;
	blit: (text: string, colors: string, background: string) => void;
	clear: () => void;
	clearLine: () => void;
	getCursorPos: () => LuaMultiReturn<[x: number, y: number]>;
	setCursorPos: (x: number, y: number) => void;
	setCursorBlink: (bool: boolean) => void;
	isColor: () => boolean;
	getSize: () => LuaMultiReturn<[x: number, y: number]>;
	scroll: (n: number) => void;
	redirect: (target: any) => Table;
	current: () => Table;
	native: () => Table;
	setTextColor: (color: number) => void;
	getTextColor: () => number;
	setBackgroundColor: (color: number) => void;
	getBackgroundColor: () => number;
}