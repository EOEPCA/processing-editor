export default {
	// Set this to connect to a back-end automatically when opening the Web Editor,
	// so you could set this to https://example.com and then the Web Editor connects
	// to the corresponding back-end automatically.
	serverUrl: '',

	// The name of the service
	serviceName: 'EOEPCA',
	// The name of the app
	appName: 'Processing Editor',

	// Skip login and automatically load up the "discovery mode"
	skipLogin: false,

	// Default location for maps
	// Default to the center of the EU in Wuerzburg: 
	// https://en.wikipedia.org/wiki/Geographical_midpoint_of_Europe#Geographic_centre_of_the_European_Union
	// The zoom level should show most of Europe
	mapLocation: [49.8, 9.9],
	mapZoom: 4,

	// OSM Nominatim compliant geocoder URL, remove to disable
	geocoder: "https://nominatim.openstreetmap.org/search",

	// A message shown on the login page
	loginMessage: '',

	// The logo to show
	logo: './logo.png',

	// Defaults for notifications
	snotifyDefaults: {
		timeout: 10000,
		titleMaxLength: 30,
		bodyMaxLength: 120,
		showProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true
	},

	// List of supported web map services (all lower-cased)
	supportedMapServices: [
		'xyz',
		'wmts'
	],

	// List of supported batch job sharing services
	supportedBatchJobSharingServices: [
		'ShareEditor',
		'CopyUrl',
		'BlueskyShare',
		'MastodonSocialShare',
		'XShare'
	],

	// List of supported web service sharing services
	supportedWebServiceSharingServices: [
		'ShareEditor',
		'CopyUrl',
		'BlueskyShare',
		'MastodonSocialShare',
		'XShare'
	],

	// List of supported wizards
	supportedWizards: [
		{
			component: 'Download',
			title: 'Download Data',
			description: 'Just download a small portion of data from an openEO Collection.',
			requirements: capabilities => capabilities.apiType() === 'openeo'
		},
		{
			component: 'UDP',
			title: options => typeof options.process === 'string' ? options.process.replace(/@.+/, '') : 'Run UDP',
			description: 'Executes a user-defined process',
			requirements: capabilities => capabilities.apiType() === 'openeo'
		},
		{
			component: 'SpectralIndices',
			title: 'Compute Spectral Indices',
			description: 'A spectral index is a mathematical equation that is applied on the various spectral bands of an image per pixel. It is often used to highlight vegetation, urban areas, snow, burn, soil, or water/drought/moisture stress. Provided by Awesome Spectral Indices (https://github.com/awesome-spectral-indices/awesome-spectral-indices).',
			requiredProcesses: ['reduce_dimension'],
			requirements: capabilities => capabilities.apiType() === 'openeo'
		}
	],

	// Configure the (base)maps
	basemaps: [
		{
			// Title for the basemap
			title: "OpenStreetMap",
			// Templated URI for the XYZ basemap.
			url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			// Attributon for the basemap. HTML is allowed.
			attributions: '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',
			// Maximum zoom level
			maxZoom: 19
		}
	],

	// Import processes from openeo-community-examples repo
	importCommunityExamples: true,

	// Adds a button to the editor which allows to skip the login and send unauthenitcated
	// requests to endopints that otherwise would require authentication.
	allowIgnoreLogin: true,

	// Additional process namespaces to load by default
	processNamespaces: [],

	// Key is the OIDC provider id, value is the client ID
	oidcClientIds: {},

	// Show a warning if HTTP is used instead of HTTPS
	showHttpWarning: true,

	// refresh interval for jobs/user data/services etc. in minutes - doesn't apply to logs.
	// It's recommended to use a value between 1 and 5 minutes.
	dataRefreshInterval: 2,

	// Show or hide experimental and/or deprecated entites by default (e.g. processes, collections)
	showExperimentalByDefault: false,
	showDeprecatedByDefault: false,

	// number of items to show per page in the UI (jobs, services, files, UDPs) - null to disable pagination
	pageLimit: 50,
	
};