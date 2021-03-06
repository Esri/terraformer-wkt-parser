# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

## [1.2.1] - 2019-12-18

### Fixed
* Do not throw on MULTIPOLYGON with empty first outer ring.
* typings fixes
* release automation cleanup

## [1.2.0] - 2018-05-17

### Added
* Support for parsing GeoJSON [GeometryCollections](https://tools.ietf.org/html/rfc7946#section-3.1.8).

## [1.1.2] - 2016-08-17

### Fixed
* Ensured that built files are accessible in root directory when installing via `npm`

## [1.1.1] - 2016-08-17

### Added
* typings for TypeScript folks (thx [@JeffJacobson](https://github.com/JeffJacobson)) [#20](https://github.com/Esri/terraformer-wkt-parser/pull/20)

## [1.1.0] - 2016-03-11

### Added
* Support for coordinates in Scientific Notation

### Fixed
* Allow module to be loaded in Browser via CommonJS

## [1.0.1] - 2015-06-02
### Fixed
* Better error parsing

## [1.0.0] - 2013-11-12

Initial Release

[unreleased]: https://github.com/Esri/terraformer-wkt-parser/compare/v1.2.1...HEAD
[1.2.1]: https://github.com/Esri/terraformer-wkt-parser/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/Esri/terraformer-wkt-parser/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/Esri/terraformer-wkt-parser/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/Esri/terraformer-wkt-parser/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/Esri/terraformer-wkt-parser/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/Esri/terraformer-wkt-parser/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Esri/terraformer-wkt-parser/releases/tag/v1.0.0
