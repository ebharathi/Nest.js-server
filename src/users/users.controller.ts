import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { responseBody,User } from './schema/users.schema';
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get()
    getAllUsers():string{
        return "Hello Elaya2";
    }
    @Get(":id")
    getUserById(@Param('id') id: string): string {
        return `This action returns a User with ID: ${id}`;
      }
    //  
    @Post()
    async createUser(@Body() reqBody:User):Promise<responseBody>{
        console.log("REQ BODY--->",reqBody);
        const user=await this.userService.create(reqBody);
        console.log("CREATED USER-->",user);
        return {
            error:false,
            message:"New User added"
        };
    }

}
