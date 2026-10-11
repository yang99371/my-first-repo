// 引入http模块创建网页服务器
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const nowTime = new Date().toLocaleString('zh-CN');

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>我的第一个网站</title>
</head>
<body style="padding:30px;font-size:22px;">
  <h1>Hello World! 我是【WSY】，我的第一个AI开发网站</h1>
  <p>服务器当前时间：${nowTime}</p>
</body>
</html>
`;
  res.end(html);
});

server.listen(PORT, () => {
  console.log('✅本地启动成功！浏览器打开：http://localhost:3000');
});