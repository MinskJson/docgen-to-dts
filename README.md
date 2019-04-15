# docgen-to-dts

Generates d.ts files based on docken description. We use https://github.com/reactjs/react-docgen to generate docs.

=> The description [./examples/Select.description.json](./examples/Select.description.json)
=> Result [./examples/Select.d.ts](./examples/Select.d.ts)

## How to use it

```
npx docgen-to-dts gen examples/Select.description.json
```

Or

```
import { gen } from 'docgen-to-dts`;
import path from 'path';

const filePath = path.resolve(process.cwd(), 'xxx.description.js');
gen(filePath);
```

## To run:

```
node index.js examples/Select.description.json
```
