import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"


const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

export const increase = createAction(INCREASE, number => number)
export const decrease = createAction(DECREASE, number => number)

// export const increase = number => ({
//   type: INCREASE,
//   payload: number
// })
// export const decrease = number => ({
//   type: DECREASE,
//   payload: number
// })

const initialState = {
  number: 0
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { number: action.payload }
//     case "DECREASE":
//       return { number: action.payload }
//     default:
//       return state
//   }
// }

// export default reducer

export default handleActions({
  [INCREASE]: (state, action) =>
    produce(state, draft => {
      draft.number = action.payload
    }),
  [DECREASE]: (state, action) =>
    produce(state, draft => {
      draft.number = action.payload
    })
}, initialState)