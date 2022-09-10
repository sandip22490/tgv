const client = require('https');

const getAvailableVersions = (url) => {
  return new Promise((resolve, reject) => {
    client.get(url, {
      headers: {
        'User-Agent': 'tgv'
      }
    }, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        try {
          data = JSON.parse(data);
          resolve(data);
        } catch (error) {
          resolve(data);
        }
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
};

exports.fetchAllVersions = async () => {
  const versions = await getAvailableVersions('https://api.github.com/repos/gruntwork-io/terragrunt/tags?per_page=100');
  return versions.map(v => v.name.replace('v', ''));
};
