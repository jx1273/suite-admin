import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'

export default antfu({
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/lib/**',
  ],
  rules: {
    'no-empty': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
  ...eslintPluginTailwindcss.configs['flat/recommended'],
  ...pluginQuery.configs['flat/recommended'],
})
