# FourthWall npm package

This is an npm package for interacting with the FourthWall platform. It is written in typescript.

## Installation

To install the package, use the following command:

```bash
npm install @magsmagnoli/fourthwall-js
```

## Usage

This package simplifies interaction with FourthWall's API and token validation process. Below is an example of how you can use this package:

```typescript
const fourthwall = new Fourthwall();

// Login
await fourthwall.login({
  username: "username",
  password: "password",
});

// Get orders
const ordersResponse = await fourthwall.getOrders();
```

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on GitHub.

## License

ISC
