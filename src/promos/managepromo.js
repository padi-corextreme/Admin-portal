import React from 'react'

export default function ManagePromo() {
  return (
    <section id='managepromos'>
          <div class="text-center p-10">
    <h1 class="font-semibold text-4xl mb-4">Manage Promotion</h1>
    <h1 class="text-3xl"></h1>
</div>
      <table class="min-w-full divide-y divide-gray-200">
    <thead>
        <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Title</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Product Description</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount Type</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount Category</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">Car</td>
            <td class="px-6 py-4 whitespace-nowrap">50% Discount</td>
            <td class="px-6 py-4 whitespace-nowrap">Clearance Sales</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Auto Mobile</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                
                <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>
        <tr>
        <td class="px-6 py-4 whitespace-nowrap">Car</td>
            <td class="px-6 py-4 whitespace-nowrap">50% Discount</td>
            <td class="px-6 py-4 whitespace-nowrap">Clearance Sales</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Auto Mobile</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                
                <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>
    </tbody>
</table>
    </section>
  )
}
