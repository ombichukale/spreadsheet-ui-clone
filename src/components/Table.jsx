import React from 'react';

const baseData = [
  {
    job: 'Launch social media campaign for product X',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    value: '6,200,000 ₹',
  },
  {
    job: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    value: '3,500,000 ₹',
  },
  {
    job: 'Finalize user testing feedback for app...',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    value: '4,750,000 ₹',
  },
  {
    job: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    value: '5,900,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    value: '2,800,000 ₹',
  },
];

const data = Array.from({ length: 25 }, (_, i) => baseData[i] || {});

const getStatusStyle = (status) => {
  switch (status) {
    case 'In-process':
      return 'bg-yellow-100 text-yellow-800';
    case 'Complete':
      return 'bg-green-100 text-green-800';
    case 'Need to start':
      return 'bg-blue-100 text-blue-800';
    case 'Blocked':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'text-red-600 font-semibold';
    case 'Medium':
      return 'text-yellow-600 font-semibold';
    case 'Low':
      return 'text-blue-600 font-semibold';
    default:
      return 'text-gray-600';
  }
};

export default function Table() {
  return (
    <div className="pt-0 pb-4">
      <div className="border border-gray-200 shadow-sm overflow-x-auto bg-white">
        <table className="min-w-full text-sm text-gray-800 table-fixed border-collapse">
          <thead>
            <tr className="text-xs text-gray-600 font-semibold">
              <th className="pl-0 py-2 w-12 border border-gray-200"></th>
              <th colSpan={5} className="px-2 py-2 text-left border border-gray-200" style={{ background: 'var(--Colours-TrueGrey-200, #E2E2E2)' }}>
                <div className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                  <i data-lucide="link" className="w-4 h-4" />
                  Q3 Financial Overview
                  <i data-lucide="refresh-ccw" className="w-4 h-4 animate-spin-slow" />
                </div>
              </th>
              <th colSpan={1} className="text-left px-2 py-2 bg-[#DCFCE7] text-[#166534] font-semibold border border-gray-200">
                <div className="flex items-center gap-1">
                  <i data-lucide="wand-sparkles" className="w-4 h-4" />
                  ABC
                  <i data-lucide="more-horizontal" className="w-4 h-4" />
                </div>
              </th>
              <th colSpan={2} className="text-left px-2 py-2 bg-[#F3E8FF] text-[#6B21A8] font-semibold border border-gray-200">
                <div className="flex items-center gap-1">
                  <i data-lucide="help-circle" className="w-4 h-4" />
                  Answer a question
                  <i data-lucide="more-horizontal" className="w-4 h-4" />
                </div>
              </th>
              <th colSpan={1} className="text-left px-2 py-2 bg-[#FFEDD5] text-[#9A3412] font-semibold border border-gray-200">
                <div className="flex items-center gap-1">
                  <i data-lucide="archive" className="w-4 h-4" />
                  Extract
                  <i data-lucide="more-horizontal" className="w-4 h-4" />
                </div>
              </th>
              <th className="text-center px-10 py-2 border border-gray-200">
                <i data-lucide="plus" className="w-4 h-4 text-gray-500" />
              </th>
            </tr>

            <tr className="text-left text-xs text-gray-600 font-semibold uppercase">
              <th className="pl-5 py-2 border border-gray-200 w-10 text-lg font-medium">#</th>
              <th className="px-2 py-2 border border-gray-200" style={{ background: 'var(--Colours-TrueGrey-200, #EEEEEE)' }}>
                <i data-lucide="lock" className="w-4 h-4 inline mr-1" />
                Job Request
              </th>
              <th className="px-2 py-2 border border-gray-200" style={{ background: 'var(--Colours-TrueGrey-200, #EEEEEE)' }}>Submitted</th>
              <th className="px-2 py-2 border border-gray-200" style={{ background: 'var(--Colours-TrueGrey-200, #EEEEEE)' }}>Status</th>
              <th className="px-2 py-2 border border-gray-200" style={{ background: 'var(--Colours-TrueGrey-200, #EEEEEE)' }}>Submitter</th>
              <th className="px-2 py-2 border border-gray-200" style={{ background: 'var(--Colours-TrueGrey-200, #EEEEEE)' }}>
                <i data-lucide="globe" className="w-4 h-4 inline mr-1" />
                URL
              </th>
              <th className="px-2 py-2 border border-gray-200 bg-green-50 text-green-700">Assigned</th>
              <th className="px-2 py-2 border border-gray-200 bg-purple-50 text-purple-700">Priority</th>
              <th className="px-2 py-2 border border-gray-200 bg-purple-50 text-purple-700">Due Date</th>
              <th className="px-2 py-2 border border-gray-200 bg-orange-50 text-orange-700">Est. Value</th>
              <th className="px-10 py-2 border border-gray-200"></th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="even:bg-gray-50 hover:bg-gray-100 transition">
                <td className="pl-0 py-2 border border-gray-200 text-center w-12 font-medium">{idx + 1}</td>
                <td className="px-2 py-2 border border-gray-200 font-normal">{row.job || ''}</td>
                <td className="px-2 py-2 border border-gray-200 font-normal">{row.submitted || ''}</td>
                <td className="px-2 py-2 border border-gray-200 font-normal">
                  {row.status && (
                    <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(row.status)}`}>{row.status}</span>
                  )}
                </td>
                <td className="px-2 py-2 border border-gray-200 font-normal">{row.submitter || ''}</td>
                <td className="px-2 py-2 border border-gray-200 font-normal">
                  {row.url && (
                    <a href={`https://${row.url}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                      {row.url}
                    </a>
                  )}
                </td>
                <td className="px-2 py-2 border border-gray-200 font-normal">{row.assigned || ''}</td>
                <td className={`px-2 py-2 border border-gray-200 font-normal ${getPriorityColor(row.priority)}`}>{row.priority || ''}</td>
                <td className="px-2 py-2 border border-gray-200 font-normal">{row.dueDate || ''}</td>
                <td className="px-2 py-2 border border-gray-200 font-normal">{row.value || ''}</td>
                <td className="px-10 py-2 border border-gray-200"></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Bottom Tab Bar */}
        <div className="flex items-center px-4 py-2 bg-white border-t border-gray-300 text-sm font-medium">
          <button className="px-4 py-2 border-b-2 border-green-700 text-green-700 bg-[#E6ECE7] rounded-t-md">
            All Orders
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-black">Pending</button>
          <button className="px-4 py-2 text-gray-600 hover:text-black">Reviewed</button>
          <button className="px-4 py-2 text-gray-600 hover:text-black">Arrived</button>
          <button className="px-4 py-2 text-gray-600 hover:text-black">＋</button>
        </div>

      </div>
    </div>
  );
}
