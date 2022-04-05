# TypeScript

## Requirement

1. Install `typescript`

   ```
   $ npm i -g typescript
   ```

## Setup TypeScript

1. Create `package.json`

   ```
   $ npm init --yes
   ```

2. Create `tsconfig.json`

   ```
   $ tsc --init
   ```

## Implement with Nodemon

1. Install `concurrently` and `nodemon` as development dependencies

   ```
   $ npm i --save-dev concurrently nodemon
   ```

2. Uncomment `"outDir": "dist"` from `tsconfig.json`

3. Apply `concurrently` and `nodemon` on `package.json`

   ```json
   {
     (...)
     "scripts": {
       "start": "concurrently \"tsc -w\" \"nodemon dist/main\"",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "devDependencies": {
       "concurrently": "^7.1.0",
       "nodemon": "^2.0.15"
     },
   }
   ```

## Debugging

1. Uncomment `"sourceMap": true` from `tsconfig.json`

2. Run `npm start`

3. Look for `dist/main.js.map`
