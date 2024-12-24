## POC NEXT

DASHBOARD for manage site content, integrations and stuffs.

- Content:
    - [Stack](#stack)
    - [Installation](#installation)
    - [Running](#running)

## Stack <a name="stack"></a>

- Used in this project:
  - [Node.js](https://nodejs.org/)
  - [React](https://react.dev/)
  - [Next.js](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)

## Installation <a name="installation"></a>

Clone GIT repository.

```bash
# Using SSL method.
$ git clone git@github.com:tcsoares1914/poc-next.git
```

Access work directory:

```bash
$ cd poc-next/
```

Make a copy of .env.example for .env.

```bash
$ cp .env.example .env
```

## Running <a name="running"></a>

Install application dependencies with [npm](https://www.npmjs.com/):

```bash
$ npm install
```

Run next application.

```bash
# Start local application.
$  npx next dev -p 4000
```

Open dashboard into your browser:

```bash
GET: http://localhost:4000/dashboard
```