module.exports = {
  root: true,
  extends: ["universe/native", "universe/web"],
  ignorePatterns: ["build"],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
  },
};
