import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * ActuNotes — quartz.config.ts
 * Warna & font disesuaikan dengan preview dark (Precision Dark)
 * dan light (Warm Editorial). Toggle dark/light via komponen Darkmode.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ActuNotes",
    pageTitleSuffix: " · ActuNotes",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "id-ID",
    baseUrl: "actunotes.my.id",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    generateAliases: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Dark mode pakai Instrument Serif + Geist + Geist Mono
        // Light mode pakai Lora + DM Sans + DM Mono
        // Quartz hanya support 1 set font — kita pakai dark mode fonts sebagai default,
        // lalu override font di custom.scss untuk light mode via [saved-theme="light"]
        header: "Instrument Serif",
        body: "Geist",
        code: "Geist Mono",
      },
      colors: {
        // ── DARK MODE ────────────────────────────────────────────────────────
        // Dari actunotes-preview-v2.html
        darkMode: {
          light: "#16151a",           // --bg: background utama
          lightgray: "#26252e",       // --bg-elevated: card, elevated surface
          gray: "#857f76",            // --text-3: teks tersier, label muted
          darkgray: "#b8b3aa",        // --text-2: teks sekunder, deskripsi
          dark: "#f2efe9",            // --text-1: teks utama
          secondary: "#d4a853",       // --accent: gold — DIPERTAHANKAN
          tertiary: "#6ab88f",        // --green: status aktif, link hover
          highlight: "rgba(212,168,83,0.14)",    // --accent-dim: selection/highlight bg
          textHighlight: "rgba(212,168,83,0.25)", // highlight teks yang dicari
        },

        // ── LIGHT MODE ───────────────────────────────────────────────────────
        // Dari actunotes-light.html
        lightMode: {
          light: "#f7f5f0",           // --bg: warm off-white
          lightgray: "#f2efe8",       // --bg-warm: surface card
          gray: "#a09a92",            // --ink-3: teks tersier
          darkgray: "#6b6660",        // --ink-2: teks sekunder
          dark: "#1c1a16",            // --ink: teks utama
          secondary: "#1a6b4a",       // --accent: forest green
          tertiary: "#2d5fa8",        // --blue: link hover
          highlight: "rgba(26,107,74,0.08)",     // --accent-light: selection bg
          textHighlight: "rgba(26,107,74,0.15)", // highlight teks yang dicari
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "one-dark-pro",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
