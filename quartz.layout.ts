import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * ActuNotes — quartz.layout.ts
 * Layout disesuaikan dengan preview: sidebar kiri, konten tengah, panel kanan.
 */

// ── SHARED: muncul di semua halaman ──────────────────────────────────────────
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "actunotes.my.id": "https://actunotes.my.id",
      "GitHub": "https://github.com",
    },
  }),
}

// ── DEFAULT: halaman konten biasa (note, folder, tag) ────────────────────────
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "Navigator",
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedFolderState: true,
      sortFn: (a, b) => {
        // Folder di atas, file di bawah; keduanya alphabetical
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName, "id", { numeric: true })
        }
        if (a.file && !b.file) return 1
        return -1
      },
    })),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 2,
        scale: 1.1,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
      },
    })),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}

// ── INDEX: halaman homepage & folder index ───────────────────────────────────
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "Navigator",
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedFolderState: true,
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName, "id", { numeric: true })
        }
        if (a.file && !b.file) return 1
        return -1
      },
    })),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}
