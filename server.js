// 1. importa o app(api)
// 2. definir uma porta e ouvi-la
const app = require('./src/app')

app.listen(8000, () => console.log(`fé no pai que agora vai, porta: 8000`))
