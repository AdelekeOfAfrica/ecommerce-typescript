import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";

import {compare} from "bcrypt"
import db from "./db";
import { CloudFog } from "lucide-react";


export const authOptions ={
    adapter:PrismaAdapter(db),
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:"jwt",

    },
    pages:{
        signIn:"/login", //this is the page were your login function is  written

    },
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{label:"Email", type:"Email",placeholder:"email@provider.com"},
                password:{label:"Password", type:"password"},
            },

           async authorize(credentials){
            try{
                console.log("Authorize function received credentials:",credentials);
                //check if user credentials are not empty 
                if(!credentials?.email || !credentials?.password){
                    throw{error:"No Input Found", status:401};
                }
                console.log("Passed check 1")

                //check if user exists 
                const existingUser = await db.user.findUnique({
                    where:{email:credentials.email},
                });

                if(!existingUser){
                    console.log("No User Found");
                    throw{error:"no user found", status :401};

                }
                console.log("Passed Check 2");

                const passwordMatch = await compare(
                    credentials.password,
                    existingUser.password
                );
                if(!passwordMatch){
                    console.log("password incorrect");
                    throw{error:"Password incorrect", status:401};
                }
                console.log("Passed check 3");
                const user ={
                    id:existingUser.id,
                    name:existingUser.name,
                    email:existingUser.email,
                    role:existingUser.role,
                    image:existingUser.imageUrl,
                    emailVerified:existingUser.emailVerified

                };

                 return user;
      
            }catch(error){

            }
           }
        })
    ],
    callbacks:{
        async session({session,token}){
            if(token){
                console.log(`token:${token} in session`);
                session.user.id =token.id,
                session.user.name =token.name;
                session.user.email=token.email,
                session.user.role =token.role;
                session.user.image =token.picture;
                session.user.emailVerified =token.emailVerified;

            }

            console.log(`session:{session.user}`);
            return session;
        },
        async jwt({token,user}){
              if (user){
                        token.id = user.id;
                        token.name = user.name,
                        token.email = user.email
                        token.role = user.role
                        token.image = user.picture;
                        token.emailVerified = user.emailVerified

                    }
                    console.log(`token:${token}`);
                   
                    return token;
        }
    }
        
    
}

export default NextAuth(authOptions);