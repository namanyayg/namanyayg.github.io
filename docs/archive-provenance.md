# Lab timeline provenance

The timeline was assembled on 22 October 2026 from existing portfolio records, original Git histories and selected public-facing source files recovered through SSH. It is an editorial archive, not a migration of the old application servers.

## Dates

- Clas: original Git history, 5 November 2012.
- Sympl: original Git history, 6 November 2012.
- Win95 animation: original Git history, 4 June 2013.
- MusiCose / MinSlide: October 2013 file timestamps; displayed as approximate.
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
- Nataco: repository starts 23 February 2020; the Dyeus-to-Nataco rename is dated 24 June 2021.
- Existing projects retain their portfolio dates, explicitly identified as such in the corresponding article. The Less Confusing C++ date describes its recorded publication, not when writing began.
- The existing site records a July 1998 birth month, supporting “at fourteen” for the November 2012 projects. No exact birthday is inferred.

## Exhibits

Screenshots were rendered locally from recovered public-facing HTML/CSS/builds. Original forms, analytics, remote APIs and account servers were not reactivated. External font stylesheets were allowed when available; rendering is not a claim of pixel-perfect historical browser output. Some older screenshots use fallback fonts. Videos and two Nataco illustrations are original files, not generated replacements.

The 2018 and 2023 portfolio screenshots were rendered from their original compiled frontend builds in an isolated browser with remote application requests blocked. Nataco was rendered from its static HTML with scripts removed. Only selected screenshots, images, illustrations and short videos are deployed; no server source/configuration, private databases or customer records are included.

The DubMaps diagram is newly generated from original building coordinates and labeled accordingly. Student datasets and live schedule behavior are excluded. Karya's interactive list is a new local-storage implementation of the original three-item idea, identified as such. It has no server or account integration.

Four original Code-in tutorials are transcribed into a small HTML allowlist. Script/style blocks and executable attributes are removed. Historic external hyperlinks are preserved as text. The original tutorials are historical writing, not updated operational instructions.

## Structure

`src/components/Archive/records.json` is the chronological catalogue. Each record has a dedicated `/lab/<slug>/` route and a prerendered HTML page. `readings.json` contains the four tutorial transcriptions. Existing demo URLs remain unchanged. The old category hashes remain functional as timeline filters.

Build with the existing repository toolchain and an available Chrome executable. The inherited Vue 2 / webpack 3 dependency alerts remain a separate maintenance task; this archive does not claim to remediate them.
