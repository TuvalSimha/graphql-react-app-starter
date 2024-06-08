# GraphQL React App Starter

## Quick Start

```
npx create-graphql-react-app my-app
cd my-app
pnpm install
```

## Video Demo

https://github.com/TuvalSimha/graphql-react-app-starter/assets/37614975/1b90da5d-d4e8-445f-a05f-09750e113e90

## Overview

This project is a starter template for building a GraphQL application with a React frontend. It uses GraphQL Yoga for the backend server, GraphQL Codegen for generating types and resolvers, and Vite for the frontend development environment. The client-side GraphQL operations are handled using URQL, and all operations are strongly typed thanks to GraphQL Codegen.

## Project Structure

### backend

Contains the GraphQL schema and Yoga server implementation.

### client

Contains the React application using Vite and URQL for making GraphQL requests.

## Features

- **GraphQL Yoga**: Simple, fast, and modern GraphQL server.
- **GraphQL Codegen**: Automatically generates TypeScript types and resolvers from the GraphQL schema.
- **URQL**: A highly customizable and versatile GraphQL client for React.
- **Vite**: Fast and lightweight development server.

## Getting Started

### Prerequisites

Node.js (v16 or higher)
pnpm (v7 or higher)

### Installation

### Clone the repository:

```
git clone https://github.com/TuvalSimha/graphql-react-app-starter
cd graphql-react-app-starter
```

### Install dependencies:

```
pnpm install
```

### Running the Application

You can start the development environment using the provided VS Code command or manually via terminal:

#### Using VS Code Command

Open the project in VS Code.
Click the "Start GraphQL React App Starter" button in the VS Code command palette.

#### Manually via Terminal

Start the GraphQL Codegen in watch mode in the root:

```
pnpm codegen --watch
```

Open a new terminal for the backend and start the server:

```
cd backend
pnpm dev
```

run on:

```
http://localhost:4000/graphql
```

Open another terminal for the client and start the application:

```
cd client
pnpm dev
```

run on:

```
http://localhost:5173/
```
