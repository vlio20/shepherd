import { Injectable } from '@nestjs/common';
import { FlowRepository } from '../dao/flow/flow.repository';
import { FlowEntity } from '../dao/flow/flow.entity';

@Injectable()
export class FlowService {
  constructor(private readonly flowRepo: FlowRepository) {}

  getAccountFlows(accountId: number): Promise<FlowEntity[]> {
    return this.flowRepo.getAccountFlows(accountId);
  }
}
