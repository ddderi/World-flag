/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPoint = /* GraphQL */ `
  query GetPoint($id: ID!) {
    getPoint(id: $id) {
      id
      score
      owner
      typedate
      typescore
      updatedAt
      createdAt
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
        typedate
        typescore
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const sortByDate = /* GraphQL */ `
  query SortByDate(
    $typedate: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortByDate(
      typedate: $typedate
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        score
        owner
        typedate
        typescore
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const sortByScore = /* GraphQL */ `
  query SortByScore(
    $typescore: String!
    $score: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortByScore(
      typescore: $typescore
      score: $score
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        score
        owner
        typedate
        typescore
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const searchPoints = /* GraphQL */ `
  query SearchPoints(
    $filter: SearchablePointFilterInput
    $sort: [SearchablePointSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePointAggregationInput]
  ) {
    searchPoints(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        score
        owner
        typedate
        typescore
        updatedAt
        createdAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
