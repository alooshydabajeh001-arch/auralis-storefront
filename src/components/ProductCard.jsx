// src/components/ProductCard.jsx
import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ProductCard({ title, image, price, onAddToCart }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
      <Image src={image} alt={title} mx="auto" />
      <Text mt={2} fontWeight="bold">{title}</Text>
      <Text color="gray.600">${price.toFixed(2)}</Text>
      <Button mt={3} colorScheme="teal" onClick={onAddToCart}>
        Add to Cart
      </Button>
    </Box>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  onAddToCart: () => {},
};

export default ProductCard;




