/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateInitialGeometry = /* GraphQL */ `subscription OnCreateInitialGeometry(
  $filter: ModelSubscriptionInitialGeometryFilterInput
) {
  onCreateInitialGeometry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInitialGeometrySubscriptionVariables,
  APITypes.OnCreateInitialGeometrySubscription
>;
export const onUpdateInitialGeometry = /* GraphQL */ `subscription OnUpdateInitialGeometry(
  $filter: ModelSubscriptionInitialGeometryFilterInput
) {
  onUpdateInitialGeometry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInitialGeometrySubscriptionVariables,
  APITypes.OnUpdateInitialGeometrySubscription
>;
export const onDeleteInitialGeometry = /* GraphQL */ `subscription OnDeleteInitialGeometry(
  $filter: ModelSubscriptionInitialGeometryFilterInput
) {
  onDeleteInitialGeometry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInitialGeometrySubscriptionVariables,
  APITypes.OnDeleteInitialGeometrySubscription
>;
