const callPhpSDK = (itemId) => {
  return new Promise((resolve, reject) => {
    if (itemId === null) {
      reject('missing podio item ID');
    }

    let param = `--client="${process.env.PODIO_APP_CLIENT}"`;
    param += ` --secret="${process.env.PODIO_APP_SECRET}"`;
    param += ` --username="${process.env.PODIO_APP_USERNAME}"`;
    param += ` --password="${process.env.PODIO_APP_PASSWORD}"`;
    param += ` --itemID="${itemId}"`;

    //the command to be executed
    const cmd = `php ${__dirname}/phpScripts/podioAPIScript.php ${param}`;
    const { exec } = require('child_process');
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      }

      resolve(stdout);
    });
  });
};

module.exports = { callPhpSDK };
