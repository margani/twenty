import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumPipelineProgressableTypeFieldUpdateOperationsInput } from '../prisma/enum-pipeline-progressable-type-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PipelineStageUpdateOneRequiredWithoutPipelineProgressesNestedInput } from '../pipeline-stage/pipeline-stage-update-one-required-without-pipeline-progresses-nested.input';
import { PersonUpdateOneWithoutPipelineProgressNestedInput } from '../person/person-update-one-without-pipeline-progress-nested.input';
import { WorkspaceUpdateOneRequiredWithoutPipelineProgressesNestedInput } from '../workspace/workspace-update-one-required-without-pipeline-progresses-nested.input';

@InputType()
export class PipelineProgressUpdateWithoutPipelineInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    amount?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    closeDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    closeConfidence?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumPipelineProgressableTypeFieldUpdateOperationsInput, {nullable:true})
    progressableType?: EnumPipelineProgressableTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    progressableId?: StringFieldUpdateOperationsInput;

    @HideField()
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PipelineStageUpdateOneRequiredWithoutPipelineProgressesNestedInput, {nullable:true})
    pipelineStage?: PipelineStageUpdateOneRequiredWithoutPipelineProgressesNestedInput;

    @Field(() => PersonUpdateOneWithoutPipelineProgressNestedInput, {nullable:true})
    pointOfContact?: PersonUpdateOneWithoutPipelineProgressNestedInput;

    @HideField()
    workspace?: WorkspaceUpdateOneRequiredWithoutPipelineProgressesNestedInput;
}
