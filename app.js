const nframework  = require('./nframework/framework');
const app         = nframework();

app.appDir = __dirname;

app.LoadSetting(__dirname + '/setting.json');
app.Init();
app.Build();
app.Run();
