import passport from 'passport'
import LocalStrategy from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
// ..
import { dbConfig } from '../config'
// ..
import User from './models'
import { tokenForUser, transporter, optForSignup } from './utils'

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
            // if (user.role < 1) { 
            //     return done(null, false)}
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


/**
 * Sign up
 */
export const signup = (req, res, next) => {
    // ..
    const { firstname, lastname, email, password } = req.body
    if (!firstname || !lastname || !email || !password) {
        return res.status(422).send({ error: "all fields are required" })}
    // ..
    User.findOne({ email }, (err, existingUser) => {
        // ...
        if (err) { 
            return next(err)}
        // ...
        if (existingUser) {
            return res.status(422).send({ error: "Email is in use" })}

        // ...
        const user = new User({ firstname, lastname, email, password })
        user.save((err) => {
            // ..
            if (err) { 
                return next(err)}
            // ...
            transporter.sendMail(optForSignup(email, firstname, user.auth.token),(err) => { 
                // ...
                if (err) { 
                    console.log('*******')
                    console.log(err)
                    console.log('*******')                
                    user.remove()                
                    res.status(422).send({ error: "Email was not sended" })
                    return err
                } 
            })
            // ..
            res.json({ firstname, lastname, email })
        })
    })
}

// /**
//  * Sign up
//  */
// export const signup = (req, res, next) => {
//     // ..
//     const { firstname, lastname, email, password } = req.body
//     if (!firstname || !lastname || !email || !password) {
//         return res.status(422).send({ error: "all fields are required" })}
//     // ..
//     User.findOne({ email }, (err, existingUser) => {
//         // ...
//         if (err) { 
//             return next(err)}
//         // ...
//         if (existingUser) {
//             return res.status(422).send({ error: "Email is in use" })}

//         // ...
//         const user = new User({ firstname, lastname, email, password })
//         user.save(async (err) => {
//             // ..
//             if (err) { 
//                 return next(err)}
//             // ...
//             try {
//                 await transporter.sendMail(optForSignup(email, firstname, user.auth.token))
//             } catch(err) {
//                 console.log('*******')
//                 console.log(err)
//                 console.log('*******')                
//                 user.remove()                
//                 return res.status(422).send({ error: "Email was not sended" })
//             }
//             // ..
//             res.json({ firstname, lastname, email })
//         })
//     })
// }

