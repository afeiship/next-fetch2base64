# next-fetch2base64
> Fetch resource to base64

## installation
```bash
npm install -S afeiship/next-fetch2base64 --registry=https://registry.npm.taobao.org
```

## apis
| api     | params | description                          |
| ------- | ------ | ------------------------------------ |
| request | -      | Fetch file/image link to data base64 |

## usage
```js
import NxFetch2base64 from 'next-fetch2base64';

NxFetch2base64.request('https://a.com/t7ec442a38.png').then(response=>{
  document.getElementById('image').src = response;
});
```

## configuration
- [x] IMAGE CORS
