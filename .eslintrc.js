// const path = require('path');

module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  // "settings": {
  //   "import/resolver": {
  //     "webpack": {
  //       "config": '../webpack/dev.config.js'
  //     }
  //   }
  // },
  "rules": {
    "arrow-parens": ["error", "as-needed"],
    "import/no-extraneous-dependencies": ["off", "never"],
    "import/no-dynamic-require": ["off", "never"],
    "global-require": ["off", "never"],
    "one-var": ["off", "never"],
    "comma-dangle": ["off", "never"],
    "camelcase": ["off", "never"],
    "no-shadow": ["off", "never"],
    "linebreak-style": ["off", "unix"],
    "no-bitwise": ["off", "never"],
    "no-mixed-operators": ["off", "never"],
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true
    }],
    "no-underscore-dangle": ["off", "never"],
    "max-len": ["error", 130],
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true
    }],
    // "quotes": [
    //     "error",
    //     "double"
    // ],
    "semi": ["error", "always"],
     "eqeqeq": ["off", "never"],
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx"]
    }],
    "react/jsx-no-bind": ["off", "never"],
    "react/forbid-prop-types": ["off", "never"],
    "react/prop-types": ["off", "never"],
    "react/no-array-index-key": ["off", "never"],
    "react/no-did-mount-set-state": ["off", "never"],
    "jsx-a11y/no-static-element-interactions": ["off", "never"],
    "jsx-a11y/no-noninteractive-element-interactions": ["off", "never"],
    "jsx-a11y/alt-text": ["off", "never"],
    "jsx-a11y/media-has-caption": ["off", "never"],
    "import/extensions": ["off", "never"],
    "import/no-unresolved": ["off", "nerver"],
    "no-plusplus": ["off", "nerver"],
    "no-console": ["off", "nerver"]  
  }
}
