module.exports = {
	git: { commitMessage: 'Release v${version}', tagName: 'v${version}' },
	github: { release: true },
	npm: { publish: true },
	hooks: {
		'before:init': ['npm run lint:check', 'npm run typecheck', 'npm test'],
	},
}
