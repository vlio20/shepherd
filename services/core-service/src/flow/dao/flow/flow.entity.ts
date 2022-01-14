import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccountEntity } from '../../../account/dao/account.entity';

const EntityFields = {
  id: 'shfl_id',
  accountId: 'shfl_account_id',
  name: 'shfl_name',
  createdAt: 'shfl_created_at',
  updatedAt: 'shfl_updated_at',
};

@Entity({
  name: 'shfl_flow',
})
export class FlowEntity {
  @PrimaryGeneratedColumn({
    name: EntityFields.id,
  })
  id: number;

  @Column({
    name: EntityFields.accountId,
    type: 'int',
    nullable: false,
  })
  accountId: number;

  @Column({
    name: EntityFields.name,
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    name: EntityFields.createdAt,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt: Date;

  @Column({
    name: EntityFields.updatedAt,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  updatedAt: Date;

  @ManyToOne(() => AccountEntity, ({ flows }) => flows, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: EntityFields.accountId,
  })
  account?: Promise<AccountEntity>;
}
