import formatPrice from "@/lib/db/format";
import React from "react";

interface PriceTagProps {
  price: number;
  className?: string;
}

function PriceTag({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}

export default PriceTag;
