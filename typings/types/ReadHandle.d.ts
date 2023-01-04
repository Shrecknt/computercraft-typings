declare interface ReadHandle {
	/**
	 * Read a line from the file.
	 * @param withTrailing Whether to include the newline characters with the returned string. Defaults to false.
	 * @returns The read line or nil if at the end of the file.
	 * @throws If the file has been closed.
	*/
	readLine: (this: void, withTrailing?: boolean) => string | null

	/**
	 * Read the remainder of the file.
	 * @returns The remaining contents of the file, or nil if we are at the end.
	 * @throws If the file has been closed.
	*/
	readAll: (this: void) => string | null

	/**
	 * Read a number of characters from this file.
	 * @param count The number of characters to read, defaulting to 1.
	 * @returns The read characters, or nil if at the of the file.
	 * @throws When trying to read a negative number of characters.
	 * @throws If the file has been closed.
	*/
	read: (this: void, count?: number) => string | null

	/**
	 * Close this file, freeing any resources it uses.
	 * 
	 * Once a file is closed it may no longer be read or written to.
	 * @throws If the file has already been closed.
	*/
	close: (this: void) => void
}
