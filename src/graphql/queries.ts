/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInitialGeometry = /* GraphQL */ `query GetInitialGeometry($id: ID!) {
  getInitialGeometry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInitialGeometryQueryVariables,
  APITypes.GetInitialGeometryQuery
>;
export const listInitialGeometries = /* GraphQL */ `query ListInitialGeometries(
  $filter: ModelInitialGeometryFilterInput
  $limit: Int
  $nextToken: String
) {
  listInitialGeometries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInitialGeometriesQueryVariables,
  APITypes.ListInitialGeometriesQuery
>;
