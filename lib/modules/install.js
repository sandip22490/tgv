var https = require('follow-redirects').https;
// const https = require('https');
const os = require('os');
const fs = require('fs');
const { join } = require('path');
const { arch } = process;
const unzip = require('decompress');
const { P_END, P_ERROR, P_INFO, P_OK, P_WARN } = require('../utils/colors');

exports.install = async (version) => {
  try {
    const store = join(__dirname, '../..', 'store');
    const getVersion = os.platform() === 'win32' ? `${version}.exe` : version;
    const fileExt = os.platform() === 'win32' ? '.exe' : '';
    const fileName = join(__dirname, '../..', 'store', `${version}${fileExt}`);

    if (fs.existsSync(`${store}/${getVersion}`)) {
      console.log(`${P_WARN}Terragrunt ${version} is already installed${P_END}`);
      return console.log(`To use this version Run: ${P_OK}tgv use ${version}${P_END}`)
    }

    const sysOs = os.platform() === 'win32' ? 'windows' : os.platform();
    let sysArch = arch === 'x64' ? 'amd64' : arch;

    if (os.platform() === 'darwin') {
      sysArch = 'amd64'
    }

    const url = `https://github.com/gruntwork-io/terragrunt/releases/download/v${version}/terragrunt_${sysOs}_${sysArch}${fileExt}`;

    async function download(url) {
      return new Promise((resolve, reject) => {
        const req = https.get(url, { maxRedirects: 10 }, (res) => {
          console.log(`${P_INFO}Installing terragrunt ${version}${P_END}`);

          const fileStream = fs.createWriteStream(fileName);
          res.pipe(fileStream);

          fileStream.on('error', (err) => {
            console.log(`${P_ERROR}Error writing stream ${P_END}\n`, err);
          });

          fileStream.on('close', async () => {
            resolve()
          });

          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`${P_OK}Successful!${P_END}`);
            console.log(`To use this version Run: ${P_OK}tgv use ${version}${P_END}`);
          })
        });

        req.on('error', (err) => {
          console.log(`${P_ERROR}Error downloading the terragrunt ${version}${P_END}\n`, err)
          reject()
        });

      })
    }

    const makeExecutable = async (version) => {
      if (sysOs !== 'windows') {
        fs.chmodSync(`${store}/${version}`, '755');
      }
    }

    await download(url);
    await makeExecutable(getVersion)
  } catch ({ message }) {
    console.log('ERROR:', message)
  }
}
