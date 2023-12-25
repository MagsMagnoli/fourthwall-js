# Fourthwall npm package

This is an npm package for interacting with the Fourthwall platform. It is written in typescript.

## Installation

To install the package, use the following command:

```bash
npm install fourthwall-js
```

## Usage - 0.7.0+

This package simplifies interaction with Fourthwall's API and token validation process. Below is an example of how you can use this package:

```typescript
// Init client
const fw = new Fourthwall({
  username: "username",
  password: "password",
});

// Get orders
const ordersResponse = await fw.getOrders();
```

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on GitHub.

## License

ISC
