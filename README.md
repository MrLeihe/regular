## regular

整理了常用的正则表达式，也希望能为每个功能添加尽可能多的单元测试

#### isEmail

校验是否为合法的邮箱账号

**例子**

```js
isEmail('frontend@nowcoder.com.cn')
// => true

isEmail('front end@nowcoder.com')
// => false
```
