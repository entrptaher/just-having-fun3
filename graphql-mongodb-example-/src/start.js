import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import { makeExecutableSchema } from "graphql-tools";
import cors from "cors";
import fs from "fs";
import path from "path";

const URL = "http://localhost";
const PORT = 3001;
const MONGO_URL = "mongodb://localhost:27017/blog";

const prepare = o => {
  o._id = o._id.toString();
  return o;
};

export const start = async () => {
  try {
    /* DATABASE CONNECTION */
    const db = await MongoClient.connect(MONGO_URL);
    const Posts = db.collection("posts");
    const Comments = db.collection("comments");

    /* TYPEDEFS */
    const typeDefs = [
      fs.readFileSync(path.join(__dirname, "typedefs.graphql"), "utf8")
    ];

    /* RESOLVERS */
    const resolvers = {
      Query: {
        post: async (root, { _id }) => {
          return prepare(await Posts.findOne(ObjectId(_id)));
        },
        posts: async () => {
          return (await Posts.find({}).toArray()).map(prepare);
        },
        comment: async (root, { _id }) => {
          return prepare(await Comments.findOne(ObjectId(_id)));
        }
      },
      Post: {
        comments: async ({ _id }) => {
          return (await Comments.find({ postId: _id }).toArray()).map(prepare);
        }
      },
      Comment: {
        post: async ({ postId }) => {
          return prepare(await Posts.findOne(ObjectId(postId)));
        }
      },
      Mutation: {
        createPost: async (root, args, context, info) => {
          console.log(args);
          const res = await Posts.insert(args);
          return prepare(await Posts.findOne({ _id: res.insertedIds[1] }));
        },
        createComment: async (root, args) => {
          const res = await Comments.insert(args);
          return prepare(await Comments.findOne({ _id: res.insertedIds[1] }));
        },
        updatePost: async (root, query, context, info) => {
          const _id = ObjectId(query.searchQuery._id);
          const res = await Posts.update(
            { _id },
            {
              $set: query.updateQuery
            }
          );
          const onePost = await Posts.findOne({
            _id
          });
          return prepare(onePost);
        },
        removePost: async (root, query, context, info) => {
          const _id = ObjectId(query._id);
          const res = await Posts.remove({ _id });
          const onePost = await Posts.findOne({
            _id
          });
          return res;
        }
      }
    };

    /* EXECUTION */
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    });

    /* SERVER */
    const app = express();

    app.use(cors());

    app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

    const homePath = "/graphiql";

    app.use(
      homePath,
      graphiqlExpress({
        endpointURL: "/graphql"
      })
    );

    app.listen(PORT, () => {
      console.log(`Visit ${URL}:${PORT}${homePath}`);
    });
  } catch (e) {
    console.log(e);
  }
};
