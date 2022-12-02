/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePoint = /* GraphQL */ `
  subscription OnCreatePoint(
    $filter: ModelSubscriptionPointFilterInput
    $owner: String
  ) {
    onCreatePoint(filter: $filter, owner: $owner) {
      id
      score
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePoint = /* GraphQL */ `
  subscription OnUpdatePoint(
    $filter: ModelSubscriptionPointFilterInput
    $owner: String
  ) {
    onUpdatePoint(filter: $filter, owner: $owner) {
      id
      score
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePoint = /* GraphQL */ `
  subscription OnDeletePoint(
    $filter: ModelSubscriptionPointFilterInput
    $owner: String
  ) {
    onDeletePoint(filter: $filter, owner: $owner) {
      id
      score
      owner
      createdAt
      updatedAt
    }
  }
`;
