import { mergeConfig, UserConfig } from "vite";
import { StorybookConfig as StorybookBaseConfig } from "@storybook/core-common";
import { ViteFinal } from "@storybook/builder-vite";

type StorybookConfig = StorybookBaseConfig & {
  viteFinal?: ViteFinal;
};

const storybookConfiguration: StorybookConfig = {
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  staticDirs: ["../../../public"],
  stories: [
    "../libs/**/*.stories.mdx",
    "../libs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-material-ui",
  ],
  framework: "@storybook/react",
  features: {
    babelModeV7: true,
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  viteFinal: async (config: UserConfig, { configType }) => {
    const extendedConfig: UserConfig = {
      define: {
        "process.env": process.env,
        global: {},
      },
    };

    const mergedConfig = mergeConfig(config, extendedConfig);

    return mergedConfig;
  },
};

export default storybookConfiguration;
