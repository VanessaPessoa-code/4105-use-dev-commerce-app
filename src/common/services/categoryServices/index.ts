import { CATEGORIES_BASE_URL } from "../../constants/endpoints";
import { ICategoryService } from "../../interfaces/categoryService.interface";
import { IHttpClient } from "../../interfaces/http.interface";
import { Category } from "../../types/category";

const CategoryService = (http: IHttpClient): ICategoryService => {
    const fetchCategories = async () => {
        try {
            const response = await http.get<{ category: Category[] }>(
                CATEGORIES_BASE_URL
            );
            return response.category;
        } catch (error) {
            console.error("Error fetching category:", error);
            throw new Error("Failed to fetch category");

        }
    }

    return { fetchCategories };
}

export default CategoryService;