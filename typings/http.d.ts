declare let http: {
    /**
     * Make a HTTP GET request to the given url.
     * @param url The url to request
     * @param headers Additional headers to send as part of this request.
     * @param binary Whether to make a binary HTTP request. If true, the body will not be UTF-8 encoded, and the received response will not be decoded.
     * @returns The resulting http response, which can be read from.
     */
    get: (this: void, url: string, headers?: Table | Object, binary?: boolean) => Response;

    /**
     * Make a HTTP POST request to the given url.
     * @param url The url to request
     * @param body The body of the POST request.
     * @param headers Additional headers to send as part of this request.
     * @param binary Whether to make a binary HTTP request. If true, the body will not be UTF-8 encoded, and the received response will not be decoded.
     * @returns The resulting http response, which can be read from.
     */
    post: (this: void, url: string, body: string, headers?: Table | Object, binary?: boolean) => Response;

    /**
     * Asynchronously make a HTTP request to the given url.
     * This returns immediately, a http_success or http_failure will be queued once the request has completed.
     * @param url The url to request
     * @param body An optional string containing the body of the request. If specified, a POST request will be made instead.
     * @param headers Additional headers to send as part of this request.
     * @param binary Whether to make a binary HTTP request. If true, the body will not be UTF-8 encoded, and the received response will not be decoded.
     * @returns ok
     * @returns err
     */
    request: (this: void, url: string, body?: string, headers?: Table | Object, binary?: boolean) => LuaMultiReturn<[boolean, unknown]>;

    /**
     * Asynchronously determine whether a URL can be requested.
     * If this returns true, one should also listen for http_check which will container further information about whether the URL is allowed or not.
     * @param url The URL to check.
     * @returns true When this url is not invalid. This does not imply that it is allowed - see the comment above.
     * @returns false When this url is invalid.
     * @returns (when false) A reason why this URL is not valid (for instance, if it is malformed, or blocked).
     */
    checkURLAsync: (this: void, url: string) => true | LuaMultiReturn<[success: false, reason: string]>;

    /**
     * Determine whether a URL can be requested.
     * If this returns true, one should also listen for http_check which will container further information about whether the URL is allowed or not.
     * @param url The URL to check.
     * @returns true When this url is valid and can be requested via http.request.
     * @returns false When this url is invalid.
     * @returns (when false) A reason why this URL is not valid (for instance, if it is malformed, or blocked).
     */
    checkURL: (this: void, url: string) => true | LuaMultiReturn<[success: false, reason: string]>;

    /**
     * Asynchronously open a websocket.
     * This returns immediately, a websocket_success or websocket_failure will be queued once the request has completed.
     * @param url The websocket url to connect to. This should have the ws:// or wss:// protocol.
     * @param headers Additional headers to send as part of the initial websocket connection.
     */
    websocketAsync: (this: void, url: string, headers?: Table | Object) => void;

    /**
     * Open a websocket.
     * @param url The websocket url to connect to. This should have the ws:// or wss:// protocol.
     * @param headers Additional headers to send as part of the initial websocket connection.
     * @returns The websocket connection.
     * @returns false If the websocket connection failed.
     * @returns (if false) An error message describing why the connection failed.
     */
    websocket: (this: void, url: string, headers?: Table | Object) => Websocket | LuaMultiReturn<[success: false, message: string]>;
}