# Yieldhive - A simple and easy to use yield farming platform

## Demo

## Introduction

Yieldhive is a simple and easy to use yield farming platform that allows users to earn interest on their crypto assets. Users can deposit their crypto assets into the platform and earn interest on their assets. The platform supports multi chain assets and allows users to deposit and withdraw their assets at any time.

## Architecture

The web2 part of the platform is built using NextJS for the frontend and NodeJS for the backend. The database used is PostgresQL powered by [Neon Tech](https://neon.tech/). The entire web2 part of the platform is managed using [Turborepo](https://turborepo.com/). The backend is supposed to be used for user identification along with managing transactions and assets of the user on the platform.

### Todos for the web2 part of the platform

- [ ] Build a worker for various protocol health checks and verify and update transaction status
- [ ] Add transactional data to the database
- [ ] Improve the frontend design
- [ ] Add tooltips for various token, protocol and chain images for better user experience
- [ ] Add a worker to render dynamic OG image on demand
- [ ] Add toasts for various user actions on the platform
