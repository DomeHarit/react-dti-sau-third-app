import React, { useState } from 'react';

// Data constants for options
const GENDERS = ['ชาย', 'หญิง', 'LGBTQ+'];
const PROVINCES = [
  'กรุงเทพ',
  'เชียงใหม่',
  'เชียงราย',
  'ภูเก็ต',
  'นครพนม',
];

/**
 * Main application component named PageF, exported as App.
 */
export default function App() {
  // --- State for Inputs ---
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [province, setProvince] = useState('');

  // --- State for Displayed Data ---
  // This state only updates when 'Show Data' is clicked
  const [displayedData, setDisplayedData] = useState({
    name: '-',
    age: '-',
    gender: '-',
    province: '-',
  });

  /**
   * Handles the 'Show Data' button click.
   * Prevents form submission and updates the displayedData state.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayedData({
      name: name || '-',
      age: age || '-',
      gender: gender || '-',
      province: province || '-',
    });
  };

  /**
   * Handles the 'Clear Data' button click.
   * Resets all input fields and the displayed data.
   */
  const handleClear = () => {
    setName('');
    setAge('');
    setGender('');
    setProvince('');
    setDisplayedData({
      name: '-',
      age: '-',
      gender: '-',
      province: '-',
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-white p-6 sm:p-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            ฟอร์มข้อมูล (PageF)
          </h1>
          <p className="text-center text-gray-500 mt-2">
            กรุณากรอกรายละเอียดด้านล่าง
          </p>
        </div>

        <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:space-x-8">
          {/* --- Input Form --- */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ชื่อ-สกุล
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="เช่น สมชาย ใจดี"
              />
            </div>

            {/* Age Input */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                อายุ
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="เช่น 25"
              />
            </div>

            {/* Gender Radio Buttons */}
            <div>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                เพศ
              </legend>
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                {GENDERS.map((gen) => (
                  <div key={gen} className="flex items-center">
                    <input
                      type="radio"
                      id={`gender-${gen}`}
                      name="gender"
                      value={gen}
                      checked={gender === gen}
                      onChange={(e) => setGender(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor={`gender-${gen}`}
                      className="ml-2 block text-sm text-gray-900"
                    >
                      {gen}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Province Select */}
            <div>
              <label
                htmlFor="province"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                จังหวัด
              </label>
              <select
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
              >
                <option value="" disabled>
                  -- เลือกจังหวัด --
                </option>
                {PROVINCES.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 transform hover:scale-105"
              >
                แสดงข้อมูล
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-200 transform hover:scale-105"
              >
                ล้างข้อมูล
              </button>
            </div>
          </form>

          {/* --- Display Area --- */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <div className="bg-gray-50 h-full p-6 rounded-lg shadow-inner border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-5 border-b border-gray-300 pb-3">
                ผลลัพธ์ข้อมูล
              </h2>
              <div className="space-y-5">
                <DataItem
                  label="ชื่อ-สกุล"
                  value={displayedData.name}
                />
                <DataItem label="อายุ" value={displayedData.age} />
                <DataItem label="เพศ" value={displayedData.gender} />
                <DataItem
                  label="จังหวัด"
                  value={displayedData.province}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * A helper component to display a single data item.
 * @param {object} props - Component props.
 * @param {string} props.label - The label for the data item.
 * @param {string} props.value - The value of the data item.
 */
function DataItem({ label, value }) {
  return (
    <div>
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </div>
      <div className="text-xl font-semibold text-blue-800 mt-1 truncate">
        {value}
      </div>
    </div>
  );
}
