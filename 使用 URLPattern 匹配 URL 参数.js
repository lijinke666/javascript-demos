const pattern = new URLPattern({ pathname: "/products/:id" });
console.log(pattern.test("https://example.com/products/123")); // true

const pattern = new URLPattern({ pathname: "/books/:category/:id" });
const result = pattern.exec("/books/classics/12345");

// `result.pathname.groups` will return:
// { category: "classics", id: "12345" }
const { category, id: bookId } = result.pathname.groups;
