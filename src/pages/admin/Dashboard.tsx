import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';
import Button from '../../components/ui/Button';
import { LogOut, Edit, Trash, Plus, Save } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    checkAuth();
    fetchProducts();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // navigate('/admin/login');
    }
  };

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      toast.error('Error fetching products');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/admin/login');
    } catch (error) {
      toast.error('Error signing out');
      console.error('Error:', error);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = async () => {
    if (!editingProduct) return;

    try {
      const { error } = await supabase
        .from('products')
        .update({
          name: editingProduct.name,
          description: editingProduct.description,
          price: editingProduct.price,
          image_url: editingProduct.image_url
        })
        .eq('id', editingProduct.id);

      if (error) throw error;

      toast.success('Product updated successfully');
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      toast.error('Error updating product');
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      toast.error('Error deleting product');
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="White Happydent"
              />
              <h1 className="ml-4 text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <Button
                variant="outline"
                onClick={handleLogout}
                icon={<LogOut size={18} />}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <Button
              variant="primary"
              icon={<Plus size={18} />}
              onClick={() => {/* Add new product logic */}}
            >
              Add Product
            </Button>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">{product.name}</h3>
                        <p className="text-gray-500">${product.price}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        icon={<Edit size={18} />}
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        icon={<Trash size={18} />}
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;