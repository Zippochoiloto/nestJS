import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from '@nestjs/mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}
  async create(userDTO: RegisterDTO) {
    const { username } = userDTO;
    const user = await this.userModel.findOne( {username} );
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.userModel(userDTO)
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }
  
  sanitizeUser(createUser: any) {
    throw new Error("Method not implemented.");
  }
}
