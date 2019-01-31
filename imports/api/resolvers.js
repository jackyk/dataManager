import { GraphQLDateTime } from 'graphql-iso-date'
// import { ETIME } from 'constants';
import { Names } from './names'
const resolvers = {
    Date: GraphQLDateTime,
    Query: {
        getEit(_,args){
            return Names.findOne(args.id);
        },
        getAllEit(){
            return Names.find({}).fetch();
        },

    },
    Mutation:{
        addEit(_,args){
            let id = Names.insert(args);
            return Names.findOne(id);
        },
        deleteEit(_,args){
            Names.remove(args.id);
            return args.id;
        },
         updateEit(_,args){
          
            Names.update(args.id,{$set:args});
              },
    }
}
export default resolvers