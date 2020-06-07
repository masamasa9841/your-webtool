const fs = require('fs-extra');

(async () => {
  const src = `${process.cwd()}/dist`;
  const copy = `${process.cwd()}/functions/dist`;

  await fs.remove(copy);
  await fs.copy(src, copy);
})();
