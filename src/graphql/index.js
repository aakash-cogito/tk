import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { demoData } from "./demoData";

const ClientType = new GraphQLObjectType({
  name: "client",
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    number: { type: GraphQLInt },
    notes: { type: GraphQLString },
    source: { type: GraphQLString },
    status: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllClients: {
      type: new GraphQLList(ClientType),
      args: { id: { type: GraphQLInt } },
      resolve(parents, args) {
        return demoData;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: ClientType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        number: { type: GraphQLInt },
        notes: { type: GraphQLString },
        source: { type: GraphQLString },
        status: { type: GraphQLString },
      },
      resolve(parents, args) {
        demoData.push({
          name: args.name,
          email: args.email,
          number: args.number,
          source: args.source,
          status: args.status,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        return "sucess";
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: mutation });
