import { createGetKcContext } from "keycloakify/account";

export type KcContextExtension = never

export const { getKcContext } = createGetKcContext<KcContextExtension>({
	mockData: [
		{
			pageId: "account.ftl",
			features: {
				// identityFederation: boolean;
				log: false,
				authorization: false,
			},
			message: {
				type: "warning",
				summary: 'hgsligh'
			},
			messagesPerField: {
				existsError: (fieldName: string) => fieldName === 'email'
			},
			url: {
				getLogoutUrl: () => "http://localhost:3000/logout"
			}
		},
		{
			pageId: "password.ftl",
			message: undefined,
			url: {
				getLogoutUrl: () => "http://localhost:3000/logout"
			}
		}
	]
});

export const { kcContext } = getKcContext({
	mockPageId: "account.ftl",
	// mockPageId: "password.ftl",
});

export type KcContext = NonNullable<ReturnType<typeof getKcContext>["kcContext"]>;
