import { ADDTODO, CHECKTODO, DELETETODO, EDITTODO, FILTERTODO } from "../actionTypes/actionTypes";

  
  export const deletetodo = (id) => {
    return {
      type: DELETETODO,
      payload: id
    };
  };
  export const addtodo = (description) => {
    return {
      type: ADDTODO,
      payload: description
    };
  };
  
  export const filtertodo = (text) => {
    return {
      type: FILTERTODO,
      payload: text,
    };
  };
  
  export const edittodo = (id, title, isDoneEdit) => {
    return {
      type: EDITTODO,
      payload: {id, title, isDoneEdit }
    };
  };
  export const checktodo = (id,isDone) => {
    return {
      type: CHECKTODO,
      payload: {id, isDone}
    };
  };
  