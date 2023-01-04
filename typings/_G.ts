// Typings of https://tweaked.cc/module/_G.html

/**
 * Pauses execution for the specified number of seconds.
 * @param time The number of seconds to sleep for, rounded up to the nearest multiple of 0.05.
 */
declare function sleep(time: number): void;

/**
 * Writes a line of text to the screen without a newline at the end, wrapping text if necessary.
 * @param text The text to write to the string
 * @returns The number of lines written
 */
declare function write(text: string): number;

/**
 * Prints the specified values to the screen separated by spaces, wrapping if necessary. After printing, the cursor is moved to the next line.
 * @param text The values to print on the screen
 * @returns The number of lines written
 */
declare function print(...text: any[]): number;

/**
 * Prints the specified values to the screen in red, separated by spaces, wrapping if necessary. After printing, the cursor is moved to the next line.
 * @param text The values to print on the screen
 */
declare function printError(...text: any[]): void;

/**
 * Reads user input from the terminal. This automatically handles arrow keys, pasting, character replacement, history scrollback, auto-completion, and default values.
 * @param replaceChar A character to replace each typed character with. This can be used for hiding passwords, for example.
 * @param history A table holding history items that can be scrolled back to with the up/down arrow keys. The oldest item is at index 1, while the newest item is at the highest index.
 * @param completeFn A function to be used for completion. This function should take the partial text typed so far, and returns a list of possible completion options.
 * @param _default Default text which should already be entered into the prompt.
 * @returns The text typed in.
 */
declare function read(replaceChar?: string, history?: Table, completeFn?: (partial: string) => (string[] | null), _default?: string): string;

/**
 * Stores the current ComputerCraft and Minecraft versions.
 * Outside of Minecraft (for instance, in an emulator) _HOST will contain the emulator's version instead.
 */
declare const _HOST: string;

/**
 * The default computer settings as defined in the ComputerCraft configuration.
 * This is a comma-separated list of settings pairs defined by the mod configuration or server owner. By default, it is empty.
 */
declare const _CC_DEFAULT_SETTINGS: string;
