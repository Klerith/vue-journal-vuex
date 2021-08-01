module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
