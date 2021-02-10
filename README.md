# memo-deps
[![Coverage Status](https://coveralls.io/repos/github/ashubham/memo-deps/badge.svg?branch=main)](https://coveralls.io/github/ashubham/memo-deps?branch=main) [![npm version](https://badge.fury.io/js/memo-deps.svg)](https://badge.fury.io/js/memo-deps)

Memo with Dependencies. Inspired from React.useMemo. This can be used outside of React components without hooks.

## Usage
```js
import { memo } from 'memo-deps';

function expensive(arg1, arg2) {
    // 
}

const memoized = memo(expensive);

const dep1 = { a: 1 };
const dep2 = [ 4 ];

let result1 = memoized([arg1, arg2], [dep1, dep2]);
let result2 = memoized([arg3, arg4], [dep1, dep2]);
let result3 = memoized([arg5, arg6], [dep1, dep2])

result1 === result2 // true, this is the same as returned before.
```

