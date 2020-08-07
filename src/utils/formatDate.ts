const formatDate = (value: Date): string =>
  new Intl.DateTimeFormat('pt-PT').format(value);

export default formatDate;
