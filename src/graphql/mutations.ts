/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createInitialGeometry = /* GraphQL */ `mutation CreateInitialGeometry(
  $input: CreateInitialGeometryInput!
  $condition: ModelInitialGeometryConditionInput
) {
  createInitialGeometry(input: $input, condition: $condition) {
    type
    name
    size
    crs
    geometry
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInitialGeometryMutationVariables,
  APITypes.CreateInitialGeometryMutation
>;
export const updateInitialGeometry = /* GraphQL */ `mutation UpdateInitialGeometry(
  $input: UpdateInitialGeometryInput!
  $condition: ModelInitialGeometryConditionInput
) {
  updateInitialGeometry(input: $input, condition: $condition) {
    type
    name
    size
    crs
    geometry
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInitialGeometryMutationVariables,
  APITypes.UpdateInitialGeometryMutation
>;
export const deleteInitialGeometry = /* GraphQL */ `mutation DeleteInitialGeometry(
  $input: DeleteInitialGeometryInput!
  $condition: ModelInitialGeometryConditionInput
) {
  deleteInitialGeometry(input: $input, condition: $condition) {
    type
    name
    size
    crs
    geometry
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInitialGeometryMutationVariables,
  APITypes.DeleteInitialGeometryMutation
>;
