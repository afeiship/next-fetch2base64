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

NxFetch2base64.request('https://tu-dev.finxos.com/tu-resources/xlsfile/thumbnail/2019_04/2019_04_18/73796d626f6c9bc8e91a32651d7e31448a37ec442a38.png').then(response=>{
  document.getElementById('image').src = response;
});
```
