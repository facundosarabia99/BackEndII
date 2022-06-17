import MongoStore from 'connect-mongo'

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

const app = express()

app.use(session({
    
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://facundosarabia:canarias@cluster0.m3rfnyf.mongodb.net/?retryWrites=true&w=majority`,
        mongoOptions: advancedOptions
    }),
    
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false
}))