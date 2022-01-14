import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FlowEntity } from '../../flow/dao/flow/flow.entity';

const EntityFields = {
  id: 'shac_id',
  name: 'shac_name',
  createdAt: 'shac_created_at',
  updatedAt: 'shac_updated_at',
};

@Entity({
  name: 'shac_account',
})
export class AccountEntity {
  @PrimaryGeneratedColumn({
    name: EntityFields.id,
  })
  id: number;

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

  @OneToMany(() => FlowEntity, ({ account }) => account)
  flows?: Promise<AccountEntity[]>;
}
