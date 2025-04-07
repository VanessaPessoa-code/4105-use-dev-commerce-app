import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { IHttpClient } from "../../interfaces/http.interface";
import { IProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

const ProductServices = (http: IHttpClient): IProductService => {

    const fetchProducts = async () => {
        try {
            const response = await http.get<{products: Product[]}>(
                PRODUCTS_BASE_URL
            );
            return response.products;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw new Error("Failed to fetch products");
            
        }
    };
    
    
    return  {fetchProducts};
}

export default ProductServices;