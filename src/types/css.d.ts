declare module '*.css' {
    const content: string
    export default content
  }
  
  declare module 'tailwindcss/plugin' {
    import { PluginCreator } from 'postcss'
    const plugin: PluginCreator<unknown>
    export default plugin
  }