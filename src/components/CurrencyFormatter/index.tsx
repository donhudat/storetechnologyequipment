// CurrencyFormatter.tsx
import React from 'react';

interface CurrencyFormatterProps {
  amount: number;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({ amount }) => {
  const formattedAmount = amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return <span>{formattedAmount}</span>;
};

export default CurrencyFormatter;
