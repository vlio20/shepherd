import { Controller, Get } from '@nestjs/common';
import { IFlowsDto } from '../../../../shared/model/flow/flow.model';
import { FlowApi } from '../api/flow.api';

@Controller('/api/v1/flows')
export class FlowController {
  constructor(private readonly flowApi: FlowApi) {}

  @Get()
  getAccountFlows(): Promise<IFlowsDto> {
    return this.flowApi.getAccountFlows(1);
  }
}
