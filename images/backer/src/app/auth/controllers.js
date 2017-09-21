import passport from 'passport'
import LocalStrategy from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
// ..
import { dbConfig } from '../config'
// ..
import User from './models'
import { tokenForUser } from './helpers'

/**
 * pasport
 */


// ..
const localOptions = { 
    usernameField: 'email' 
}

// ..
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    // ..
    User.findOne({ email }, (err, user) => {
        // ..
        if (err) { 
            return done(err)}
        // ..
        if (!user) { 
            return done(null, false)}
        // ..
        user.comparePassword(password, (err, isMatch) => {
            // ..
            if (err) { 
                return done(err)}
            // ..
            if (!isMatch) { 
                return done(null, false)}
            // ...
            if (user.role < 1) { 
                return done(null, false)}
            // ..
            return done(null, user)
        })
    })
})
// ..
passport.use(localLogin)


// ..
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: dbConfig.secret,
}

// ...
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // ..
    User.findById(payload.sub, (err, user) => {
        // ..
        if (err) { 
            return done(err, false)}
        // ..
        if (!user) {
            return done(null, false)}
        // ..
        return done(null, user)        
    })
})
// ..
passport.use(jwtLogin)



// ..
export const requireSignin = passport.authenticate('local', { session: false })

/**
 * Sign in
 */
export const signin = (req, res) => {
    // ..
    const { firstname, lastname, email } = req.user
    const token = tokenForUser(req.user)
    // ..
    res.json({ token: token, firstname, lastname, email })
}