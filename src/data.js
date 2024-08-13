// src/data.js

export const dashboardData = {
    categories: [
      {
        id: 1,
        name: "CSPM Executive Dashboard",
        widgets: [
          { id: 1, name: "Cloud Accounts", content: "Connected (2), Not Connected (2)" },
          { id: 2, name: "Cloud Account Risk Assessment", content: "Failed (1689), Warning (681), Passed (7253), Not available (36)" },
        ],
      },
      {
        id: 2,
        name: "CWPP Dashboard",
        widgets: [
          { id: 3, name: "Top 5 Namespace Specific Alerts", content: "No Graph data available!" },
          { id: 4, name: "Workload Alerts", content: "No Graph data available!" },
        ],
      },
      {
        id: 3,
        name: "Registry Scan",
        widgets: [
          { id: 5, name: "Image Risk Assessment", content: "1470 Total Vulnerabilities" },
          { id: 6, name: "Image Security Issues", content: "2 Total Images" },
        ],
      },
    ],
  };
  