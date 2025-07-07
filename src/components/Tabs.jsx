import { useState } from 'react';
import { Plus } from 'lucide-react'; // Optional: use any icon library or text "+"

// Tab labels
const tabs = ['My Tasks', 'Inbox', 'Upcoming', 'Later'];

// Dummy row data for each tab
const data = {
  'My Tasks': Array.from({ length: 25 }, (_, i) => `My Task Row ${i + 1}`),
  'Inbox': Array.from({ length: 25 }, (_, i) => `Inbox Row ${i + 1}`),
  'Upcoming': Array.from({ length: 25 }, (_, i) => `Upcoming Row ${i + 1}`),
  'Later': Array.from({ length: 25 }, (_, i) => `Later Row ${i + 1}`),
};

export default function Tabs() {
  const [active, setActive] = useState('My Tasks');

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {/* Tab Header */}
      <div className="flex items-center gap-6 px-4 py-3 border-b bg-white">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-sm pb-1 border-b-2 transition-all ${
              active === tab
                ? 'border-green-700 text-green-800 font-semibold'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}

        {/* + Add Tab Button */}
        <button
          className="text-xl text-gray-400 hover:text-black pb-1 ml-auto"
          onClick={() => alert('Add new tab functionality')}
        >
          +
        </button>
      </div>

      {/* Table Rows */}
      <div className="grid grid-cols-1 border-x border-b bg-white">
        {data[active].map((row, index) => (
          <div
            key={index}
            className="border-b text-sm text-gray-700 px-4 py-2 hover:bg-gray-50"
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
