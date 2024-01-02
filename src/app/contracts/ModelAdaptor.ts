import {User} from "../models/user.model"
export interface ModelAdapter<Input, Output> {
    adapt: (input: Input) => Output;
    adaptArray?: (input: Input[]) => Output[];
  }
  