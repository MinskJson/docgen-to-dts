const fs = require("fs");
const path = require("path");
const getTsType = require("./utils/getTsType");

const gen = filePath => {
  const fileName = process.argv[3];
  const absFileName = filePath || path.resolve(process.cwd(), fileName);

  let fileContent;

  try {
    fileContent = require(absFileName);
  } catch (e) {
    console.log(`Can't import file ${fileName} (${absFileName})`);
    process.exit(1);
  }

  const componentName = fileName
    .split("/")
    .pop()
    .replace(".description.json", "");

  let definitionLines = [
    `declare module '@todo/module-name' {`,
    `export interface ${componentName}Props {`
  ];

  // In TS default values not supported in the interface only in the implementation
  // https://stackoverflow.com/questions/51188511/typescript-interface-default-value-on-string-property

  Object.keys(fileContent.propTypes).forEach(propName => {
    const propDefinition = fileContent.propTypes[propName];
    const isOptional = propDefinition.required === "false";
    const valueType = getTsType(propDefinition);
    const propLine = `${propName}${isOptional ? "?" : ""}:${valueType};`;

    definitionLines.push(propLine);
  });

  definitionLines.push(`}`);
  definitionLines.push(
    `export const ${componentName}: React.Component<${componentName}Props>;`
  );
  definitionLines.push(`}`);

  const dTsFilePath = absFileName.replace(".description.json", ".d.ts");
  fs.writeFileSync(dTsFilePath, definitionLines.join("\n"));
  if (process.argv.includes('gen')) {
    console.log(`Check ${dTsFilePath} file`);
  }
};

module.exports = {
  gen
};

if (process.argv.includes('gen')) {
  gen();
}