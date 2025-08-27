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
    <div className="p-4 m-auto flex flex-col gap-2 w-fit items-center ">
      <div className="w-full flex justify-end mb-3">
        <button
          onClick={toggleDialog}
          className="bg-green-600 text-white px-4 py-2 text-sm rounded-lg shadow hover:bg-green-700 transition"
        >
          Seleccionar Columnas
        </button>
      </div>

      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md">
        <table className="min-w-[720px] w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              {allColumns
                .filter((col) => visibleColumns.includes(col.key))
                .map((col, index, array) => (
                  <th
                    key={col.key}
                    className={`text-gray-800 text-sm font-medium border-b border-gray-300 px-6 py-2 ${col.key === "nombre" || col.key === "categoria" ? "text-left" : "text-right"} ${
                      index === 0 ? "rounded-tl-2xl" : ""
                    } ${index === array.length - 1 ? "rounded-tr-2xl" : ""}`}
                  >
                    {col.label}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {devices && devices.length > 0 ? (
              devices.map((dispositivo, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t hover:bg-gray-50 transition-colors border-gray-200"
                >
                  {allColumns
                    .filter((col) => visibleColumns.includes(col.key))
                    .map((col, colIndex, arr) => (
                      <td
                        key={col.key}
                        className={`text-gray-700 text-sm font-normal px-6 py-2 ${
                          typeof dispositivo[col.key] === "number"
                            ? "text-right"
                            : "text-left"
                        } ${
                          rowIndex === devices.length - 1 && colIndex === 0
                            ? "rounded-bl-2xl"
                            : ""
                        } ${
                          rowIndex === devices.length - 1 && colIndex === arr.length - 1
                            ? "rounded-br-2xl"
                            : ""
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
                  className="px-4 py-4 text-center text-gray-500 italic rounded-b-2xl"
                >
                  No hay dispositivos para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

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
