# emd-rest 🚀

![npm](https://img.shields.io/npm/v/emd-rest.svg?style=flat-square)
![Travis (.org)](https://img.shields.io/travis/evyatarMad007/emd-rest.svg?style=flat-square)
![license](https://img.shields.io/github/license/evyatarMad007/emd-rest.svg?style=flat-square)

> **DESCRIPTION**: Introducing a refined HTTP client experience, our library takes inspiration from Axios, providing all its powerful features, but with an added twist. Our library seamlessly integrates advanced logging capabilities. Every request and response, along with relevant metadata, is conveniently printed to the console, making debugging and tracking easier than ever. For developers who seek clarity and transparency in their HTTP requests without additional setup, this is the tool to elevate your development workflow.

## 📖 Table of Contents

- [Installation](#-installation)
- [Examples](#-examples)
- [API Documentation](#-api-documentation)
- [Contribute](#-contribute)
- [License](#-license)

## 📦 Installation

```bash
npm install emd-rest
```
or
```bash
yarn add emd-rest
```

## 💡 Examples

To get started with `emd-rest`, import it in your project:

```javascript
const restHelper = require('emd-rest');
```
or
```javascript
import restHelper from 'emd-rest';
```


Example usage:
```javascript
restHelper.get("https://jsonplaceholder.typicode.com/todos/1", {params: {id: 1}})
.then( res => console.log(res))
.catch( err => console.log(err));
```

in async await function:
```javascript
async function getTodo() {
    try {
        const res = await restHelper.get("https://jsonplaceholder.typicode.com/todos/1", {params: {id: 1}});
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
```

arrow function async await:
```javascript
const getTodo = async () => {
    try {
        const res = await restHelper.get("https://jsonplaceholder.typicode.com/todos/1", {params: {id: 1}});
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
```

POST request with data and config:
```javascript
const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

const config = {
    timeout: 1000,
    withCredentials: true,
    httpsAgent: new https.Agent({ keepAlive: true }),
};

restHelper.post("https://jsonplaceholder.typicode.com/posts", data, config)
.then( res => console.log(res))
.catch( err => console.log(err));
```

PUT request with headers and data:
```javascript
const headers = {
    'Content-type': 'application/json; charset=UTF-8',
};

const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

restHelper.put("https://jsonplaceholder.typicode.com/posts/1", data, {headers})
.then( res => console.log(res))
.catch( err => console.log(err));
```

DELETE request with headers and data:
```javascript
const headers = {
    'Content-type': 'application/json; charset=UTF-8',
};

const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

restHelper.delete("https://jsonplaceholder.typicode.com/posts/1", {headers, data})
.then( res => console.log(res))
.catch( err => console.log(err));
```

PATCH request with data:
```javascript
const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

restHelper.patch("https://jsonplaceholder.typicode.com/posts/1", data)
.then( res => console.log(res))
.catch( err => console.log(err));
```


## 📘 API Documentation

### `get(url, [config])`

Sends a GET request to the specified URL.

**Parameters**:

- `url` (string): The URL to which the request is sent.
- `config` (object, optional): Configuration options for the request.

#### Config Options

- `headers` (object): Headers to be added to the request.
- `params` (object): URL parameters to be sent with the request.
- `timeout` (number): Specifies the number of milliseconds before the request times out.
- `withCredentials` (boolean): Indicates whether or not cross-site Access-Control requests should be made using credentials.

**Returns**: `Promise` - A Promise that resolves to the response to the request.

#### Response Object

The Promise resolves to an object with the following properties:

- `data` (object): The response data sent by the server.
- `status` (number): The HTTP status code of the response.
- `statusText` (string): The status message corresponding to the status code.
- `headers` (object): The headers the server responded with.
- `config` (object): The configuration used for the request.
- `request` (object): The request object.

## 🤝 Contribute

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📜 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---

## Support

If you find any bugs or have a feature request, please open an issue on [github](https://github.com/evyatarMad007/emd-rest)!

## Stay in touch

👤 **Evyatar Madari**

- Github: [@evyatarMad007](https://github.com/evyatarMad007)

---

❤️ Made with love by [Evyatar Madari](https://www.linkedin.com/in/evyatarmadari/)
