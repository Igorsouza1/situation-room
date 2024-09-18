/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInitialGeometryInput = {
  type?: string | null,
  name?: string | null,
  size?: string | null,
  crs?: string | null,
  geometry?: string | null,
  id?: string | null,
};

export type ModelInitialGeometryConditionInput = {
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelStringInput | null,
  crs?: ModelStringInput | null,
  geometry?: ModelStringInput | null,
  and?: Array< ModelInitialGeometryConditionInput | null > | null,
  or?: Array< ModelInitialGeometryConditionInput | null > | null,
  not?: ModelInitialGeometryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type InitialGeometry = {
  __typename: "InitialGeometry",
  type?: string | null,
  name?: string | null,
  size?: string | null,
  crs?: string | null,
  geometry?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInitialGeometryInput = {
  type?: string | null,
  name?: string | null,
  size?: string | null,
  crs?: string | null,
  geometry?: string | null,
  id: string,
};

export type DeleteInitialGeometryInput = {
  id: string,
};

export type ModelInitialGeometryFilterInput = {
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelStringInput | null,
  crs?: ModelStringInput | null,
  geometry?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInitialGeometryFilterInput | null > | null,
  or?: Array< ModelInitialGeometryFilterInput | null > | null,
  not?: ModelInitialGeometryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelInitialGeometryConnection = {
  __typename: "ModelInitialGeometryConnection",
  items:  Array<InitialGeometry | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionInitialGeometryFilterInput = {
  type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  size?: ModelSubscriptionStringInput | null,
  crs?: ModelSubscriptionStringInput | null,
  geometry?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInitialGeometryFilterInput | null > | null,
  or?: Array< ModelSubscriptionInitialGeometryFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateInitialGeometryMutationVariables = {
  input: CreateInitialGeometryInput,
  condition?: ModelInitialGeometryConditionInput | null,
};

export type CreateInitialGeometryMutation = {
  createInitialGeometry?:  {
    __typename: "InitialGeometry",
    type?: string | null,
    name?: string | null,
    size?: string | null,
    crs?: string | null,
    geometry?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInitialGeometryMutationVariables = {
  input: UpdateInitialGeometryInput,
  condition?: ModelInitialGeometryConditionInput | null,
};

export type UpdateInitialGeometryMutation = {
  updateInitialGeometry?:  {
    __typename: "InitialGeometry",
    type?: string | null,
    name?: string | null,
    size?: string | null,
    crs?: string | null,
    geometry?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInitialGeometryMutationVariables = {
  input: DeleteInitialGeometryInput,
  condition?: ModelInitialGeometryConditionInput | null,
};

export type DeleteInitialGeometryMutation = {
  deleteInitialGeometry?:  {
    __typename: "InitialGeometry",
    type?: string | null,
    name?: string | null,
    size?: string | null,
    crs?: string | null,
    geometry?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInitialGeometryQueryVariables = {
  id: string,
};

export type GetInitialGeometryQuery = {
  getInitialGeometry?:  {
    __typename: "InitialGeometry",
    type?: string | null,
    name?: string | null,
    size?: string | null,
    crs?: string | null,
    geometry?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInitialGeometriesQueryVariables = {
  filter?: ModelInitialGeometryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInitialGeometriesQuery = {
  listInitialGeometries?:  {
    __typename: "ModelInitialGeometryConnection",
    items:  Array< {
      __typename: "InitialGeometry",
      type?: string | null,
      name?: string | null,
      size?: string | null,
      crs?: string | null,
      geometry?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInitialGeometrySubscriptionVariables = {
  filter?: ModelSubscriptionInitialGeometryFilterInput | null,
};

export type OnCreateInitialGeometrySubscription = {
  onCreateInitialGeometry?:  {
    __typename: "InitialGeometry",
    type?: string | null,
    name?: string | null,
    size?: string | null,
    crs?: string | null,
    geometry?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInitialGeometrySubscriptionVariables = {
  filter?: ModelSubscriptionInitialGeometryFilterInput | null,
};

export type OnUpdateInitialGeometrySubscription = {
  onUpdateInitialGeometry?:  {
    __typename: "InitialGeometry",
    type?: string | null,
    name?: string | null,
    size?: string | null,
    crs?: string | null,
    geometry?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInitialGeometrySubscriptionVariables = {
  filter?: ModelSubscriptionInitialGeometryFilterInput | null,
};

export type OnDeleteInitialGeometrySubscription = {
  onDeleteInitialGeometry?:  {
    __typename: "InitialGeometry",
    type?: string | null,
    name?: string | null,
    size?: string | null,
    crs?: string | null,
    geometry?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
