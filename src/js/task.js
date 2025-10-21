export default function orderByProps(obj, order) {
  const result = [];

  for (const key of order) {
    if (key in obj) {
      result.push({ key, value: obj[key] });
    }
  }

  const restKeys = [];
  for (const key in obj) {
    if (!order.includes(key)) {
      restKeys.push(key);
    }
  }

  restKeys.sort().forEach((key) => {
    result.push({ key, value: obj[key] });
  });

  return result;
}
