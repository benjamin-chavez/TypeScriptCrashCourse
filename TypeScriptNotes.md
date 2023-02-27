# TypeScript Notes

1. Setup

   1. Install TypeScript

      - ```bash
        sudo npm install -g typescript
        ```

      ```

      ```

   2. Check Typescript Version:

      - ```bash
         tsc -v
        ```

2. Compiling TypeScript down to JavaScript:

   1. By default TS compiles to ES5. You can update this in the `tsconfig.json` file
   2. To compile a single file:

      ```bash
      tsc <filename>
      ```

   3. To compile a your entire project:

      ```bash
      tsc
      ```

   4. To continuoulsy compile and report error in the terminal:
      ```bash
      tsc --watch <filename>
      ```

3. Create a TypeScript configuration file (`tsconfig.json`):
   - ```bash
         tsc --init
     ```
4. Add Typescript with react

   ```
   npx create-react-app@5.0.1 <folder> --template typescript
   npx create-react-app@5.0.1 ./react_typescript_template --template typescript
   ```

   - To run the react app:
     - `npm start`
