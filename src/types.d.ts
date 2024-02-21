import { CoffeeShop, PrismaClient, User } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';

export interface IUser {
  id: number;
  userId: number;
  firstname: string;
  lastname?: string;
  password: string;
  username: string;
  email: string;
  folowers: User[];
  folowing: User[];
  totalFollowing: number;
  totalFollowers: number;
  shops: CoffeeShop;
  createAt: string;
  updatedAt: string;
}

export interface IFile {
  fieldName: string;
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => any;
}

export type IArgs = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bio: string;
  avatar: IFile;
  keyword: string;
  file: IFile;
  categoryname: string;
  lastId: number;
  page: number;
};

export type Context = {
  loggedInUser?: User;
  client: PrismaClient
};

export type Resolver = (
  root: IUser,
  args: IArgs,
  context: Context,
  info: GraphQLResolveInfo,
) => any;

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver;
  };
};