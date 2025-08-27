// ListTable.jsx
import React, { useState } from "react";
import ColumnSelectorDialog from "./ColumnSelectorDialog";

const ListTable = ({ devices }) => {
  const allColumns = [
    { key: "nombre", label: "Nombre" },
    { key: "categoria", label: "Categoría" },
    { key: "total", label: "Total" },
    { key: "ultimoMes", label: "Último Mes" },
    { key: "ultimaSemana", label: "Última Semana" },
    { key: "promedioMes", label: "Promedio Mes" },
    { key: "promedioSemana", label: "Promedio Semana" },
  ];

  const [visibleColumns, setVisibleColumns] = useState(
    allColumns.map((c) => c.key) // por defecto todas visibles
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  return (
    <div className="p-4">
      <div className="flex justify-end mb-3">
        <button
          onClick={toggleDialog}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Seleccionar Columnas
        </button>
      </div>

      <table className="min-w-full border border-gray-300 rounded-2xl overflow-hidden shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {allColumns
              .filter((col) => visibleColumns.includes(col.key))
              .map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-2 text-left"
                >
                  {col.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {devices && devices.length > 0 ? (
            devices.map((dispositivo, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                {allColumns
                  .filter((col) => visibleColumns.includes(col.key))
                  .map((col) => (
                    <td
                      key={col.key}
                      className={`px-4 py-2 ${
                        typeof dispositivo[col.key] === "number"
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      {dispositivo[col.key]}
                    </td>
                  ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={visibleColumns.length}
                className="px-4 py-4 text-center text-gray-500 italic"
              >
                No hay dispositivos para mostrar
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Diálogo para seleccionar columnas */}
      {isDialogOpen && (
        <ColumnSelectorDialog
          allColumns={allColumns}
          visibleColumns={visibleColumns}
          setVisibleColumns={setVisibleColumns}
          onClose={toggleDialog}
        />
      )}
    </div>
  );
};

export default ListTable;
