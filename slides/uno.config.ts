import { defineConfig } from 'unocss'

// Slidev's built-in navbar/toolbar icons live inside @slidev/client components,
// which UnoCSS does not always scan in dev. Safelisting them forces preset-icons
// to generate the rules so the toolbar icons render correctly.
const slidevNavIcons = [
  'i-carbon:arrow-left',
  'i-carbon:arrow-right',
  'i-carbon:apps',
  'i-carbon:maximize',
  'i-carbon:minimize',
  'i-carbon:user-avatar',
  'i-carbon:video',
  'i-carbon:stop-outline-glyph',
  'i-carbon:chevron-up',
  'i-carbon:chevron-down',
  'i-carbon:pen',
  'i-carbon:user-speaker',
  'i-carbon:text-annotation-toggle',
  'i-carbon:document-pdf',
  'i-carbon:settings-adjust',
  'i-carbon:information',
  'i-carbon:close',
  'i-carbon:list-boxes',
  'i-carbon:drop-photo',
  'i-carbon:download',
  'i-carbon:edit',
  'i-carbon:menu',
  'i-carbon:sun',
  'i-carbon:moon',
  'i-ph:arrow-up-bold',
  'i-ph:arrow-down-bold',
]

export default defineConfig({
  safelist: slidevNavIcons,
})
