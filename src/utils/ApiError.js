class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors =[],
        stack=""
    ){
        super(message);
        this.statusCode = statusCode
        this.data = null
        this.errors = errors
        this.message = message
        this.stack = stack
        this.success = false;

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }

}

export {ApiError}











// 🔴 Problem Without apiError

// If you don’t use a custom error class:

// You’d have to manually send error responses everywhere.

// Different routes may return errors in different formats.

// Debugging/logging becomes messy.
