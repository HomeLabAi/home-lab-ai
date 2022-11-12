/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace HomeLab {
  export type ProjectStruct = {
    status: PromiseOrValue<BigNumberish>;
    owner: PromiseOrValue<string>;
    paymentToken: PromiseOrValue<string>;
    createdAt: PromiseOrValue<BigNumberish>;
    updatedAt: PromiseOrValue<BigNumberish>;
    serviceFeePercent: PromiseOrValue<BigNumberish>;
    lastPhaseId: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    data: PromiseOrValue<string>;
  };

  export type ProjectStructOutput = [
    number,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    status: number;
    owner: string;
    paymentToken: string;
    createdAt: BigNumber;
    updatedAt: BigNumber;
    serviceFeePercent: BigNumber;
    lastPhaseId: BigNumber;
    name: string;
    data: string;
  };

  export type PhaseStruct = {
    status: PromiseOrValue<BigNumberish>;
    client: PromiseOrValue<string>;
    bounty: PromiseOrValue<BigNumberish>;
    expiredAt: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<string>;
  };

  export type PhaseStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    status: number;
    client: string;
    bounty: BigNumber;
    expiredAt: BigNumber;
    data: string;
  };
}

export interface HomeLabInterface extends utils.Interface {
  functions: {
    "createProject(address,string,string)": FunctionFragment;
    "finishPhase(uint256,uint256)": FunctionFragment;
    "getPhase(uint256,uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "permittedTokens(address)": FunctionFragment;
    "projects(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPermittedToken(address,bool)": FunctionFragment;
    "startPhase(uint256,address,uint256,uint256)": FunctionFragment;
    "startProject(uint256,address,uint256,uint256)": FunctionFragment;
    "submitPhase(uint256,uint256,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateProject(uint256,address,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createProject"
      | "finishPhase"
      | "getPhase"
      | "initialize"
      | "owner"
      | "permittedTokens"
      | "projects"
      | "renounceOwnership"
      | "setPermittedToken"
      | "startPhase"
      | "startProject"
      | "submitPhase"
      | "transferOwnership"
      | "updateProject"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProject",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finishPhase",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPhase",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permittedTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "projects",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPermittedToken",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "startPhase",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "startProject",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submitPhase",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProject",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finishPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPhase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permittedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermittedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startPhase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProject",
    data: BytesLike
  ): Result;

  events: {
    "CreatedProject(uint256,tuple)": EventFragment;
    "FinishedPhase(uint256,tuple,uint256,tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetPermittedToken(address,bool)": EventFragment;
    "StartedPhase(uint256,tuple,uint256,tuple)": EventFragment;
    "StartedProject(uint256,tuple,uint256,tuple)": EventFragment;
    "SubmittedPhase(uint256,tuple,uint256,tuple)": EventFragment;
    "UpdatedProject(uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedProject"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FinishedPhase"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPermittedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartedPhase"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartedProject"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubmittedPhase"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedProject"): EventFragment;
}

export interface CreatedProjectEventObject {
  projectId: BigNumber;
  project: HomeLab.ProjectStructOutput;
}
export type CreatedProjectEvent = TypedEvent<
  [BigNumber, HomeLab.ProjectStructOutput],
  CreatedProjectEventObject
>;

export type CreatedProjectEventFilter = TypedEventFilter<CreatedProjectEvent>;

export interface FinishedPhaseEventObject {
  projectId: BigNumber;
  project: HomeLab.ProjectStructOutput;
  phaseId: BigNumber;
  phase: HomeLab.PhaseStructOutput;
}
export type FinishedPhaseEvent = TypedEvent<
  [
    BigNumber,
    HomeLab.ProjectStructOutput,
    BigNumber,
    HomeLab.PhaseStructOutput
  ],
  FinishedPhaseEventObject
>;

export type FinishedPhaseEventFilter = TypedEventFilter<FinishedPhaseEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetPermittedTokenEventObject {
  token: string;
  isPermitted: boolean;
}
export type SetPermittedTokenEvent = TypedEvent<
  [string, boolean],
  SetPermittedTokenEventObject
>;

export type SetPermittedTokenEventFilter =
  TypedEventFilter<SetPermittedTokenEvent>;

export interface StartedPhaseEventObject {
  projectId: BigNumber;
  project: HomeLab.ProjectStructOutput;
  phaseId: BigNumber;
  phase: HomeLab.PhaseStructOutput;
}
export type StartedPhaseEvent = TypedEvent<
  [
    BigNumber,
    HomeLab.ProjectStructOutput,
    BigNumber,
    HomeLab.PhaseStructOutput
  ],
  StartedPhaseEventObject
>;

export type StartedPhaseEventFilter = TypedEventFilter<StartedPhaseEvent>;

export interface StartedProjectEventObject {
  projectId: BigNumber;
  project: HomeLab.ProjectStructOutput;
  phaseId: BigNumber;
  phase: HomeLab.PhaseStructOutput;
}
export type StartedProjectEvent = TypedEvent<
  [
    BigNumber,
    HomeLab.ProjectStructOutput,
    BigNumber,
    HomeLab.PhaseStructOutput
  ],
  StartedProjectEventObject
>;

export type StartedProjectEventFilter = TypedEventFilter<StartedProjectEvent>;

export interface SubmittedPhaseEventObject {
  projectId: BigNumber;
  project: HomeLab.ProjectStructOutput;
  phaseId: BigNumber;
  phase: HomeLab.PhaseStructOutput;
}
export type SubmittedPhaseEvent = TypedEvent<
  [
    BigNumber,
    HomeLab.ProjectStructOutput,
    BigNumber,
    HomeLab.PhaseStructOutput
  ],
  SubmittedPhaseEventObject
>;

export type SubmittedPhaseEventFilter = TypedEventFilter<SubmittedPhaseEvent>;

export interface UpdatedProjectEventObject {
  projectId: BigNumber;
  project: HomeLab.ProjectStructOutput;
}
export type UpdatedProjectEvent = TypedEvent<
  [BigNumber, HomeLab.ProjectStructOutput],
  UpdatedProjectEventObject
>;

export type UpdatedProjectEventFilter = TypedEventFilter<UpdatedProjectEvent>;

export interface HomeLab extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HomeLabInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createProject(
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finishPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[HomeLab.PhaseStructOutput]>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    permittedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
      ] & {
        status: number;
        owner: string;
        paymentToken: string;
        createdAt: BigNumber;
        updatedAt: BigNumber;
        serviceFeePercent: BigNumber;
        lastPhaseId: BigNumber;
        name: string;
        data: string;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPermittedToken(
      _token: PromiseOrValue<string>,
      _isPermitted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _client: PromiseOrValue<string>,
      _expiredAt: PromiseOrValue<BigNumberish>,
      _bounty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _phase1Client: PromiseOrValue<string>,
      _phase1ExpiredAt: PromiseOrValue<BigNumberish>,
      _phase1Bounty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createProject(
    _paymentToken: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _data: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finishPhase(
    _projectId: PromiseOrValue<BigNumberish>,
    _phaseId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPhase(
    _projectId: PromiseOrValue<BigNumberish>,
    _phaseId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<HomeLab.PhaseStructOutput>;

  initialize(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  permittedTokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  projects(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string
    ] & {
      status: number;
      owner: string;
      paymentToken: string;
      createdAt: BigNumber;
      updatedAt: BigNumber;
      serviceFeePercent: BigNumber;
      lastPhaseId: BigNumber;
      name: string;
      data: string;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPermittedToken(
    _token: PromiseOrValue<string>,
    _isPermitted: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startPhase(
    _projectId: PromiseOrValue<BigNumberish>,
    _client: PromiseOrValue<string>,
    _expiredAt: PromiseOrValue<BigNumberish>,
    _bounty: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startProject(
    _projectId: PromiseOrValue<BigNumberish>,
    _phase1Client: PromiseOrValue<string>,
    _phase1ExpiredAt: PromiseOrValue<BigNumberish>,
    _phase1Bounty: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitPhase(
    _projectId: PromiseOrValue<BigNumberish>,
    _phaseId: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateProject(
    _projectId: PromiseOrValue<BigNumberish>,
    _paymentToken: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _data: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createProject(
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    finishPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<HomeLab.PhaseStructOutput>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    permittedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
      ] & {
        status: number;
        owner: string;
        paymentToken: string;
        createdAt: BigNumber;
        updatedAt: BigNumber;
        serviceFeePercent: BigNumber;
        lastPhaseId: BigNumber;
        name: string;
        data: string;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPermittedToken(
      _token: PromiseOrValue<string>,
      _isPermitted: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    startPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _client: PromiseOrValue<string>,
      _expiredAt: PromiseOrValue<BigNumberish>,
      _bounty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _phase1Client: PromiseOrValue<string>,
      _phase1ExpiredAt: PromiseOrValue<BigNumberish>,
      _phase1Bounty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreatedProject(uint256,tuple)"(
      projectId?: null,
      project?: null
    ): CreatedProjectEventFilter;
    CreatedProject(projectId?: null, project?: null): CreatedProjectEventFilter;

    "FinishedPhase(uint256,tuple,uint256,tuple)"(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): FinishedPhaseEventFilter;
    FinishedPhase(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): FinishedPhaseEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SetPermittedToken(address,bool)"(
      token?: PromiseOrValue<string> | null,
      isPermitted?: PromiseOrValue<boolean> | null
    ): SetPermittedTokenEventFilter;
    SetPermittedToken(
      token?: PromiseOrValue<string> | null,
      isPermitted?: PromiseOrValue<boolean> | null
    ): SetPermittedTokenEventFilter;

    "StartedPhase(uint256,tuple,uint256,tuple)"(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): StartedPhaseEventFilter;
    StartedPhase(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): StartedPhaseEventFilter;

    "StartedProject(uint256,tuple,uint256,tuple)"(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): StartedProjectEventFilter;
    StartedProject(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): StartedProjectEventFilter;

    "SubmittedPhase(uint256,tuple,uint256,tuple)"(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): SubmittedPhaseEventFilter;
    SubmittedPhase(
      projectId?: null,
      project?: null,
      phaseId?: null,
      phase?: null
    ): SubmittedPhaseEventFilter;

    "UpdatedProject(uint256,tuple)"(
      projectId?: null,
      project?: null
    ): UpdatedProjectEventFilter;
    UpdatedProject(projectId?: null, project?: null): UpdatedProjectEventFilter;
  };

  estimateGas: {
    createProject(
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finishPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    permittedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPermittedToken(
      _token: PromiseOrValue<string>,
      _isPermitted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _client: PromiseOrValue<string>,
      _expiredAt: PromiseOrValue<BigNumberish>,
      _bounty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _phase1Client: PromiseOrValue<string>,
      _phase1ExpiredAt: PromiseOrValue<BigNumberish>,
      _phase1Bounty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProject(
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finishPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permittedTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPermittedToken(
      _token: PromiseOrValue<string>,
      _isPermitted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _client: PromiseOrValue<string>,
      _expiredAt: PromiseOrValue<BigNumberish>,
      _bounty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _phase1Client: PromiseOrValue<string>,
      _phase1ExpiredAt: PromiseOrValue<BigNumberish>,
      _phase1Bounty: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitPhase(
      _projectId: PromiseOrValue<BigNumberish>,
      _phaseId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateProject(
      _projectId: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
