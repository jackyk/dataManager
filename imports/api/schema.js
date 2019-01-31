import { gql } from 'apollo-server-express'

const typeDefs = gql`
scalar Date
type Query{
    getEit(id: String): EIT
    getAllEit:[EIT]
    
}
type Mutation{
    addEit(firstName: String, secondName: String, gender: String, bDay:String): EIT
    deleteEit(id:String!): String
    updateEit(id: String,firstName: String, secondName: String, gender: String, bDay:String): EIT      
}
type EIT{
    _id: String
    firstName:String
    secondName:String
    gender:String
    bDay:String
}
`
export default typeDefs