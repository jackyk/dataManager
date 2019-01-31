import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import { ApolloServer ,gql} from 'apollo-server-express'
import { getUser } from 'meteor/apollo'
import { Names } from '../imports/api/names'
import '../imports/api/names.js';
import typeDefs from '../imports/api/schema'
import resolvers from '../imports/api/resolvers'


Meteor.startup(() => {
        
})
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) =>({
      user: await getUser(req.headers.authorization)
    })
  })
  
  server.applyMiddleware({
    app: WebApp.connectHandlers,
    path: '/graphql'
  })
  
  WebApp.connectHandlers.use('/graphql', (req, res) => {
    if (req.method === 'GET'){
      res.end()
    }
  })