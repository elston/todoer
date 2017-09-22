/*
* main
*/
export const NODE_ENV = process.env.NODE_ENV


/*
* server
*/
export const ROOT_URL = 'http://localhost:8080'
export const SERVER_PORT = process.env.SERVER_PORT
export const SERVER_HOST = process.env.SERVER_HOST

/*
* db
*/
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
// ..
export const dbConfig = {
  secret: 'SomeRandomSecretString',
  uri: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}`,
  option:{
    useMongoClient: true        
  }
}


/*
* email
*/
/**********************
*   kubcenter.ru
***********************/
// export const emailConfig = {
//   host: '####.kubcenter.ru',
//   port: 465,
//   secure: true,
//   requireTLS:true,
//   auth: {
//     user: '#####@kubcenter.ru',
//     pass: '#####',
//   },
// }

/**********************
*   mail.ru
***********************/
// export const emailConfig = {
//   host: 'smtp.mail.ru',
//   port: 465,
//   secure: true,
//   requireTLS:true,
//   auth: {
//     user: 'elstton@mail.ru',
//     pass: '3NSbIy7dfO',
//   },
// }


// export const emailConfig = {
//   host: 'smtp.mail.ru',
//   port: 2525,
//   // secure: true,
//   requireTLS:true,
//   auth: {
//     user: 'elstton@mail.ru',
//     pass: '3NSbIy7dfO',
//   },
// }


/**********************
*   rambler.ru
***********************/
// export const emailConfig = {
//   host: 'smtp.rambler.ru',
//   port: 465,
//   secure: true,
//   requireTLS:true,
//   auth: {
//     user: 'elstton@rambler.ru',
//     pass: '3NSbIy7dfO',
//   },
// }


/**********************
*   gmail.com
***********************/
export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  requireTLS:true,
  auth: {
    user: 'mmegammail@gmail.com',
    pass: '3NSbIy7dfO',
  },
}
