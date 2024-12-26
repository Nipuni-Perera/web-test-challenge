module.exports = {
  default: {
    require: ["./support/hooks.ts", "./steps/**/*.ts"], // Load hooks and step definitions
    requireModule: ["ts-node/register"], // Transpile TypeScript
    format: ["progress"], // Show progress
  },
};
