import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { PipelineProgressableType } from '../prisma/pipeline-progressable-type.enum';
import { HideField } from '@nestjs/graphql';
import { PipelineCreateNestedOneWithoutPipelineProgressesInput } from '../pipeline/pipeline-create-nested-one-without-pipeline-progresses.input';
import { PipelineStageCreateNestedOneWithoutPipelineProgressesInput } from '../pipeline-stage/pipeline-stage-create-nested-one-without-pipeline-progresses.input';
import { PersonCreateNestedOneWithoutPipelineProgressInput } from '../person/person-create-nested-one-without-pipeline-progress.input';

@InputType()
export class PipelineProgressCreateWithoutWorkspaceInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    closeDate?: Date | string;

    @Field(() => Int, {nullable:true})
    closeConfidence?: number;

    @Field(() => PipelineProgressableType, {nullable:false})
    progressableType!: keyof typeof PipelineProgressableType;

    @Field(() => String, {nullable:false})
    progressableId!: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PipelineCreateNestedOneWithoutPipelineProgressesInput, {nullable:false})
    pipeline!: PipelineCreateNestedOneWithoutPipelineProgressesInput;

    @Field(() => PipelineStageCreateNestedOneWithoutPipelineProgressesInput, {nullable:false})
    pipelineStage!: PipelineStageCreateNestedOneWithoutPipelineProgressesInput;

    @Field(() => PersonCreateNestedOneWithoutPipelineProgressInput, {nullable:true})
    pointOfContact?: PersonCreateNestedOneWithoutPipelineProgressInput;
}
