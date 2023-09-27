import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-user.dto';
import { UpdateAccountDto } from './dto/update-user.dto';
import { AccountRepository } from './user.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepo: AccountRepository) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountRepo.create({
      ...createAccountDto,
    });
  }

  findAll() {
    return this.accountRepo.find({});
  }

  findOne(_id: string) {
    return this.accountRepo.findOne({ _id });
  }

  update(_id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountRepo.findOneAndUpdate(
      { _id },
      { $set: updateAccountDto },
    );
  }

  remove(_id: string) {
    return this.accountRepo.findOneAndDelete({ _id });
  }
}
