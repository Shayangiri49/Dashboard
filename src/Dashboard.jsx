
import React, { useContext, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { state, dispatch } = useContext(DashboardContext);
  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const [categoryId, setCategoryId] = useState(state.categories[0].id);
  const [searchTerm, setSearchTerm] = useState(""); // Add search term state

  const addWidget = () => {
    dispatch({
      type: "ADD_WIDGET",
      payload: { categoryId, name: widgetName, content: widgetContent },
    });
    setWidgetName("");
    setWidgetContent("");
  };

  const removeWidget = (categoryId, widgetId) => {
    dispatch({
      type: "REMOVE_WIDGET",
      payload: { categoryId, widgetId },
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = state.categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>CNAPP Dashboard</h1>
        <div className="search-widget">
          <input
            type="text"
            placeholder="Search Widgets..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="add-widget">
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(Number(e.target.value))}
          >
            {state.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Widget Content"
            value={widgetContent}
            onChange={(e) => setWidgetContent(e.target.value)}
          />
          <button onClick={addWidget}>Add Widget</button>
        </div>
      </div>
      <div className="categories">
        {filteredCategories.map((category) => (
          <div key={category.id} className="category">
            <h2>{category.name}</h2>
            {category.widgets.length > 0 ? (
              category.widgets.map((widget) => (
                <div key={widget.id} className="widget">
                  <div>
                    <p><strong>{widget.name}</strong></p>
                    <p>{widget.content}</p>
                  </div>
                  <button onClick={() => removeWidget(category.id, widget.id)}>
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>No widgets found.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
