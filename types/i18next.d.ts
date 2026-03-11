import "i18next";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "common";
		resources: {
			common: typeof import("@locales/en/common.json");
			home: typeof import("@locales/en/home.json");
			projects: {
				stylestudio: typeof import("@locales/en/projects/stylestudio.json");
				emma: typeof import("@locales/en/projects/emma.json");
				azusa: typeof import("@locales/en/projects/azusa.json");
				webgpu: typeof import("@locales/en/projects/webgpu.json");
				animal: typeof import("@locales/en/projects/animal.json");

			};
		};
	}
}
