declare let WriteHandle: {
	/**
	 * Write a string of characters to the file.
	 * @param value The value to write to the file.
	 * @throws If the file has been closed.
	*/
	write: (this: void, value: string) => void

	/**
	 * Write a string of characters to the file, follwing them with a new line character.
	 * @param value  The value to write to the file.
	 * @throws If the file has been closed.
	*/
	writeLine: (this: void, value: string) => void

	/**
	 * Save the current file without closing it.
	 * @throws If the file has been closed.
	*/
	flush: (this: void, value: string) => void

	/**
	 * Close this file, freeing any resources it uses.
	 * 
	 * Once a file is closed it may no longer be read or written to.
	 * @throws If the file has already been closed.
	*/
	close: (this: void) => void
}
