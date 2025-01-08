import React from "react";

const PricingTable = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Table Container with Scroll */}
      <div
        className="h-96 overflow-y-auto border border-gray-800 rounded-lg p-4"
        style={{ maxHeight: "400px" }} // Set a fixed height for the container
      >
        {/* Video Editing Table */}
        <h2 className="text-lg font-bold mb-2">Video Editing</h2>
        <table className="w-full table-auto border-collapse border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-2 py-1 text-left">Service</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Price Range</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 py-1">Basic Long-Form Editing</td>
              <td className="border border-gray-700 px-2 py-1">$450 - $800</td>
              <td className="border border-gray-700 px-2 py-1">
                Editing raw footage, basic cuts, simple transitions, and audio syncing.
              </td>
            </tr>
            <tr className="bg-gray-800">
              <td className="border border-gray-700 px-2 py-1">Intermediate Long-Form Editing</td>
              <td className="border border-gray-700 px-2 py-1">$800 - $1,300</td>
              <td className="border border-gray-700 px-2 py-1">
                Advanced cuts, audio mixing, color correction, and dynamic transitions.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 py-1">Advanced Long-Form Editing</td>
              <td className="border border-gray-700 px-2 py-1">$1,300 - $2,000</td>
              <td className="border border-gray-700 px-2 py-1">
                Full-scale editing with custom graphics, sound design, and more.
              </td>
            </tr>
            <tr className="bg-gray-800">
              <td className="border border-gray-700 px-2 py-1">Premium Long-Form Editing</td>
              <td className="border border-gray-700 px-2 py-1">$2,000+</td>
              <td className="border border-gray-700 px-2 py-1">
                Comprehensive editing with high-end effects and visual storytelling.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Short Form Table */}
        <h2 className="text-lg font-bold mt-6 mb-2">Short Form</h2>
        <table className="w-full table-auto border-collapse border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-2 py-1 text-left">Service</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Price Range</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 py-1">Basic Reel Editing</td>
              <td className="border border-gray-700 px-2 py-1">$50 - $80</td>
              <td className="border border-gray-700 px-2 py-1">
                Simple edits with cuts, basic transitions, music sync, and text overlays.
              </td>
            </tr>
            <tr className="bg-gray-800">
              <td className="border border-gray-700 px-2 py-1">Standard Reel Editing</td>
              <td className="border border-gray-700 px-2 py-1">$80 - $120</td>
              <td className="border border-gray-700 px-2 py-1">
                Includes advanced transitions, color correction, and audio enhancement.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 py-1">Premium Reel Editing</td>
              <td className="border border-gray-700 px-2 py-1">$120 - $150</td>
              <td className="border border-gray-700 px-2 py-1">
                High-quality edits with dynamic effects, sound design, and animations.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-400 mt-4">
        For customized services or monthly retainer plans, contact me to discuss your needs!
      </p>
    </div>
  );
};

export default PricingTable;
