export const constant = {
  SORT: [
    { value: ['price', 1], label: 'Price: Low to High' },
    { value: ['price', -1], label: 'Price: High to Low' },
    { value: ['review', -1], label: 'Avg.customer review' }
  ],
  FILTER: {
    price: [
      { value: '0-150', label: 'Less than 150' },
      { value: '151-300', label: '150 to 300' },
      { value: '301-5000', label: 'Greater than 300' }
    ]
  }
};
