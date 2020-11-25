import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/models/user.schema";
import { UserService } from "./services/user.service";


@Module( {
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  providers: [],
  exports: [UserService]

});

export class SharedModule {
  
}