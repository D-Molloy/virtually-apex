# Virtually Apex

An app built with the PERN stack that allows users to create an account, securely login and view a staff directory.

## Installation

**Note**: The following process will create and seed a database and assumes default connection and superuser privelages will be used. If necessary, update the following files to use custom credentials/connections:

- `db\dbConfig.js` - config object
- `.env` - DATABASE_URL string

**_Disclaimer_** - Never upload a `.env` with sensitive information!

```
- git clone https://github.com/D-Molloy/virtually-apex.git
- cd virtually-apex
- npm run install:client
- npm run install:server
- npm run create:db
- npm run create:tables
- npm run seed
- npm start
```

## Technologies

- React
- Redux
- Node
- Express
- PostgreSQL
- NPM - react-router-dom/react-redux/bcrypt/jsonwebtoken/axios/dotenv/pg/pg-tools/node-pg-migrate/concurrently
