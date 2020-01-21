import url from 'url'

export function getRepository(pack) {
  let repository
  if (pack == null) {
    pack = {}
  }
  if (
    (repository =
      (pack.repository != null ? pack.repository.url : undefined) != null
        ? pack.repository != null
          ? pack.repository.url
          : undefined
        : pack.repository)
  ) {
    const repoPath = url.parse(repository.replace(/\.git$/, '')).pathname
    const [name, owner] = Array.from(repoPath.split('/').slice(-2))
    if (name && owner) {
      return `${name}/${owner}`
    }
  }
  return null
}
