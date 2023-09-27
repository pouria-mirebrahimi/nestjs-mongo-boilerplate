import { Model } from 'mongoose';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from '@app/common';
import { Account } from './model/user.schema';

export class AccountRepository extends AbstractRepository<Account> {
  protected readonly logger = new Logger(AccountRepository.name);

  constructor(
    @InjectModel(Account.name)
    accountModel: Model<Account>,
  ) {
    super(accountModel);
  }
}
