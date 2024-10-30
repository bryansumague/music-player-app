import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseService } from '../services/firebase.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('register')
  async registerUser(@Body() userData: any) {
    const { email, password } = userData;

    // Create a new user account using the Firebase Admin SDK
    const userRecord = await this.firebaseService
      .getAuth()
      .createUser({ email, password });

    // Return the user record to the client
    return { user: userRecord.toJSON() };
  }
}
