const {
  lstatSync,
  readdirSync,
  existsSync,
  statSync,
  unlinkSync,
  rmdirSync
} = require('fs')
const { join, basename } = require('path')

const isFolderExists = source => existsSync(source)

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectoriesBasenames = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(dir => basename(dir))

const removeDir = path => {
  const list = readdirSync(path)

  list.forEach(name => {
    const filename = join(path, name)
    const stat = statSync(filename)

    if (stat.isDirectory()) {
      removeDir(filename)
    } else {
      unlinkSync(filename)
    }
  })

  rmdirSync(path)
}

module.exports.isFolderExists = isFolderExists
module.exports.isDirectory = isDirectory
module.exports.getDirectoriesBasenames = getDirectoriesBasenames
module.exports.removeDir = removeDir
