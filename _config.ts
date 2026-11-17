import lume from "@lumeland/lume"
import redirects from "@lumeland/plugin-redirects"

const site = lume()

site.copy('.well-known')
site.copy('assets')
site.copy('favicon.ico')
site.copy('resume.pdf')

site.use(redirects())

export default site
