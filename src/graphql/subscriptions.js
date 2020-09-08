/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      email
      phoneNumber
      isActive
      role
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      email
      phoneNumber
      isActive
      role
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      email
      phoneNumber
      isActive
      role
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      title
      body
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      title
      body
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      title
      body
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      user
      item {
        id
        title
        body
        isActive
        createdAt
        updatedAt
      }
      messages {
        body
        fromUser
        created_at
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      user
      item {
        id
        title
        body
        isActive
        createdAt
        updatedAt
      }
      messages {
        body
        fromUser
        created_at
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      user
      item {
        id
        title
        body
        isActive
        createdAt
        updatedAt
      }
      messages {
        body
        fromUser
        created_at
      }
      createdAt
      updatedAt
    }
  }
`;
