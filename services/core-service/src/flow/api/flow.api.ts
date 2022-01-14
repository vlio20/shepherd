import { Injectable } from '@nestjs/common';
import { FlowService } from '../service/flow.service';
import { IFlowsDto } from '../../../../shared/model/flow/flow.model';
import { FlowsDto } from '../controller/dto/flow.dto';
import { UtilsService } from '../../common/service/utils.service';

@Injectable()
export class FlowApi {
  constructor(private readonly flowService: FlowService) {}

  async getAccountFlows(accountId: number): Promise<IFlowsDto> {
    const flows = await this.flowService.getAccountFlows(accountId);
    const flowsDto = new FlowsDto();
    flowsDto.flows = flows.map((flow) => {
      return {
        id: flow.id,
        name: flow.name,
        createdAt: UtilsService.dateToUnix(flow.createdAt),
        updatedAt: UtilsService.dateToUnix(flow.updatedAt),
      };
    });

    return flowsDto;
  }
}
