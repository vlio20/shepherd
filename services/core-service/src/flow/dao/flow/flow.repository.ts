import { EntityRepository, Repository } from 'typeorm';
import { FlowEntity } from './flow.entity';

@EntityRepository(FlowEntity)
export class FlowRepository extends Repository<FlowEntity> {
  async getAccountFlows(accountId: number): Promise<FlowEntity[]> {
    return this.createQueryBuilder('flow')
      .where('flow.accountId = :accountId', { accountId })
      .getMany();
  }
}
