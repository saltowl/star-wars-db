const isObject = (o) => o === Object(o) && !isArray(o) && typeof o !== 'function';

const isArray = (a) => Array.isArray(a);

const toCamel = (s) =>
  s.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''));

const keysToCamel = (o) => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i) => keysToCamel(i));
  }

  return o;
};

export default keysToCamel;
