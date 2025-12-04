import { Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BcryptHelper } from 'src/user/helpers/bcrypt.helpers';
import { UserRepository } from 'src/user/repository/user.repository';

@Injectable()
export class AuthService {

    constructor(
        private usersRepository: UserRepository,
        private bcrypt: BcryptHelper,
        private jwtService: JwtService,
    ) { }

    async auth(email: string, password: string) {
        const user = await this.usersRepository.findOne({ email });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isValid = await this.bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = {
            email: user.email
        }

        return this.jwtService.sign(payload);
    }
}