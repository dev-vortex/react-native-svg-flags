<p align="center">
    <a href="https://travis-ci.com/github/dev-vortex/react-native-svg-flags"><img src="https://badgen.net/travis/dev-vortex/react-native-svg-flags?icon=travis&label=build"/></a>
    <a href="https://www.npmjs.com/package/@dev-vortex/react-native-svg-flags"><img src="https://badgen.net/npm/v/@dev-vortex/react-native-svg-flags?icon=npm&label"/></a>
    <a href="https://www.npmjs.com/package/@dev-vortex/react-native-svg-flags"><img src="https://badgen.net/npm/license/@dev-vortex/react-native-svg-flags?icon=npm"/></a> 
    <a href="https://www.npmjs.com/package/@dev-vortex/react-native-svg-flags"><img src="https://badgen.net/npm/types/@dev-vortex/react-native-svg-flags?icon=typescript"/></a> 
</p>

<p align="center">
    <a href="https://codeclimate.com/github/dev-vortex/fireback/maintainability"><img src="https://api.codeclimate.com/v1/badges/5419722b298d8af094d55/maintainability"/></a>
    <a href="https://codeclimate.com/github/dev-vortex/fireback/test_coverage"><img src="https://api.codeclimate.com/v1/badges/5419722b298d8af094d55/test_coverage"/></a>
</p>

<p align="center">
    <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"/></a>
    <a href="https://www.conventionalcommits.org/"><img src="https://img.shields.io/badge/conventional-commits-pink"/></a>
</p>

# Firebase Backend Helper
This package aims to provide components that easily allows showing flags for react native projects

## Installation
```
yarn add @dev-vortex/react-native-svg-flags
```

or

```
npm install @dev-vortex/react-native-svg-flags
```

## Usage
Just use the provided flag type component (each is optimised for specific usage)

### Round flags

```typescript
<RoundFlag code="PT" size={30} />
```

### Properties
| Name   | Description               | Default Value | Possible Values   |
| ------ | ------------------------- | ------------- | ----------------- |
| code   | Country code (`required`) | undefined     | ISO 2 letter code |
| size   | Size of the flag          | 20            | numeric           |
| testID | Test ID                   | undefined     | any               |