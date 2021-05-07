import { createAction } from '@reduxjs/toolkit'

export const addToCart = createAction('shoes/addToCart', function prepare(itemID) {
  return {
    payload: {
      id: itemID
    },
  }
})

export const removeFromCart = createAction('shoes/removeFromCart', function prepare(itemID) {
    return {
      payload: {
        id: itemID
      },
    }
  })

  export const adjustQty = createAction('shoes/adjustQty', function prepare(itemID, value) {
    return {
      payload: {
        id: itemID,
        quantity: value,
      },
    }
  })

export const loadCurrentItem = createAction('shoes/loadCurrentItem', function prepare(item) {
    return {
      payload: item,
    }
})
