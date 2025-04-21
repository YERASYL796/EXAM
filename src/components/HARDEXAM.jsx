import React, { useState } from 'react'

const products = [
    { id: 1, name: "Носки", price: 9999 },
    { id: 2, name: "Ноут", price: 15000 },
    { id: 3, name: "Наушник", price: 1200 },
  ];
  
  const App = () => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (index) =>
      setCart(cart.filter((_, i) => i !== index));
    const clearCart = () => setCart([]);
  
    return (
      <div className='container'>
        <h2>Продукты</h2>
        {products.map((product) => (
          <div key={product.id}>
            {product.name} - {product.price}₸
            <button onClick={() => addToCart(product)}>Добавить</button>
          </div>
        ))}
  
        <h2>Ящик</h2>
        {cart.map((item, index) => (
          <div key={index}>
            {item.name} - {item.price}₸
            <button onClick={() => removeFromCart(index)}>Удалить</button>
          </div>
        ))}
  
        <button onClick={clearCart}>Очистить</button>
      </div>
    );
  };

export default App