export const generateTelegramLink = (productName, productPrice) => {
    const message = `Привет! Заинтересовался '${productName}' товаром за ${productPrice}. Есть в наличии?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://t.me/smgear138?text=${encodedMessage}`;
  };