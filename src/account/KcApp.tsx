import "./KcApp.css";
import { lazy, Suspense } from "react";
import type { PageProps } from "keycloakify/account";
import type { KcContext } from "./kcContext";
import { useI18n } from "./i18n";

import 'rsuite/dist/rsuite.min.css'

const Template = lazy(() => import("./Template"));

const Account = lazy(() => import("./pages/Account"));
const Password = lazy(() => import("./pages/Password"));
const Fallback = lazy(()=> import("keycloakify/account"));

const classes: PageProps<any, any>["classes"] = {
    "kcBodyClass": "my-root-account-class"
};

export default function KcApp(props: { kcContext: KcContext; }) {

    const { kcContext } = props;

    const i18n = useI18n({ kcContext });

    if (i18n === null) {
        return null;
    }

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "account.ftl": return <Account {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />
                    case "password.ftl": return <Password {...{ kcContext, i18n, Template, classes }} doUseDefaultCss={true} />;
                    default: return <Fallback {...{ kcContext, i18n, classes }} Template={Template} doUseDefaultCss={true} />;
                }
            })()}
        </Suspense>
    );

}
