# 坐席接口 {#reactivity-api-core}

:::info 测试地址
http://api.xhemss.com
:::

## 登录 {#登录}

用户输入工号, 密码登录

- **参数**

  ```js
 
   username:"00001",
   password:"xxx"
 
  ```

- **返回**

  返回token

- **示例代码**

  ```js
  const count = ref(0)
  console.log(count.value) // 0

  count.value++
  console.log(count.value) // 1
  ```

 
## 退出 {#退出}
