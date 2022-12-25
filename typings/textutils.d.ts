declare let textutils: {
	/**
	 * Slowly writes string text at current cursor position, character-by-character.
	 * 
	 * Like _G.write, this does not insert a newline at the end.
	 * @param sText The the text to write to the screen
	 * @param nRate The number of characters to write each second, Defaults to 20.
	*/
	slowWrite: (this: void, sText: string, nRate?: number) => void

	/**
	 * Slowly prints string text at current cursor position, character-by-character.
	 * 
	 * Like print, this inserts a newline after printing.
	 * @param sText The the text to write to the screen
	 * @param nRate The number of characters to write each second, Defaults to 20.
	*/
	slowPrint: (this: void, sText: string, nRate?: number) => void

	/**
	 * Takes input time and formats it in a more readable format such as 6:30 PM.
	 * @param nTime The time to format, as provided by os.time.
	 * @param bTwentyFourHour Whether to format this as a 24-hour clock (18:30) rather than a 12-hour one (6:30 AM)
	 * @returns The formatted time
	*/
	formatTime: (this: void, nTime: number, bTwentyFourHour?: boolean) => string

	/**
	 * Prints a given string to the display.
	 * 
	 * If the action can be completed without scrolling, it acts much the same as print; otherwise, it will throw up a "Press any key to continue" prompt at the bottom of the display. Each press will cause it to scroll down and write a single line more before prompting again, if need be.
	 * @param _sText The text to print to the screen.
	 * @param _nFreeLines The number of lines which will be automatically scrolled before the first prompt appears (meaning _nFreeLines + 1 lines will be printed). This can be set to the terminal's height - 2 to always try to fill the screen. Defaults to 0, meaning only one line is displayed before prompting.
	 * @returns The number of lines printed.
	*/
	pagedPrint: (this: void, _sText: string, _nFreeLines?: number) => number

	/**
	 * Prints tables in a structured form.
	 * 
	 * This accepts multiple arguments, either a table or a number. When encountering a table, this will be treated as a table row, with each column width being auto-adjusted.
	 * 
	 * When encountering a number, this sets the text color of the subsequent rows to it.
	 * @param args The rows and text colors to display.
	*/
	tabulate: (this: void, ...args: ( string[] | number )[]) => void

	/**
	 * Prints tables in a structured form, stopping and prompting for input should the result not fit on the terminal.
	 * 
	 * This functions identically to textutils.tabulate, but will prompt for user input should the whole output not fit on the display.
	 * @param args The rows and text colors to display.
	*/
	pagedTabulate: (this: void, ...args: ( string[] | number )[]) => void

	/**
	 * A table representing an empty JSON array, in order to distinguish it from an empty JSON object.
	 * 
	 * The contents of this table should not be modified.
	*/
	empty_json_array: any[]

	/**
	 * A table representing the JSON null value.
	 * 
	 * The contents of this table should not be modified.
	*/
	json_null: null

	/**
	 * Convert a Lua object into a textual representation, suitable for saving in a file or pretty-printing.
	 * @param t The object to serialise
	 * @returns The serialised representation
	 * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
	*/
	serialize: (this: void, t: any) => string

	/**
	 * Convert a Lua object into a textual representation, suitable for saving in a file or pretty-printing.
	 * @param t The object to serialise
	 * @returns The serialised representation
	 * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
	*/
	serialise: (this: void, t: any) => string

	/**
	 * Converts a serialised string back into a reassembled Lua object.
	 * 
	 * This is mainly used together with textutils.serialize.
	 * @param s The serialised string to deserialise.
	 * @returns The deserialised object OR nil if the object could not be deserialised.
	*/
	unserialize: (this: void, s: string) => string | null

	/**
	 * Converts a serialised string back into a reassembled Lua object.
	 * 
	 * This is mainly used together with textutils.serialize.
	 * @param s The serialised string to deserialise.
	 * @returns The deserialised object OR nil if the object could not be deserialised.
	*/
	unserialise: (this: void, s: string) => string | null

	/**
	 * Returns a JSON representation of the given data.
	 * 
	 * This function attempts to guess whether a table is a JSON array or object. However, empty tables are assumed to be empty objects - use textutils.empty_json_array to mark an empty array.
	 * 
	 * This is largely intended for interacting with various functions from the commands API, though may also be used in making http requests.
	 * @param t The value to serialise. Like textutils.serialise, this should not contain recursive tables or functions.
	 * @param bNBTStyle Whether to produce NBT-style JSON (non-quoted keys) instead of standard JSON.
	 * @returns The JSON representation of the input.
	 * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
	*/
	serializeJSON: (this: void, t: any, bNBTStyle?: boolean) => string

	/**
	 * Returns a JSON representation of the given data.
	 * 
	 * This function attempts to guess whether a table is a JSON array or object. However, empty tables are assumed to be empty objects - use textutils.empty_json_array to mark an empty array.
	 * 
	 * This is largely intended for interacting with various functions from the commands API, though may also be used in making http requests.
	 * @param t The value to serialise. Like textutils.serialise, this should not contain recursive tables or functions.
	 * @param bNBTStyle Whether to produce NBT-style JSON (non-quoted keys) instead of standard JSON.
	 * @returns The JSON representation of the input.
	 * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
	*/
	serialiseJSON: (this: void, t: any, bNBTStyle?: boolean) => string

	/**
	 * Converts a serialised JSON string back into a reassembled Lua object.
	 * 
	 * This may be used with textutils.serializeJSON, or when communicating with command blocks or web APIs.
	 * @param s The serialised string to deserialise.
	 * @param options Options which control how this JSON object is parsed.
	 * @param options nbt_style: When true, this will accept stringified NBT strings, as produced by many commands.
	 * @param options parse_null: When true, null will be parsed as json_null, rather than nil.
	 * @returns The deserialised object
	 * @returns nil If the object could not be deserialised.
	 * @returns string A message describing why the JSON string is invalid.
	*/
	unserializeJSON: (this: void, s: string, options?: { nbt_style?: boolean, parse_null?: boolean } ) => string

	/**
	 * Converts a serialised JSON string back into a reassembled Lua object.
	 * 
	 * This may be used with textutils.serializeJSON, or when communicating with command blocks or web APIs.
	 * @param s The serialised string to deserialise.
	 * @param options Options which control how this JSON object is parsed.
	 * @param options nbt_style: When true, this will accept stringified NBT strings, as produced by many commands.
	 * @param options parse_null: When true, null will be parsed as json_null, rather than nil.
	 * @returns The deserialised object
	 * @returns nil If the object could not be deserialised.
	 * @returns string A message describing why the JSON string is invalid.
	*/
	unserialiseJSON: (this: void, s: string, options?: { nbt_style?: boolean, parse_null?: boolean } ) => any

	/**
	 * Replaces certain characters in a string to make it safe for use in URLs or POST data.
	 * @param str The string to encode
	 * @returns The encoded string.
	*/
	urlEncode: (this: void, str: string) => string

	/**
	 * Provides a list of possible completions for a partial Lua expression.
	 * 
	 * If the completed element is a table, suggestions will have . appended to them. Similarly, functions have ( appended to them.
	 * @param sSearchText The partial expression to complete, such as a variable name or table index.
	 * @param tSearchTable The table to find variables in, defaulting to the global environment (_G). The function also searches the "parent" environment via the __index metatable field.
	 * @returns The (possibly empty) list of completions.
	*/
	complete: (this: void, sSearchText: any) => string[]
}