import { Body , Controller, Get, Post , BadRequestException, Res, Req, UnauthorizedException} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { Response, Request} from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService
    ) {}

  @Post('register')
 async register(
  @Body('name') name: string,
  @Body('email') email: string,
  @Body('password') password: string
 ) {
     try {
      const hashedPassword = await bcrypt.hash(password , 12);
    

      

      const user = this.appService.create({
        name,
        email,
        password: hashedPassword
      });
     
      delete (await user).password;
      return {status_code:200,msg:'sucessful', user:user};
     } 
     catch (err) {
      console.log('err') 
      return {status_code:400,msg:'email already exit'}
     }

    
 }
 @Post('login')
 async Login(
  @Body('email') email: string,
  @Body('password') password: string,
  @Res({passthrough: true}) response: Response
 ){
  const user = await this.appService.findOne({email});

  if(!user){
    throw new BadRequestException('invalid credentials');

  }
  if(!await bcrypt.compare(password, user.password)){
    throw new BadRequestException('invalid credentials');

  }
  
  const jwt = await this.jwtService.signAsync({id: user.id});

  response.cookie('jwt', jwt , {httpOnly:true});

  return {
    message: 'success'
  };
 }

 @Get('user')
 async user(@Req() request: Request) {
    try 
    {
      const cookie = request.cookies['jwt'];

    const data = await this.jwtService.verifyAsync(cookie);

    if (!data){
      throw new UnauthorizedException();
    }

    const user = await this.appService.findOne({id: data['id']});

   const {password, ...result} = user;


    return result;
  }catch (e) {
    throw new UnauthorizedException();
  }
 }
 @Post('logout')
 async Logout( @Res({passthrough: true}) response: Response) {
    response.clearCookie('jwt');

    return{
      message: 'success'
    }
 }
}
