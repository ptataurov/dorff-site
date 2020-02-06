const { mkdirSync, writeFileSync } = require('fs')
const { getDirectoriesBasenames } = require('../utils')
const { pages } = require('../dirs')

const updateImports = require('./update-imports')

const name = process.argv[2]
const existingPages = getDirectoriesBasenames(`${pages}`)

if (existingPages.includes(name)) {
  const msg = `Page with the name ${name} already exists`

  throw new Error(msg)
}

const pagePath = `${pages}/${name}`

mkdirSync(pagePath)

writeFileSync(
  `${pagePath}/${name}.pug`,
  `extends ~@/layout
block title
  title

block content

  - const data = require('./data.js')
  - const css = require('./_css.json')

  div(id=css.${name}Pg)

`
)

writeFileSync(
  `${pagePath}/${name}.scss`,
  `#${name}-pg {

}

// Global styles


// Media queries

@include less-xl {

}

@include less-lg {
  
}

@include less-md {
  
}

@include less-sm {
  
}

// Mixes


// Animation
`
)

writeFileSync(`${pagePath}/${name}.js`, '')

writeFileSync(`${pagePath}/_css.json`, '{}')

writeFileSync(
  `${pagePath}/data.js`,
  `module.exports = {
    
}`
)

updateImports()

console.log(`Page ${name} successfully created`)
