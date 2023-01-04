declare let turtle: {
	/** 
	 * Move the turtle forward one block.
	 * @tuplereturn
	*/
	forward: (this: void) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Move the turtle backwards one block.
	 * @tuplereturn
	*/
	back: (this: void) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Move the turtle up one block.
	 * @tuplereturn
	*/
	up: (this: void) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Move the turtle down one block.
	 * @tuplereturn
	*/
	down: (this: void) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Rotate the turtle 90 degress to the left.
	 * @tuplereturn
	*/
	turnLeft: (this: void) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Rotate the turtle 90 degress to the right.
	 * @tuplereturn
	*/
	turnRight: (this: void) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Rotate the turtle 90 degress to the right.
	 * @tuplereturn
	*/
	dig: (this: void, side?: string) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Attempt to break the block above the turtle. See `dig` for full details.
	 * @param side The specific tool to use.
	 * @tuplereturn
	*/
	digUp: (this: void, side?: string) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Attempt to break the block below the turtle. See dig for full details.
	 * @param side The specific tool to use.
	 * @tuplereturn
	*/
	digDown: (this: void, side?: string) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Place a block or item into the world in front of the turtle.
	 * 
	 * "Placing" an item allows it to interact with blocks and entities in front of the turtle. For instance, buckets can pick up and place down fluids, and wheat can be used to breed cows. However, you cannot use place to perform arbitrary block interactions, such as clicking buttons or flipping levers.
	 * @param text When placing a sign, set its contents to this text.
	 * @tuplereturn
	*/
	place: (this: void, text?: string) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Place a block or item into the world above the turtle.
	 * @param text When placing a sign, set its contents to this text.
	 * @tuplereturn
	*/
	placeUp: (this: void, text?: string) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Place a block or item into the world below the turtle.
	 * @param text When placing a sign, set its contents to this text.
	 * @tuplereturn
	*/
	placeDown: (this: void, text?: string) => LuaMultiReturn<[ success: boolean, reason: string | null ]>


	/** 
	 * Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if there is no inventory.
	 * @param count The number of items to drop. If not given, the entire stack will be dropped.
	 * @throws If dropping an invalid number of items.
	 * @tuplereturn
	*/
	drop: (this: void, count?: number) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Drop the currently selected stack into the inventory above the turtle, or as an item into the world if there is no inventory.
	 * @param count The number of items to drop. If not given, the entire stack will be dropped.
	 * @throws If dropping an invalid number of items.
	 * @tuplereturn
	*/
	dropUp: (this: void, count?: number) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if there is no inventory.
	 * @param count The number of items to drop. If not given, the entire stack will be dropped.
	 * @throws If dropping an invalid number of items.
	 * @tuplereturn
	*/
	dropDown: (this: void, count?: number) => LuaMultiReturn<[ success: boolean, reason: string | null ]>

	/** 
	 * Change the currently selected slot.
	 *
	 * The selected slot is determines what slot actions like drop or getItemCount act on.
	 * @param count The slot to select.
	 * @throws If the slot is out of range.
	*/
	select: (this: void, slot: number) => true

	/** 
	 * Get the number of items in the given slot.
	 * @param slot The slot we wish to check. Defaults to the selected slot.
	 * @throws If the slot is out of range.
	 * @returns The number of items in this slot.
	*/
	getItemCount: (this: void, slot?: number) => number

	/** 
	 * Get the remaining number of items which may be stored in this stack.
	 *
	 * For instance, if a slot contains 13 blocks of dirt, it has room for another 51.
	 * @param slot The slot we wish to check. Defaults to the selected slot.
	 * @throws If the slot is out of range.
	 * @returns The space left in in this slot.
	*/
	getItemSpace: (this: void, slot?: number) => number

	/** 
	 * Check if there is a solid block in front of the turtle. In this case, solid refers to any non-air or liquid block.
	 * @returns If there is a solid block in front.
	*/
	detect: (this: void) => boolean

	/** 
	 * Check if there is a solid block above the turtle. In this case, solid refers to any non-air or liquid block.
	 * @returns If there is a solid block in front.
	*/
	detectUp: (this: void) => boolean

	/** 
	 * Check if there is a solid block below the turtle. In this case, solid refers to any non-air or liquid block.
	 * @returns If there is a solid block in front.
	*/
	detectDown: (this: void) => boolean

	/**
	 *
	*/
	compare: (this: void) => any

	/**
	 *
	*/
	compareUp: (this: void) => any

	/**
	 *
	*/
	compareDown: (this: void) => any

	/**
	 * Attack the entity in front of the turtle.
	 * @param side The specific tool to use.
	 * @returns Whether an entity was attacked.
	 * @returns The reason nothing was attacked.
	 * @tuplereturn
	*/
	attack: (this: void, side?: string) => LuaMultiReturn<[ boolean, string | null ]>

	/**
	 * Attack the entity above the turtle.
	 * @param side The specific tool to use.
	 * @returns Whether an entity was attacked.
	 * @returns The reason nothing was attacked.
	 * @tuplereturn
	*/
	attackUp: (this: void, side?: string) => LuaMultiReturn<[ boolean, string | null ]>

	/**
	 * Attack the entity below the turtle.
	 * @param side The specific tool to use.
	 * @returns Whether an entity was attacked.
	 * @returns The reason nothing was attacked.
	 * @tuplereturn
	*/
	attackDown: (this: void, side?: string) => LuaMultiReturn<[ boolean, string | null ]>

	/**
	 * Suck an item from the inventory in front of the turtle, or from an item floating in the world.
	 * 
	 * This will pull items into the first acceptable slot, starting at the currently selected one.
	 * @param count The number of items to suck. If not given, up to a stack of items will be picked up.
	 * @returns Whether items were picked up.
	 * @returns The reason the no items were picked up.
	 * @throws If given an invalid number of items.
	 * @tuplereturn
	*/
	suck: (this: void, count?: number) => LuaMultiReturn<[ boolean, string | null ]>

	/**
	 * Suck an item from the inventory above the turtle, or from an item floating in the world.
	 * @param count The number of items to suck. If not given, up to a stack of items will be picked up.
	 * @returns Whether items were picked up.
	 * @returns The reason the no items were picked up.
	 * @throws If given an invalid number of items.
	 * @tuplereturn
	*/
	suckUp: (this: void, count?: number) => LuaMultiReturn<[ boolean, string | null ]>

	/**
	 * Suck an item from the inventory below the turtle, or from an item floating in the world.
	 * @param count The number of items to suck. If not given, up to a stack of items will be picked up.
	 * @returns Whether items were picked up.
	 * @returns The reason the no items were picked up.
	 * @throws If given an invalid number of items.
	 * @tuplereturn
	*/
	suckDown: (this: void, count?: number) => LuaMultiReturn<[ boolean, string | null ]>

	/**
	*/
	getFuelLevel: (this: void) => any

	/**
	*/
	refuel: (this: void, count?: number) => any

	/**
	*/
	compareTo: (this: void, slot: number) => any

	/**
	*/
	transferTo: (this: void, slot: number, count?: number) => any

	/**
	 * Get the currently selected slot.
	 * @returns The current slot.
	*/
	getSelectedSlot: (this: void) => number

	/**
	*/
	getFuelLimit: (this: void) => any

	/**
	*/
	equipLeft: (this: void) => any

	/**
	*/
	equipRight: (this: void) => any

	/**
	 * Get information about the block in front of the turtle.
	 * @returns Whether there is a block in front of the turtle.
	 * @returns Information about the block in front, or a message explaining that there is no block.
	 * @tuplereturn
	*/
	/** @tupleReturn */
	inspect: (this: void) => LuaMultiReturn<[ boolean, Block | string ]>

	/**
	 * Get information about the block above the turtle.
	 * @returns Whether there is a block above the turtle.
	 * @returns Information about the above below, or a message explaining that there is no block.
	 * @tuplereturn
	*/
	inspectUp: (this: void) => LuaMultiReturn<[ boolean, Block | string ]>

	/**
	 * Get information about the block below the turtle.
	 * @returns Whether there is a block below the turtle.
	 * @returns Information about the block below, or a message explaining that there is no block.
	 * @tuplereturn
	*/
	inspectDown: (this: void) => LuaMultiReturn<[ boolean, Block | string ]>

	/**
	 * Get information about the block below the turtle.
	 * @param slot The slot to get information about. Defaults to the selected slot.
	 * @param detailed Whether to include "detailed" information. When true the method will contain much more information about the item at the cost of taking longer to run.
	 * @returns Information about the given slot, or nil if it is empty.
	 * @throws If the slot is out of range.
	 * @tuplereturn
	*/
	getItemDetail: (this: void, slot?: number, detailed?: boolean) => null | Block

	/**
	*/
	craft: (this: void, limit: number) => any

}