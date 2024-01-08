import { ReactNode, createContext, useReducer } from "react";

export const todoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TTodoProviderProps = {
  children: ReactNode;
};

type TAction = {
  type: "addTodo" | "taskCompleted";
  payload: TTodo | string;
};

const typeConstant = {
  ADD_TASK: "addTodo",
  TASK_COMPLETED: "taskCompleted",
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstant.ADD_TASK:
      return [...currentState, action.payload];
    case typeConstant.TASK_COMPLETED:
      return currentState.map((item) =>
        item.id == action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoProvider;
