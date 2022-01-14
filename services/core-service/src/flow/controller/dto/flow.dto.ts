import {
  IFlowDto,
  IFlowsDto,
} from '../../../../../shared/model/flow/flow.model';

export class FlowDto implements IFlowDto {
  id: number;
  name: string;
  createdAt: number;
  updatedAt: number;
}

export class FlowsDto implements IFlowsDto {
  flows: FlowDto[];
}
