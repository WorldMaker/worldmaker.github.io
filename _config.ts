import lume from "lume/mod.ts"
import redirects from "lume/plugins/redirects.ts"

const site = lume()

site.copy('.well-known')
site.copy('assets')
site.copy('favicon.ico')
site.copy('resume.pdf')

site.use(redirects())

export default site
