# Changelog

All notable changes to this mod are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Each version has its own "## [version] - date" section.
The function in build.gradle automatically reads ONLY the section of the current version
(rootProject.mod_version) and pastes it into the release changelog.

## [Unreleased]
- (add here changes that haven't been released yet)

## [x.2.0] - September 2026

### Added
- Leaderboard command
- Dyeable Wallet

### Changed
- Changed the Netherite Ingot Banker Trade into Ancient Debris
- Changed the license to ARR (All Rights Reserved)

### Fixed
- Transfer command

## [x.1.0] - April 2026

### Added
- Update exchange rates (auto sync every 7 days in the jar using the official BCE XML rates)
- New card system (and a better one) based by the UUID and other things
- New useful commands
- ATM GUI

### Changed
- Improved performance

### Fixed
- Various bug fixes
- JEI Compat for 1.21.11 and newer

## [x.0.12-beta] - September 2025

### Added
- If you have [currency] in your command help description it will appear the currency abreviation (e.g. HUF, RON, EUR)
- Set the max balance per card to 1 000 000 000 (1 Billion)
- New translations: Romanian (RO), German (DE), Polish (PL), Arabic (AR), Shakespearean English (WS), Dutch (NL), Czech (CZ)
- Added EGP (Egyptian Pound) currency
- Added the KEY (you need it to have access to the Bank Machine, has 50 durability, enchantable with UNBREAKING and MENDING)
- Added new custom landmarks (Cottage, Hotel, Snowy Mansion - high value landmarks, Desert Castle, Gong, Jungle Hut, Mangrove Witch Hut, Swamp Witch Hut - small landmarks)
- KEY system for cards
- New Rusty and Supreme cards
- Added Polymer, Polymer Sheet, Plastic, Plastic Card

### Changed
- Changed the village houses (now there are different houses for every village with custom loot, regional currencies)
- Changed the recipes for getting smaller banknotes or bigger ones (you now have to go to Crafting Table)
- Changed the Recipes for ATM, Cards
- Change the tax of Steel Card to 1%
- Changed the textures of every card (removed the transparency corners)
- Changed the Villager profession textures (Banker & Exchanger)

### Fixed
- Fixed when upgrading from a card to another (if you have money in it the money stays)
- Fixed SetdefaultCurrency command (the command itself will only change in the config file, so only the new cards will have the new currency set)
- Fix setCurrency Command
- Fix withdraw command
- Fix broken textures

### Removed
- Removed BGN (Bulgarian Leva)
