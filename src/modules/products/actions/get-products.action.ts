import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductsAction = async (
  page: number = 1,
  limit: number = 10,
): Promise<Product[]> => {
  try {
    const { data } = await tesloApi.get<Product[]>(
      `/products?limit=${limit}&offset=${(page - 1) * limit}`,
    );

    return data.map((product) => {
      return {
        ...product,
        images: product.images.map(getProductImageAction),
      };
    });
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
