module.exports = propDefinition => {
  if (propDefinition.type.name === 'boolean') {
    return 'boolean';
  }
  if (propDefinition.type.name === 'string') {
    return 'string';
  }
  if (propDefinition.type.name === 'number') {
    return 'number';
  }
  return 'any';
};
