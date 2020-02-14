const dirs = require('../dirs')

const { getDirectoriesBasenames } = require('../utils')
const { writeFileSync, appendFileSync } = require('fs')

const updateImports = () => {
  const pages = getDirectoriesBasenames(dirs.pages)
  const components = getDirectoriesBasenames(dirs.components)

  writeFileSync(`${dirs.views}/_imports.js`, '')
  writeFileSync(`${dirs.views}/_imports.pug`, '')

  appendFileSync(
    `${dirs.views}/_imports.js`,
    `import '../assets/js/common.js'
import '../assets/scss/common.scss'\n`
  )

  const writeImports = (name, isPage) => {
    const path = isPage ? './pages' : './components'

    const mapExtToPath = {
      js: `import '${path}/${name}/${name}'
import '${path}/${name}/${name}.scss'
`,
      pug: `include ~@/components/${name}/${name}\n`
    }

    for (let ext in mapExtToPath) {
      if (isPage && ext === 'pug') continue

      const data = mapExtToPath[ext]

      appendFileSync(`${dirs.views}/_imports.${ext}`, data)
    }
  }

  pages.forEach(page => {
    writeImports(page, true)
  })

  components.forEach(component => {
    writeImports(component)
  })
}

if (process.env.npm_lifecycle_event === 'update::imports') {
  try {
    updateImports()
    console.log('Successfully updated')
  } catch (e) {
    console.log(e)
  }
}

module.exports = updateImports
