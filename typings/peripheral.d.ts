type side = "top" | "bottom" | "front" | "back" | "left" | "right";

// List of peripherals and their names as strings
type Peripheral = Monitor;
type PeripheralType = "monitor";

declare let peripheral: {
    /**
     * Provides a list of all peripherals available.
     * 
     * If a device is located directly next to the system, then its name will be listed as the side it is attached to.
     * If a device is attached via a Wired Modem, then it'll be reported according to its name on the wired network.
     * @returns A list of the names of all attached peripherals.
     */
    getNames: (this: void) => string[];

    /**
     * Determines if a peripheral is present with the given name.
     * @param name The side or network name that you want to check.
     * @returns If a peripheral is present with the given name.
     */
    isPresent: (this: void, name: side | PeripheralType | string) => boolean;

    /**
     * Get the types of a named or wrapped peripheral.
     * @param peripheral The name of the peripheral to find, or a wrapped peripheral instance.
     * @returns The peripheral's types, or nil if it is not present.
     */
    getType: (this: void, peripheral: side | PeripheralType | string | Peripheral | Table) => (PeripheralType | null);

    /**
     * Check if a peripheral is of a particular type.
     * @param peripheral The name of the peripheral or a wrapped peripheral instance.
     * @param peripheral_type The type to check.
     * @returns If a peripheral has a particular type, or nil if it is not present.
     */
    hasType: (this: void, peripheral: side | PeripheralType | string | Peripheral | Table, peripheral_type: PeripheralType) => (boolean | null);

    /**
     * Get all available methods for the peripheral with the given name.
     * @param name The name of the peripheral to find.
     * @returns A list of methods provided by this peripheral, or nil if it is not present.
     */
    getMethods: (this: void, name: side | PeripheralType | string) => (string[] | null);

    /**
     * Get the name of a peripheral wrapped with peripheral.wrap.
     * @param peripheral The peripheral to get the name of.
     * @returns The name of the given peripheral.
     */
    getName: (this: void, peripheral: Peripheral | Table) => string;

    /**
     * Call a method on the peripheral with the given name.
     * @param name The name of the peripheral to invoke the method on.
     * @param method The name of the method
     * @param arguments Additional arguments to pass to the method
     * @returns The return values of the peripheral method.
     */
    call: (this: void, name: side | PeripheralType | string, method: string, ...arguments: any) => any;

    /**
     * Get a table containing all functions available on a peripheral.
     * These can then be called instead of using peripheral.call every time.
     * @param name The name of the peripheral to wrap.
     * @returns The table containing the peripheral's methods, or nil if there is no peripheral present with the given name.
     */
    wrap: (this: void, name: side | PeripheralType | string) => (Peripheral | null);

    /**
     * Find all peripherals of a specific type, and return the wrapped peripherals.
     * @param type The type of peripheral to look for.
     * @param filter A filter function, which takes the peripheral's name and wrapped table and returns if it should be included in the result.
     * @returns 0 or more wrapped peripherals matching the given filters.
     */
    find: (this: void, type: side | PeripheralType | string, filter?: (name: string, wrapped: Peripheral) => boolean) => Peripheral[];
}