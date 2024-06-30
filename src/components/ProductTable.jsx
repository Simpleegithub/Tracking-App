import React from 'react';

function ProductTable() {
  return (
    <div className='overflow-x-auto'>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-re">
        <thead className="text-xs uppercase dark:bg-black dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Product name</th>
            <th className="px-6 py-3">Color</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Stock</th>
            <th className="px-6 py-3">Rating</th>
            <th className="px-6 py-3">Discount</th>
            <th className="px-6 py-3">Featured</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Apple MacBook Pro 17"
            </td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">In Stock</td>
            <td className="px-6 py-4">4.5</td>
            <td className="px-6 py-4">10%</td>
            <td className="px-6 py-4">Yes</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Microsoft Surface Pro
            </td>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">Out of Stock</td>
            <td className="px-6 py-4">4.0</td>
            <td className="px-6 py-4">15%</td>
            <td className="px-6 py-4">No</td>
          </tr>
          <tr className="bg-white">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Magic Mouse 2
            </td>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">In Stock</td>
            <td className="px-6 py-4">4.8</td>
            <td className="px-6 py-4">5%</td>
            <td className="px-6 py-4">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
