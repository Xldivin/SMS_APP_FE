import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

const RemoveForm: React.FC = () => {
  const [products, setProducts] = useState<{ id: number; name: string }[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const token = Cookies.get('accessToken');


  useEffect(() => {
    const fetchProducts = async () => {
      try {
  
        const response = await fetch('https://sms-app-r1uh.onrender.com/products/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  

  const handleRemoveItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedProductId) {
      toast.success('Please select a product to remove.');
      return;
    }

    try {
      const response = await fetch(`https://sms-app-r1uh.onrender.com/products/product/${selectedProductId}`, {
        method: 'DELETE',
        headers: { 
           Authorization: `Bearer ${token}`
        },
      });
      if (response.ok) {
        toast.success('Item removed successfully!');
      } else {
        toast.error('Failed to remove item.')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form
      onSubmit={handleRemoveItem}
      className="bg-white p-6 shadow rounded-lg space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Select Product to Remove:
          <select
            name="productId"
            required
            value={selectedProductId || ''}
            onChange={(e) => setSelectedProductId(parseInt(e.target.value, 10))}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              -- Select a product --
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Remove Item
      </button>
    </form>
  );
};

export default RemoveForm;
