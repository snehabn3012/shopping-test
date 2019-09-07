import Axios from './axios';
import Urls from './../common/Urls';

const getItems = () => {
  return Axios().get(Urls.GET_PRODUCTS);
};
const getImages = () => {
  return Axios().get(Urls.GET_IMAGES);
};

const getProductImages = (product) => {
  return Axios().get((Urls.GET_PRODUCT_IMAGES).replace(':productId', product.id))
}

export default {
  getItems,
  getImages,
  getProductImages
};
