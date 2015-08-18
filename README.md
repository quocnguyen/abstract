
# abstract-function

an abstract function that does nothing except throw an error when called.

## Installation

```
npm install abstract-function
```
## Example

```js
var abstract = require('abstract-function');

// interface
var User = {
  login: abstract,
  register: abstract
}

// subclass
function UserRepo() {};
UserRepo.prototype = Object.create(User); // extend the User.
UserRepo.prototype.login = function() {
  console.log('do login');
}

var user = new UserRepo();
user.login(); // ok
user.register();  //throw not implement exception

```

# License

  MIT
