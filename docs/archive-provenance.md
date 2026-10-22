# Lab timeline provenance

The timeline was assembled on 22 October 2026 from existing portfolio records, original Git histories and selected public-facing source files recovered through SSH. It is an editorial archive, not a migration of the old application servers.

## Dates

- Clas: original Git history, 5 November 2012.
- Sympl: original Git history, 6 November 2012.
- Win95 animation: original Git history, 4 June 2013.
- MusiCose: a verified Wayback capture survives from 16 April 2013; local files have October 2013 timestamps. MinSlide: October 2013 file timestamps. Launch dates remain approximate.
- First portfolio: October 2013 supporting files, January 2014 HTML snapshot. Original CSS and thumbnails are missing, so the page is represented by text rather than a fabricated visual restoration.
- Agrobot / Cropstor: August 2014 file timestamps; displayed as approximate.
- Code Warriors: Code Wars 2014 is named in the page; November 2014 files.
- Code-in: original Git history, December 2014–January 2015.
- Karya: original Git history, May–November 2015.
- Libo: original Git history, 27–28 August 2015.
- Digital India: October 2015 file timestamps; displayed as approximate.
- Unexpend: original Git history, June–August 2016.
- PlayTogether: original Git history, 1 October 2016.
- DubMaps: original Git history, 15–17 October 2016.
- Portfolio in motion: repository starts 9 May 2018, with layout/animation work through July. The later edition is a November 2023 snapshot, not a claimed 2023 launch.
- Nataco: recovered repository starts 23 February 2020; its Dyeus-to-Nataco rename is dated 24 June 2021. An earlier, different Nataco homepage was archived on 13 August 2020, so that repository revision does not date the brand’s beginning.
- Existing projects retain their portfolio dates, explicitly identified as such in the corresponding article. The Less Confusing C++ date describes its recorded publication, not when writing began.
- The age shown for the November 2012 projects follows the existing portfolio.

## Exhibits

Screenshots were rendered locally from recovered public-facing HTML/CSS/builds. Original forms, analytics, remote APIs and account servers were not reactivated. External font stylesheets were allowed when available; rendering is not a claim of pixel-perfect historical browser output. Some older screenshots use fallback fonts. Videos and two Nataco illustrations are original files, not generated replacements.

The 2018 and 2023 portfolio screenshots were rendered from their original compiled frontend builds in an isolated browser with remote application requests blocked. Nataco was rendered from its static HTML with scripts removed. Only selected screenshots, images, illustrations and short videos are deployed; no server source/configuration, private databases or customer records are included.

The DubMaps diagram is newly generated from original building coordinates and labeled accordingly. Student datasets and live schedule behavior are excluded. Karya's interactive list is a new local-storage implementation of the original three-item idea, identified as such. It has no server or account integration.

Four original Code-in tutorials are transcribed into a small HTML allowlist. Script/style blocks and executable attributes are removed. Historic external hyperlinks are preserved as text. The original tutorials are historical writing, not updated operational instructions.

## Structure

`src/components/Archive/records.json` is the chronological catalogue. Each record has a dedicated `/lab/<slug>/` route and a prerendered HTML page. `readings.json` contains the four tutorial transcriptions. Existing demo URLs remain unchanged. The old category hashes remain functional as timeline filters.

Build with the existing repository toolchain and an available Chrome executable. The inherited Vue 2 / webpack 3 dependency alerts remain a separate maintenance task; this archive does not claim to remediate them.

## Web archives

Verified Wayback links are attached to the corresponding catalogue entries. Capture dates identify the archived page, not the project’s launch. The Code Warriors link opens an earlier homepage advertising Code Wars 2013; the local exhibit shows the later Code Wars 2014 design.

TLDR;Tech is documented in the author’s 28 May 2014 Ghost development post and a Wayback capture dated 2 June 2014. Its screenshot is the existing public blog image showing news from 5 June 2014, converted to WebP. The 2014 homepage identifies Ghost 0.4; the later retrospective’s WordPress reference was not used as technical provenance. The new description was checked against those sources and passed through the same first-person humanizer review as the other entries.

Archive links were opened and their contents checked against the projects. A surviving HTML capture does not guarantee that every image, stylesheet or interactive feature also survives.

## Additional recovered projects

Seven entries were added from selected original source: beta+, Exun 2013, Richie, Proxydo, Techathlon, Visionary and Karma. Their date annotations distinguish Git dates, archive-entry timestamps and page dates from unverified launch dates. All new summaries and stories were reviewed in first person using the humanizer rules; they do not invent memories, users or outcomes.

The beta+ masthead preview uses original HTML, CSS and graphics, with a height constraint to correct the logo clipping in a modern browser. External embeds and scripts were blocked during rendering. Exun shows original RV/palette illustrations and the original background arranged into a new exhibit, explicitly labeled as such. The original parody copy is not reproduced. No live account, payment, cloud-provisioning or messaging integration was restored.

The five projects without a reviewed visual exhibit use text entries. Techathlon is explicitly not yet playable. Karma’s constant-score analyzer is described as unfinished. Visionary’s timetable parser is not presented as a general document reader. Operational source, provider credentials, personal records and server paths are excluded from this public catalogue.
