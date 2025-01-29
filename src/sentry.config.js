const { withSentryConfig } = require("@/sentry/nextjs");

const moduleExport = {
    // your existing Next.js config here
};

const SentryWebpackPluginOptions = {
    slient: true, // suppresses all logs
};

module.export = withSentryConfig(moduleExports, SentryWebpackPluginOptions);