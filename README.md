# Express Server JWT

A simple server with JWT authentication with the ability to create new users, and to authenticate the existing ones.

## Stack

- express
- prisma
- passport
- jwt

## Endpoints:

- /signin - POST (email, password)
- /signup - POST (email, password)
- /user - GET (protected)

## Get Started:

Download the repo and install all dependencies:

```
git clone https://github.com/alan2207/express-server-jwt
cd express-server-jwt
npm install
```

Configure server environment variables:

```
cp .env.example .env
```

Generate Prisma Client

```
npx prisma generate
```

Run Prisma migration

```
npx prisma migrate
```

Run the server:

```
npm start
```
