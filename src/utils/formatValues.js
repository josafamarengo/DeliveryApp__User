export function formatValue(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
