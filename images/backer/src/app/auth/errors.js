import ExtendableError from 'es6-error'

export class AuthError extends ExtendableError {
    constructor(message) {
        super(message)
        this.code = 422
    }    
}
