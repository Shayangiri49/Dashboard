import { createContext, useReducer } from "react";
import { dashboardData } from "./data";

const DashboardContext = createContext();

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [
                  ...category.widgets,
                  {
                    id: Date.now(),
                    name: action.payload.name,
                    content: action.payload.content,
                  },
                ],
              }
            : category
        ),
      };
    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
};

const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, dashboardData);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
