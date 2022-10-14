export class ErrorModel {
    /**
     * Unique error code which identifies the error.
     */
    // @ts-ignore
    public code: string;
    /**
     * Status code of the error.
     */
    // @ts-ignore
    public status: number;
    /**
     * Any additional data that is required for translation.
     */
    public metaData?: any;
}
