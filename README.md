# Whiteboard server for Graduation

## Prerequisite

- VS Code's extensions:
	- EditorConfig
	- TODO Highlight
	- ESLint
	- Code Spell Checker

- Yarn: <https://yarnpkg.com/>

## Note

- Use `yarn` instead of `npm`.

## How to Start

- Create `.env` from `.env.example` with your own modifications:

- Install app dependencies:

```sh
yarn install
```

- Install Husky:

```sh
yarn prepare
```

- Start the development server:

```sh
yarn dev
```

## Project Structure

- `src`: Main directory for source code
  - `config`: Put global config files
  - `hooks`: Global custom React hooks
  - `models`: Helpers
  - `utils`: Utilities functions

## Other commands

- `yarn prepare`: Install Husky.
- `yarn ts-check`: Validate types of TypeScript files.
- `yarn lint`: Report linting issues for TypeScript files.
- `yarn prettier --config .prettierrc 'src/**/*.{ts,tsx}' --write`: Format code on `src` directory.

## Use with Docker

TBD...