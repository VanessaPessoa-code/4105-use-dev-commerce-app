import { useEffect, useState } from "react";
import { IProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

const useFetchProducts = (productService: IProductService) => {
    const [products, setProducts ] = useState<Product[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const producstData = await productService.fetchProducts();
                setProducts(producstData);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Erro ao carregar produtos");
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [productService]);
  

    return { products, isLoading, error };
}

export default useFetchProducts;;