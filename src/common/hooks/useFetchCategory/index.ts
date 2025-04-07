import { useEffect, useState } from "react";
import { ICategoryService } from "../../interfaces/categoryService.interface";
import { Category } from "../../types/category";

const useFetchCategory = (categoryService: ICategoryService) => {
    const [category, setCategory ] = useState<Category[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const categoryData = await categoryService.fetchCategories();
                setCategory(categoryData);
            } catch (error) {
                console.error("Error fetching category:", error);
                setError("Erro ao carregar categorias");
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [categoryService]);
  

    return { category, isLoading, error };
}

export default useFetchCategory;;