// TableList.js
import React from "react";

const TableList = () => {
  const tablesData = [
    { tableNumber: 1, itemsOrdered: 3, timePeriod: "6:38" },
    { tableNumber: 2, itemsOrdered: 0, timePeriod: "2:10" },
    { tableNumber: 1, itemsOrdered: 3, timePeriod: "6:38" },
    { tableNumber: 2, itemsOrdered: 0, timePeriod: "2:10" },
    { tableNumber: 1, itemsOrdered: 3, timePeriod: "6:38" },
    { tableNumber: 2, itemsOrdered: 0, timePeriod: "2:10" },
    { tableNumber: 1, itemsOrdered: 3, timePeriod: "6:38" },
    { tableNumber: 2, itemsOrdered: 0, timePeriod: "2:10" },
    { tableNumber: 1, itemsOrdered: 3, timePeriod: "6:38" },
    { tableNumber: 2, itemsOrdered: 0, timePeriod: "2:10" },
    { tableNumber: 1, itemsOrdered: 3, timePeriod: "6:38" },
    { tableNumber: 2, itemsOrdered: 0, timePeriod: "2:10" },
    // Add more table data as needed
  ];

  return (
    <div className="max-w-screen-md mr-auto flex flex-wrap justify-center gap-4 mt-8">
      {tablesData.map((table, index) => (
        <div
          key={index}
          className="w-48 bg-green-500 text-white p-2  rounded-lg shadow-md relative"
        >
          <div className="flex justify-between">
            <span className="text-xl font-semibold mb-2">
              Table {table.tableNumber}
            </span>
            <span className="text-sm font-semibold">{table.timePeriod}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">
              Ordered {table.itemsOrdered} items
            </span>
          </div>
          {/* You can add more details or actions here */}
        </div>
      ))}
    </div>
  );
};

export default TableList;
