import { v4 as uuidv4 } from "uuid";
import { list } from "../../Component/data";
import {
  ADDTODO,
  CHECKTODO,
  DELETETODO,
  EDITTODO,
  FILTERTODO,
} from "../actionTypes/actionTypes";

const initstate = {
  list: list,
  status: "all",
};

export const Reducer = (state = initstate, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: uuidv4(),
            description: action.payload,
            isDone: false,
          },
        ],
      };
    case DELETETODO:
      return {
        ...state,
        list: state.list.filter((e) => e.id != action.payload),
      };
    case FILTERTODO:
      return {
        ...state,
        status: action.payload,
      };
    case EDITTODO:
      return {
        ...state,
        list: state.list.map((e) =>
          e.id == action.payload.id
            ? { ...e, description: action.payload.description,
              isDone: action.payload.isDoneEdit, }
            : e
        ),
      };
      case CHECKTODO:
      return {
        ...state,
        list: state.list.map((e) =>
          e.id == action.payload.id
            ? 
            {...e, isDone: !action.payload.isDone }
            : e
        ),
      };
    default:
      return state;
  }
};
