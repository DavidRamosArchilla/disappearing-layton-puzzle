const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // compilerOptions: {
  //   isCustomElement: tag => tag.startsWith('p-') // Exclude components starting with 'p-'
  // }
})
