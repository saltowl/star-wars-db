export default (...funcs) => (component) =>
  funcs.reduceRight((prevResultComponent, func) => func(prevResultComponent), component);
