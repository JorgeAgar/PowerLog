export function Movement({ name, value }) {
  return (
    <div className="inline-flex flex-col items-start justify-start border-gray-700 border-2 text-gray-700 rounded-2xl p-2 bg-gray-200 shadow-sm max-w-max">
      <p className="text-xs font-medium">{name}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
