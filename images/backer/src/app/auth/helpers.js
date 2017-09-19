// ..
import jwt from 'jwt-simple'
import { dbConfig } from '../config'

// ..
export const tokenForUser = (user) => {
    // ..
    const timestamp = new Date().getTime()
    const item = {
        sub: user.id, 
        iat: timestamp         
    }
    // ...
    return jwt.encode(item, dbConfig.secret)
}
