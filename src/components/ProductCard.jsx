// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Text, Button } from '@chakra-ui/react';

function ProductCard({ title, image, price, onAddToCart }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
      <Image src={image} alt={title} mb={4} />
      <Text fontWeight="bold" fontSize="xl">{title}</Text>
      <Text color="gray.600">${Number(price).toFixed(2)}</Text>
      <Button colorScheme="teal" mt={3} onClick={onAddToCart}>
        Add to Cart
      </Button>
    </Box>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onAddToCart: PropTypes.func
};

export default ProductCard;



