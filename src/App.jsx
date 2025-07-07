import { useEffect } from 'react';
//import Header from './components/Header';
import Table from './components/Table';


export default function App() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* === Top Header === */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b text-sm">
        {/* Breadcrumb */}
        <div className="text-gray-600 flex gap-2 items-center">
          <span className="text-gray-400">Workspace &gt; Folder 2 &gt;</span>
          <span className="font-semibold text-gray-800">Spreadsheet 3</span>
        </div>

        {/* Right: Search + Bell + User */}
        <div className="flex items-center gap-4">
          {/* Search input with icon */}
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">
              <i data-lucide="search" className="w-4 h-4"></i>
            </span>
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-9 pr-3 py-1 rounded bg-gray-100 border text-sm outline-none"
            />
          </div>

          {/* Notification bell with badge */}
          <div className="relative">
            <i data-lucide="bell" className="w-5 h-5 text-gray-600"></i>
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] px-1 rounded-full">
              2
            </span>
          </div>

          {/* User profile section */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/32?u=3"
              alt="John Doe"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm leading-tight hidden sm:block">
              <div className="text-gray-800 font-medium">John Doe</div>
              <div className="text-gray-500 text-xs">john.doe@email.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* === Toolbar Row === */}
      <div className="flex justify-between items-center px-4 py-2 bg-white text-sm border-b w-full">
        {/* Left side: toolbar controls */}
        <div className="flex items-center gap-6 text-gray-700">
          <div className="flex items-center gap-1 font-medium">
            <span>Tool bar</span>
            <i data-lucide="chevron-right" className="w-4 h-4"></i>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <i data-lucide="eye-off" className="w-4 h-4"></i>
              <span>Hide fields</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <i data-lucide="arrow-up-down" className="w-4 h-4"></i>
              <span>Sort</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <i data-lucide="filter" className="w-4 h-4"></i>
              <span>Filter</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <i data-lucide="expand" className="w-4 h-4"></i>
              <span>Cell view</span>
            </div>
          </div>
        </div>

        {/* Right side: Action Buttons with Icons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100">
            <i data-lucide="download" className="w-4 h-4"></i>
            Import
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100">
            <i data-lucide="upload" className="w-4 h-4"></i>
            Export
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100">
            <i data-lucide="share-2" className="w-4 h-4"></i>
            Share
          </button>
         <button className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white bg-[#4B6A4F] rounded hover:opacity-90">
  <i data-lucide="plus-circle" className="w-4 h-4"></i>
  New Action
</button>

        </div>
      </div>

      {/* === Section Title + Table === */}
      {/* <Header /> */}
      <Table />
    </div>
  );
}
