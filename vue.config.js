module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData : `
				@import './src/assets/scss/variables.scss';
				@import './src/assets/scss/mixsins.scss';
  				`,
			},
		},
	},
	publicPath: '/',
};