// ColumnSelectorDialog.jsx
import React from "react";

const ColumnSelectorDialog = ({
  allColumns,
  visibleColumns,
  setVisibleColumns,
  onClose,
}) => {
  const toggleColumn = (key) => {
    if (visibleColumns.includes(key)) {
      setVisibleColumns(visibleColumns.filter((col) => col !== key));
    } else {
      setVisibleColumns([...visibleColumns, key]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6">
        <h2 className="text-lg font-semibold mb-4">
          Selecciona las columnas a mostrar
        </h2>
        <div className="space-y-2">
          {allColumns.map((col) => (
            <label key={col.key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={visibleColumns.includes(col.key)}
                onChange={() => toggleColumn(col.key)}
                className="w-4 h-4"
              />
              <span>{col.label}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColumnSelectorDialog;
