import React from 'react';

export default function CollectionItem({ name, price, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <span>{price}</span>
    </div>
  );
}
