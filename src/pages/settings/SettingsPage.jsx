import { useState } from 'react';
import { Plus, X, Trash2, Edit } from 'lucide-react';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';

function SettingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    role: 'admin',
    password: '',
  });

  const [admins] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
  ]);

  const handleInputChange = e => {
    setNewAdmin({
      ...newAdmin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // admin creation logic here
    console.log('New admin data:', newAdmin);
    setIsModalOpen(false);
    setNewAdmin({
      name: '',
      email: '',
      role: 'admin',
      password: '',
    });
  };

  return (
    <div className="bg-white min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4 md:p-8">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-textGray">Settings</h2>
          </div>

          {/* Admin Management Card */}
          <div className="bg-white p-4 md:p-6 rounded-lg border border-outlineGray">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
              <h3 className="text-lg md:text-xl font-medium text-textGray">Admin Management</h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primaryGreen text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                <Plus size={20} />
                Add Admin
              </button>
            </div>

            {/* Admins List - Responsive table */}
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-outlineGray md:rounded-lg">
                  <table className="min-w-full divide-y divide-outlineGray">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-textGray uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="hidden sm:table-cell px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-textGray uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="hidden sm:table-cell px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-textGray uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 sm:px-6 sm:py-3 text-right text-xs font-medium text-textGray uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-outlineGray">
                      {admins.map(admin => (
                        <tr key={admin.id} className="hover:bg-gray-50">
                          <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                              <div className="text-sm font-medium text-textGray">{admin.name}</div>
                              <div className="text-sm text-gray-500 sm:hidden mt-1">
                                {admin.email}
                              </div>
                            </div>
                          </td>
                          <td className="hidden sm:table-cell px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-textGray">
                            {admin.email}
                          </td>
                          <td className="hidden sm:table-cell px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-textGray capitalize">
                            {admin.role}
                          </td>
                          <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end gap-2">
                              <button className="text-blue-600 hover:text-blue-800 p-1">
                                <Edit size={18} />
                              </button>
                              <button className="text-red hover:text-red-800 p-1">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-outlineGray">
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium text-textGray">Add New Admin</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-textGray hover:text-gray-700 p-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textGray mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newAdmin.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-outlineGray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-textGray mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newAdmin.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-outlineGray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-textGray mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value="Admin"
                    disabled
                    className="w-full p-2 border border-outlineGray rounded-md bg-gray-50 text-textGray"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-textGray mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={newAdmin.password}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-outlineGray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-textGray hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 px-4 py-2 bg-primaryGreen text-white rounded-md hover:bg-green-600"
                  >
                    Add Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingsPage;
