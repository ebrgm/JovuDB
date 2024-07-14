/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EncryptionKeyWhereUniqueInput } from "./EncryptionKeyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EncryptionKeyUpdateInput } from "./EncryptionKeyUpdateInput";

@ArgsType()
class UpdateEncryptionKeyArgs {
  @ApiProperty({
    required: true,
    type: () => EncryptionKeyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EncryptionKeyWhereUniqueInput)
  @Field(() => EncryptionKeyWhereUniqueInput, { nullable: false })
  where!: EncryptionKeyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EncryptionKeyUpdateInput,
  })
  @ValidateNested()
  @Type(() => EncryptionKeyUpdateInput)
  @Field(() => EncryptionKeyUpdateInput, { nullable: false })
  data!: EncryptionKeyUpdateInput;
}

export { UpdateEncryptionKeyArgs as UpdateEncryptionKeyArgs };
