export interface IFlowDto {
  id: number;
  name: string;
  createdAt: number;
  updatedAt: number;
}

export interface IFlowsDto {
  flows: IFlowDto[];
}
