// @ts-check

export default {
  config: {
    // Gets confused with MDC syntax
    MD003: false, // YAML front matter uses `---`
    MD007: false, // Indentation used for MDC (lists)
    MD018: false, // Slots are not headers `#title` or `#description`
    MD022: false, // Thinks YAML is that headers should be surrounded by blank lines
    MD023: false, // Indentation used for MDC
  },
  ignores: ['**/*.code-search', '**/bower_components', '**/node_modules', '**/.git', '**/vendor'],
  globs: ['./content/**/*.md'],
};
