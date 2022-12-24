declare let ReadHandle: {
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

// TODO: add BinaryReadHandle

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

declare let fs: {
	/**
	 * Returns true if a path is mounted to the parent filesystem.
	 * 
	 * The root filesystem "/" is considered a mount, along with disk folders and the rom folder. Other programs (such as network shares) can exstend this to make other mount types by correctly assigning their return value for getDrive.
	 * @param path The path to check.
	 * @returns If the path is mounted, rather than a normal file/folder.
	 * @throws If the path does not exist.
	*/
	isDriveRoot: (this: void, path: string) => void

	/**
	 * Provides completion for a file or directory name, suitable for use with _G.read.
	 * 
	 * When a directory is a possible candidate for completion, two entries are included - one with a trailing slash (indicating that entries within this directory exist) and one without it (meaning this entry is an immediate completion candidate). include_dirs can be set to false to only include those with a trailing slash.
	 * @param path The path to complete.
	 * @param location The location where paths are resolved from.
	 * @param include_files When false, only directories will be included in the returned list.
	 * @param include_dirs When false, "raw" directories will not be included in the returned list.
	 * @returns A list of possible completion candidates.
	*/
	complete: (this: void, path: string, location: string, include_files?: boolean, include_dirs?: boolean) => string[]

	/**
	 * Returns a list of files in a directory.
	 * @param path The path to list.
	 * @returns A table with a list of files in the directory.
	 * @throws If the path doesn't exist.
	*/
	list: (this: void, path: string) => string[]

	/**
	 * Combines several parts of a path into one full path, adding separators as needed.
	 * @param path string The first part of the path. For example, a parent directory path.
	 * @param additional Additional parts of the path to combine.
	 * @returns The new path, with separators added between parts as needed.
	 * @throws On argument errors.
	*/
	combine: (this: void, path: string, ...additional: string[]) => string

	/**
	 * Returns the file name portion of a path.
	 * @param path The path to get the name from.
	 * @returns The final part of the path (the file name).
	*/
	getName: (this: void, path: string) => string

	/**
	 * Returns the parent directory portion of a path.
	 * @param path The path to get the directory from.
	 * @returns The path with the final part removed (the parent directory).
	*/
	getDir: (this: void, path: string) => string

	/**
	 * Returns the size of the specified file.
	 * @param path The file to get the file size of.
	 * @returns The size of the file, in bytes.
	 * @throws If the path doesn't exist.
	*/
	getSize: (this: void, path: string) => number

	/**
	 * Returns the size of the specified file.
	 * @param path The path to check the existence of.
	 * @returns Whether the path exists.
	*/
	exists: (this: void, path: string) => boolean

	/**
	 * Returns whether the specified path is a directory.
	 * @param path The path to check.
	 * @returns Whether the path is a directory.
	*/
	isDir: (this: void, path: string) => boolean

	/**
	 * Returns whether a path is read-only.
	 * @param path The path to check.
	 * @returns Whether the path cannot be written to.
	*/
	isReadOnly: (this: void, path: string) => boolean

	/**
	 * Creates a directory, and any missing parents, at the specified path.
	 * @param path The path to the directory to create.
	 * @throws If the directory couldn't be created.
	*/
	makeDir: (this: void, path: string) => boolean

	/**
	 * Moves a file or directory from one path to another.
	 * 
	 * Any parent directories are created as needed.
	 * @param path The current file or directory to move from.
	 * @param dest The destination path for the file or directory.
	 * @throws If the file or directory couldn't be moved.
	*/
	move: (this: void, path: string, dest: string) => void

	/**
	 * Copies a file or directory to a new path.
	 * 
	 * Any parent directories are created as needed.
	 * @param path The file or directory to copy.
	 * @param dest The path to the destination file or directory.
	 * @throws If the file or directory couldn't be copied.
	*/
	copy: (this: void, path: string, dest: string) => void

	/**
	 * Deletes a file or directory.
	 * 
	 * If the path points to a directory, all of the enclosed files and subdirectories are also deleted.
	 * @param path The path to the file or directory to delete.
	 * @throws If the file or directory couldn't be deleted.
	*/
	delete: (this: void, path: string) => void

	/**
	 * Opens a file for reading or writing at a path.
	 * 
	 * The mode parameter can be r to read, w to write (deleting all contents), or a to append (keeping contents). If b is added to the end, the file will be opened in binary mode; otherwise, it's opened in text mode.
	 * @param path The path to the file to open.
	 * @param mode The mode to open the file with.
	 * @throws If an invalid mode was specified.
	 * @returns A file handle object for the file.
	 * @returns A message explaining why the file cannot be opened.
	 * @tuplereturn
	*/
	open: <RW extends 'r' | 'w'>(this: void, path: string, mode: RW) => RW extends 'r' ? [ typeof ReadHandle ] : [ typeof WriteHandle, null ] | [ null, string | null ] // TODO: make this its own thing



	/**
	 * Returns the name of the mount that the specified path is located on.
	 * @param path The path to get the drive of.
	 * @returns The name of the drive that the file is on; e.g. hdd for local files, or rom for ROM files.
	 * @throws If the path doesn't exist.
	*/
	getDrive: (this: void, path: string) => string

	/**
	 * Returns the amount of free space available on the drive the path is located on.
	 * @param path The path to check the free space for.
	 * @returns The amount of free space available, in bytes, or "unlimited".
	 * @throws If the path doesn't exist.
	*/
	getFreeSpace: (this: void, path: string) => number | 'unlimited'

	/**
	 * Searches for files matching a string with wildcards.
	 * 
	 * This string is formatted like a normal path string, but can include any number of wildcards (*) to look for files matching anything. For example, rom/* /command* will look for any path starting with command inside any subdirectory of /rom.
	 * @param path The wildcard-qualified path to search for.
	 * @returns A list of paths that match the search string.
	 * @throws If the path doesn't exist.
	 * @tuplereturn
	*/
	find: (this: void, path: string) => string[]

	/**
	 * Returns true if a path is mounted to the parent filesystem.
	 * 
	 * The root filesystem "/" is considered a mount, along with disk folders and the rom folder. Other programs (such as network shares) can extend this to make other mount types by correctly assigning their return value for getDrive.
	 * @param path The path of the drive to get.
	 * @returns This drive's capacity. This will be nil for "read-only" drives, such as the ROM or treasure disks.
	 * @throws If the capacity cannot be determined.
	*/
	getCapacity: (this: void, path: string) => number | null

	/**
	 * Get attributes about a specific file or folder.
	 * 
	 * The returned attributes table contains information about the size of the file, whether it is a directory, when it was created and last modified, and whether it is read only.
	 * 
	 * The creation and modification times are given as the number of milliseconds since the UNIX epoch. This may be given to os.date in order to convert it to more usable form.
	 * @param path The path to get attributes for.
	 * @returns The resulting attributes.
	 * @throws If the path does not exist.
	*/
	attributes: (this: void, path: string) => { size: number, isDir: boolean, isReadOnly: boolean, created: number, modified: number }
}