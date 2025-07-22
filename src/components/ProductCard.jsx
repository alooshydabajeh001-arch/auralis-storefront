import { Box, Image, Text, Badge, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ProductCard = ({ title, image, price, onAddToCart }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} maxW="sm">
      <Image src={image} alt={title} borderRadius="md" />
      <Text mt={2} fontWeight="semibold" fontSize="lg">{title}</Text>
      <Badge colorScheme="green" mt={1}>
        {typeof price === "number" && !isNaN(price)
          ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)
          : `$${price}`}
      </Badge>
      <Button mt={4} colorScheme="teal" size="sm" onClick={onAddToCart}>Add to Cart</Button>
    </Box>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onAddToCart: PropTypes.func,
};

