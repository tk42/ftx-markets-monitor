Caching dependencies on stand-alone
-----

There is 6 steps.

## Add .yarnrc
```
yarn-offline-mirror "./vendor"
yarn-offline-mirror-pruning true
```

## Make a new directory `vendor`
```
mkdir vendor
```

## Add `scripts` in your package.json
```
  "scripts": {
    "online:download": "yarn install",
    "online:upgrade": "yarn upgrade",
    "online:clean": "rm -rf vendor/*.tgz node_modules/ && yarn cache clean",
    "offline:install": "yarn install --offline",
    "offline:clean": "rm -rf node_modules/ && yarn cache clean"
  }
```

## Download dependencies **(online)**
```
yarn online:download
```

## Copy vendor directory to stand-alone

## Install the dependencies on stand-alone
```
yarn offline:install
```


-----

Reference

[オフライン環境構築 npm編](https://qiita.com/kannkyo/items/5ec7ad14d0b99b4f5de8)
