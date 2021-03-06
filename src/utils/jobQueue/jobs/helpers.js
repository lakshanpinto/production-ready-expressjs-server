'use strict';

/**
 * Validate if all required object properties are available
 * @param {*} args - data to validate
 * @param {*} props - properties to check if they are available in args.data
 */
const validateProps = (args, props) => {
  const { data } = args;
  const keys = Object.keys(data);
  const errors = props.filter(prop => keys.indexOf(prop) === -1);
  const formattedErrors = errors.map(prop => `Property ${prop} is required to send an email`);

  return formattedErrors.length > 0 ? formattedErrors : false;
};

module.exports = {
  validateProps,
};
