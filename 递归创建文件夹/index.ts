const fs = require('fs')
const path = require('path')

function mkDirs(p: string) {
  if (fs.existsSync(p)) {
    return true
  }
  if (mkDirs(path.dirname(p))) {
    fs.mkdirSync(p)
    return true
  }
}