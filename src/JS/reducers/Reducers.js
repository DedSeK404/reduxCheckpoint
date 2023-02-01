import { list } from "../../Component/data";
import { ADDTODO, DELETETODO, EDITTODO, FILTERTODO } from "../actionTypes/actionTypes";

const initstate = {
  list: list,
  status: 'all'
};

export const Reducer = (state = initstate, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        list: [...state.list, {
          id: state.list.length + 1,
          description: action.payload,
          isDone: false,
        },]
      };
    case DELETETODO:
      return {
        ...state,
        list: state.list.filter((e) => e.id != action.payload)
       };
    case FILTERTODO:
      return {
        ...state,
        status: action.payload,
      };
      case EDITTODO:
      return {
        ...state,
        list: state.list.map((e) => e.id == action.payload.id ? {...e, description: action.payload.newTodo} : e)
      };
    default:
      return state;
  }
};
