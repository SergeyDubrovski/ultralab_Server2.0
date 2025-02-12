import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post()
    create(@Body() userDTO : CreateUserDTO) {
        return this.userService.createUser(userDTO)
    }
    @Get()
    getAll() {
        return this.userService.getAllUser()
    }
}
