import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-user.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
