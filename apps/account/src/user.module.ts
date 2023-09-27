import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common';
import { AccountService } from './user.service';
import { AccountController } from './user.controller';
import { AccountRepository } from './user.repository';
import { Account } from './model/user.schema';
import { AccountSchema } from './model/user.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: Account.name,
        schema: AccountSchema,
      },
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
})
export class AccountModule {}
