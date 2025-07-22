import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const products = [
  { id: "earbuds", title: "Wireless Earbuds", image: "https://via.placeholder.com/150", price: "49.99" },
  { id: "mouse", title: "Gaming Mouse", image: "https://via.placeholder.com/150", price: "29.99" },
  { id: "yogamat", title: "Yoga Mat", image: "https://via.placeholder.com/150", price: "19.99" },
];

const ProductList = () => (
  <SimpleGrid columns={[1, 2, 3]} spacing={6}>
    {products.map((item) => (
      <ProductCard key={item.id} {...item} />
    ))}
  </SimpleGrid>
);

export default ProductList;
