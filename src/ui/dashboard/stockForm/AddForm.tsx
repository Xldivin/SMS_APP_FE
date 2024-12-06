import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

const AddForm: React.FC = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const token = Cookies.get('accessToken');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8081/categories/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const formData = Object.fromEntries(data.entries());

    const formattedData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price as string),
      stockQuantity: parseInt(formData.stockQuantity as string, 10),
      category: {
        id: parseInt(formData.categoryId as string, 10),
      },
    };

    try {
      const response = await fetch('http://localhost:8081/products/product', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedData),
      });
      if (response.ok) {
        toast.success("Items Added successfully");
      } else {
        toast.success("Items failed to be added");
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleAddItem}
      className="bg-white p-6 shadow rounded-lg space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Item Name:
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Description:
          <textarea
            name="description"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          ></textarea>
        </label>
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Price:
          <input
            type="number"
            name="price"
            step="0.01"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Stock Quantity:
          <input
            type="number"
            name="stockQuantity"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Category:
          {loading ? (
            <p>Loading categories...</p>
          ) : (
            <select
              name="categoryId"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="" disabled selected>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
         {loading ? 'Loading...' : 'Add Item'}
      </button>
    </form>
  );
};

export default AddForm;
