export const sendOrderForm = async (order) => {
  const data = {
    'fbzx': '7147254662915838255',
    'pageHistory': 0,
    'draftResponse': '[null,null,null]',
    'fvv': 1,
    'entry.1273892468': order.name,
    'entry.1816689429': order.phone,
    'entry.447066208': order.email,
    'entry.543120534': order.comment,
    'price': order.price,
    'variant': order.variant
  };

  const searchParams = Object.keys(data).reduce((searchParams, key) => {
    searchParams.set(key, data[key]);
    return searchParams;
  }, new URLSearchParams());

  const response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScnFYMv2ci5JjQdT994AHZMOvAe1IGHN5_mEk3BPm4Jz2mX1Q/formResponse', 
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    mode: 'no-cors',
    body: searchParams
  });
  console.log(response);
  if (response.ok || response.status === 0) {
    return response.status;
  }
  else {
    throw new Error(`ошибка отправки заявки, проверьте данные и повторите отправку`);
  }
};