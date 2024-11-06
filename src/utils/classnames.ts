// function to add multiple classes to an element
const classes = (...args: (string | undefined)[]): string => {
  // filter out falsy values: false, 0, '', null, undefined, and NaN
  return args.filter(Boolean).join(' ');
};

export default classes;
