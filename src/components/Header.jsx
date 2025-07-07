export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-lg font-semibold">Tasks</h2>
      <div className="flex gap-2">
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded"
          onClick={() => console.log('Add Row clicked')}
        >
          Add Row
        </button>
        <button
          className="px-4 py-1 border border-gray-300 rounded"
          onClick={() => console.log('Export clicked')}
        >
          Export
        </button>
      </div>
    </div>
  );
}
