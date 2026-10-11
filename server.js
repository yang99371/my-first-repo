// 引入http模块创建网页服务器
const http = require('http');
// 适配Vercel！！不能写死3000，改成下面这行
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const nowTime = new Date().toLocaleString('zh-CN');
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>我的第一个网站</title>
    <style>
      body {
        /* 渐变背景色 */
        background: linear-gradient(120deg, #4158D0, #C850C0);
        padding:30px;
        font-size:22px;
        font-family: "Microsoft Yahei",sans-serif;
        color: #ffffff; /*文字白色*/
      }
      .card{
        background:rgba(255,255,255,0.18);
        padding:40px;
        border-radius:20px;
        max-width:700px;
        margin: 80px auto 0;
        text-align:center;
      }
      h1{
        text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
      }
      p{
        margin-top:20px;
        font-size:20px;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Hello World! 我是【WSY】，我的第一个AI开发网站</h1>
      <p>服务器当前时间：${nowTime}</p>
    </div>
  </body>
  </html>
  `;
  res.end(html);
});

server.listen(PORT, () => {
  console.log('✅本地启动成功！浏览器打开：http://localhost:3000');
});