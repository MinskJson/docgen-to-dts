const fs = require('fs');
const path = require('path');
const decodeStr = require('./utils/decodeStr');
const getTsType = require('./utils/getTsType');

const fileName = process.argv[2];
const absFileName = path.resolve(process.cwd(), fileName);

let fileContent;

try {
  fileContent = require(absFileName);
} catch (e) {
  console.log(`Can't import file ${fileName} (${absFileName})`);
  process.exit(1);
}

const componentName = fileName
  .split('/')
  .pop()
  .replace('.description.json', '');

let definitionLines = [
  `declare module '@todo/module-name' {`,
  `import { SFC } from 'react';`,
  `export interface ${componentName}Props {`,
];

Object.keys(fileContent.propTypes).forEach(propName => {
  const propDefinition = fileContent.propTypes[propName];
  const isOptional = propDefinition.required === 'false';
  const hasDefaultValue = propDefinition.defaultValue.value !== '-';
  const valueType = getTsType(propDefinition);
  let defaultValue = hasDefaultValue ? decodeStr(propDefinition.defaultValue.value) : null;

  if (valueType === 'string') {
    defaultValue = JSON.stringify(defaultValue);
  }

  const propLine = `${propName}${isOptional ? '?' : ''}:${valueType}${hasDefaultValue ? ` = ${defaultValue}` : ''};`;
  definitionLines.push(propLine);
});

definitionLines.push(`}`);
definitionLines.push(`export const ${componentName}: React.Component<${componentName}Props>;`);
definitionLines.push(`}`);

const dTsFilePath = absFileName.replace('.description.json', '.d.ts');
fs.writeFileSync(dTsFilePath, definitionLines.join('\n'));
console.log(`Check ${dTsFilePath} file`);
