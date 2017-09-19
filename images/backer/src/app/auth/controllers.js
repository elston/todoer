// ..
import { tokenForUser } from './helpers'

/**
 * Sign in
 */
export const signin = (req, res) => {
    // ..
    const { firstname, lastname, email } = req.user
    res.json({ 
        token: tokenForUser(req.user), 
        firstname, 
        lastname, 
        email 
    })
}