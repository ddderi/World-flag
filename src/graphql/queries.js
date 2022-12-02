/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPoint = /* GraphQL */ `
  query GetPoint($id: ID!) {
    getPoint(id: $id) {
      id
      score
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listPoints = /* GraphQL */ `
  query ListPoints(
    $filter: ModelPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        score
        owner
        createdAt
        updatedAt
      }
      nextToken
      sorting
    }
  }
`;
