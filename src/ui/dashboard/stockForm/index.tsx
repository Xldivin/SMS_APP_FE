'use client'
import React from 'react';
import AddForm from './AddForm';
import RemoveForm from './RemoveForm';

export default function Products() {
  return (
    <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Stock Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Add Item to Stock</h2>
          <AddForm />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Remove Item from Stock</h2>
          <RemoveForm />
        </div>
      </div>
    </div>
  );
};