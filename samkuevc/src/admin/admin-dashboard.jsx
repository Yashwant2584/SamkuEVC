import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaBoxes,
  FaWarehouse,
  FaBox,
  FaCalendarCheck,
  FaBell,
  FaChargingStation,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
// import NewItem from '../components/NewItem';
import Recruitment from "./recruitment";

const Dashboard = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeContent, setActiveContent] = useState('dashboard');
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const setContent = (content) => {
    setActiveContent(content);
    setIsAddingItem(false);
  };

  const handleAddNewItem = () => {
    setIsAddingItem(true);
  };

  const handleCancelAddItem = () => {
    setIsAddingItem(false);
  };

  const stockData = [
    { id: 1, itemCode: 'EV001', itemName: 'Charging Cable Type 2', category: 'Cables', quantity: 25, unit: 'Pcs', rate: 1200 },
    { id: 2, itemCode: 'EV002', itemName: 'Wall Charger 7.4kW', category: 'Chargers', quantity: 15, unit: 'Pcs', rate: 8500 },
    { id: 3, itemCode: 'EV003', itemName: 'Portable Charger 3.3kW', category: 'Chargers', quantity: 10, unit: 'Pcs', rate: 4500 },
    { id: 4, itemCode: 'EV004', itemName: 'Charging Station Mount', category: 'Accessories', quantity: 30, unit: 'Pcs', rate: 2200 },
    { id: 5, itemCode: 'EV005', itemName: 'EV Battery Pack', category: 'Batteries', quantity: 5, unit: 'Pcs', rate: 35000 },
  ];

  const renderContent = () => {
    if (isAddingItem) {
      return <NewItem onCancel={handleCancelAddItem} />;
    }

    switch (activeContent) {
      case 'dashboard':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
                <p className="text-3xl font-bold">₹125,000</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Total Inventory</h3>
                <p className="text-3xl font-bold">85 items</p>
                <p className="text-sm text-blue-600">5 categories</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
                <p className="text-3xl font-bold">24</p>
                <p className="text-sm text-orange-600">12 pending</p>
              </div>
            </div>
          </div>
        );
      case 'salesInvoice':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Sales Invoice</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Search invoices..." 
                  className="w-full p-2 border rounded"
                />
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">INV-001</td>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-03-15</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹12,500</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Paid</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">INV-002</td>
                    <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-03-14</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹8,750</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'purchaseInvoice':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Purchase Invoice</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Search purchase invoices..." 
                  className="w-full p-2 border rounded"
                />
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">PUR-001</td>
                    <td className="px-6 py-4 whitespace-nowrap">EV Supplies Ltd.</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-03-10</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹45,000</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Received</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">PUR-002</td>
                    <td className="px-6 py-4 whitespace-nowrap">Charging Solutions Inc.</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-03-05</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹32,800</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">In Transit</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'stock':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Stock Management</h2>
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 flex justify-between items-center border-b">
                <div>
                  <h3 className="text-lg font-semibold">Current Stock</h3>
                  <p className="text-sm text-gray-500">Manage your inventory items</p>
                </div>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={handleAddNewItem}
                >
                  + Add New Item
                </button>
              </div>
              
              <div className="p-4 flex flex-wrap gap-4 border-b">
                <div className="flex-1 min-w-[200px]">
                  <input 
                    type="text" 
                    placeholder="Search items..." 
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="flex-1 min-w-[200px]">
                  <select className="w-full p-2 border rounded">
                    <option value="">All Categories</option>
                    <option value="cables">Cables</option>
                    <option value="chargers">Chargers</option>
                    <option value="accessories">Accessories</option>
                    <option value="batteries">Batteries</option>
                  </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <select className="w-full p-2 border rounded">
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="quantity">Quantity</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate (₹)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stockData.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{item.itemCode}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.quantity > 20 ? 'bg-green-100 text-green-800' : 
                            item.quantity > 10 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {item.quantity}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.unit}</td>
                        <td className="px-6 py-4 whitespace-nowrap">₹{item.rate.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Showing {stockData.length} of {stockData.length} items
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border rounded bg-gray-50 text-gray-600">Previous</button>
                  <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
                  <button className="px-3 py-1 border rounded bg-gray-50 text-gray-600">Next</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'item':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Item Management</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="mb-4 flex justify-between">
                <h3 className="text-lg font-semibold">Item List</h3>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={handleAddNewItem}
                >
                  + Add New Item
                </button>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate (₹)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stockData.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{item.itemCode}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap">₹{item.rate.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'chargingStations':
        return <Recruitment />;
      case 'franchises':
        return <Recruitment />;
      case 'careers':
        return <Recruitment />;
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold">Select an option from the sidebar</h2>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-['Roboto',sans-serif]">
      {/* Left Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg fixed h-screen overflow-hidden">
        <div className="p-4 border-b border-gray-700/50 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <FaBell className="text-lg" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {notifications}
                </span>
              )}
            </button>
          </div>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="mb-1">
              <button
                className={`flex items-center w-full px-4 py-2 text-left ${
                  activeContent === "dashboard" ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
                onClick={() => setContent("dashboard")}
              >
                <FaChartLine className="mr-2" />
                <span>Dashboard</span>
              </button>
            </li>

            <li className="mb-1">
              <button
                className={`flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-700`}
                onClick={() => toggleDropdown("sales")}
              >
                <div className="flex items-center">
                  <FaFileInvoiceDollar className="mr-2" />
                  <span>Sales</span>
                </div>
                {openDropdown === "sales" ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </button>
              {openDropdown === "sales" && (
                <ul className="bg-gray-700 py-1">
                  <li>
                    <button
                      className={`flex items-center w-full px-8 py-2 text-left text-sm ${
                        activeContent === "salesInvoice" ? "bg-blue-600" : "hover:bg-gray-600"
                      }`}
                      onClick={() => setContent("salesInvoice")}
                    >
                      Sales Invoice
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="mb-1">
              <button
                className={`flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-700`}
                onClick={() => toggleDropdown("purchase")}
              >
                <div className="flex items-center">
                  <FaShoppingCart className="mr-2" />
                  <span>Purchase</span>
                </div>
                {openDropdown === "purchase" ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </button>
              {openDropdown === "purchase" && (
                <ul className="bg-gray-700 py-1">
                  <li>
                    <button
                      className={`flex items-center w-full px-8 py-2 text-left text-sm ${
                        activeContent === "purchaseInvoice" ? "bg-blue-600" : "hover:bg-gray-600"
                      }`}
                      onClick={() => setContent("purchaseInvoice")}
                    >
                      Purchase Invoice
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="mb-1">
              <button
                className={`flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-700`}
                onClick={() => toggleDropdown("inventory")}
              >
                <div className="flex items-center">
                  <FaBoxes className="mr-2" />
                  <span>Inventory</span>
                </div>
                {openDropdown === "inventory" ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </button>
              {openDropdown === "inventory" && (
                <ul className="bg-gray-700 py-1">
                  <li>
                    <button
                      className={`flex items-center w-full px-8 py-2 text-left text-sm ${
                        activeContent === "stock" ? "bg-blue-600" : "hover:bg-gray-600"
                      }`}
                      onClick={() => setContent("stock")}
                    >
                      <FaWarehouse className="mr-2" />
                      Stock
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center w-full px-8 py-2 text-left text-sm ${
                        activeContent === "item" ? "bg-blue-600" : "hover:bg-gray-600"
                      }`}
                      onClick={() => setContent("item")}
                    >
                      <FaBox className="mr-2" />
                      Item
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="mb-1">
              <button
                className={`flex items-center w-full px-4 py-2 text-left ${
                  activeContent === "serviceBookings" ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
                onClick={() => setContent("serviceBookings")}
              >
                <FaCalendarCheck className="mr-2" />
                <span>Service Bookings</span>
              </button>
            </li>

            {/* Applications Dropdown */}
            <li className="mb-1">
              <button
                className={`flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-700`}
                onClick={() => toggleDropdown("applications")}
              >
                <div className="flex items-center">
                  <FaBoxes className="mr-2" />
                  <span>Applications</span>
                </div>
                {openDropdown === "applications" ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </button>
              {openDropdown === "applications" && (
                <ul className="bg-gray-700 py-1">
                  <li>
                    <button
                      className={`flex items-center w-full px-8 py-2 text-left text-sm ${
                        activeContent === "chargingStations" ? "bg-blue-600" : "hover:bg-gray-600"
                      }`}
                      onClick={() => setContent("chargingStations")}
                    >
                      <FaChargingStation className="mr-2" />
                      Charging Stations
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center w-full px-8 py-2 text-left text-sm ${
                        activeContent === "franchises" ? "bg-blue-600" : "hover:bg-gray-600"
                      }`}
                      onClick={() => setContent("franchises")}
                    >
                      <FaTools className="mr-2" />
                      Service Center
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center w-full px-8 py-2 text-left text-sm ${
                        activeContent === "careers" ? "bg-blue-600" : "hover:bg-gray-600"
                      }`}
                      onClick={() => setContent("careers")}
                    >
                      <FaUserTie className="mr-2" />
                      Recruitment
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 ml-64 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;