import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from 'src/user/repository/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'aopskdopasdikas9dkam9dadjkmas90dkja09dka09dk09asjkd90',
    });
  }

  async validate(payload: any) {
    const userRegister = await this.userRepository.findOne({
      email: payload.email
    })

    if (!userRegister) {
      throw new UnauthorizedException('Unauthorized');
    }
    const user = {
      id: userRegister.id,
      email: userRegister.email,
      name: userRegister.nome,
    }
    return user
  }
}