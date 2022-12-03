const app = require("express")();
const { exec } = require("child_process");

app.get("/", (_req, res) => {
  exec("uname --machine", (err, stdout, _stderr) => {
    if (err) {
      console.log("exec failed");
      return;
    }
    res.json({ architecture: stdout.trimEnd() });
  });
});

app.listen(3000, () => console.log("listening on 3000..."));
