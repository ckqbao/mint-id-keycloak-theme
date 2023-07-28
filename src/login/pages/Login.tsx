// ejected using 'npx eject-keycloak-page'
import { useState, type FormEventHandler } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { useConstCallback } from "keycloakify/tools/useConstCallback";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

import mintCampusLogo from "../assets/MINT-Campus-Logo.png";
import mintVernetztLogo from "../assets/Mintvernetzt-Logo.png";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
        e.preventDefault();

        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        //NOTE: Even if we login with email Keycloak expect username and password in
        //the POST request.
        formElement.querySelector("input[name='email']")?.setAttribute("name", "username");

        formElement.submit();
    });

    return (
        <>
            <Template
                {...{ kcContext, i18n, doUseDefaultCss, classes }}
                displayInfo={social.displayInfo}
                displayWide={realm.password && social.providers !== undefined}
                headerNode={msgStr("loginTitle")}
                infoNode={
                    realm.password &&
                    realm.registrationAllowed &&
                    !registrationDisabled && (
                        <div id="kc-registration">
                            <span>
                                {msg("noAccount")}
                                <a className="kc-link registerLink" tabIndex={6} href={url.registrationUrl}>
                                    {msg("doRegister")}
                                </a>
                            </span>
                        </div>
                    )
                }
            >
                <div id="kc-form" className={clsx(realm.password && social.providers !== undefined && getClassName("kcContentWrapperClass"))}>
                    <div
                        id="kc-form-wrapper"
                        className={clsx(
                            realm.password &&
                            social.providers && [getClassName("kcFormSocialAccountContentClass"), getClassName("kcFormSocialAccountClass")]
                        )}
                    >
                        {realm.password && (
                            <form id="kc-form-login" onSubmit={onSubmit} action={url.loginAction} method="post">
                                <div className={getClassName("kcFormGroupClass")}>
                                    {(() => {
                                        const label = !realm.loginWithEmailAllowed
                                            ? "username"
                                            : realm.registrationEmailAsUsername
                                                ? "email"
                                                : "usernameOrEmail";

                                        const autoCompleteHelper: typeof label = label === "usernameOrEmail" ? "username" : label;

                                        return (
                                            <input
                                                tabIndex={1}
                                                id={autoCompleteHelper}
                                                className={getClassName("kcInputClass")}
                                                defaultValue={login.username ?? ""}
                                                //NOTE: This is used by Google Chrome auto fill so we use it to tell
                                                //the browser how to pre fill the form but before submit we put it back
                                                //to username because it is what keycloak expects.
                                                name={autoCompleteHelper}
                                                placeholder={msgStr(label) + '*'}
                                                required
                                                type="text"
                                                {...(usernameEditDisabled
                                                    ? { "disabled": true }
                                                    : {
                                                        "autoFocus": true,
                                                        "autoComplete": "off"
                                                    })}
                                            />
                                        );
                                    })()}
                                </div>
                                <div className={getClassName("kcFormGroupClass")}>
                                    <input
                                        tabIndex={2}
                                        autoComplete="off"
                                        id="password"
                                        className={getClassName("kcInputClass")}
                                        name="password"
                                        placeholder={msgStr("password") + '*'}
                                        required
                                        type="password"
                                    />
                                </div>
                                <div className={clsx(getClassName("kcFormGroupClass"), getClassName("kcFormSettingClass"))}>
                                    {realm.rememberMe && !usernameEditDisabled && (
                                        <div id="kc-form-options">
                                            <div className="checkbox">
                                                <label>
                                                    <input
                                                        tabIndex={3}
                                                        id="rememberMe"
                                                        name="rememberMe"
                                                        type="checkbox"
                                                        {...(login.rememberMe
                                                            ? {
                                                                "checked": true
                                                            }
                                                            : {})}
                                                    />
                                                    {msg("rememberMe")}
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {realm.resetPasswordAllowed && (
                                        <div className={getClassName("kcFormOptionsWrapperClass")}>
                                            <span>
                                                <a className="kc-link resetPassword" tabIndex={5} href={url.loginResetCredentialsUrl}>
                                                    {msg("doForgotPassword")}
                                                </a>
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div id="kc-form-buttons" className={getClassName("kcFormGroupClass")}>
                                    <input
                                        type="hidden"
                                        id="id-hidden-input"
                                        name="credentialId"
                                        {...(auth?.selectedCredential !== undefined
                                            ? {
                                                "value": auth.selectedCredential
                                            }
                                            : {})}
                                    />
                                    <button
                                        className={clsx(
                                            getClassName("kcButtonClass"),
                                            getClassName("kcButtonPrimaryClass"),
                                        )}
                                        name="login"
                                        id="kc-login"
                                        type="submit"
                                        disabled={isLoginButtonDisabled}
                                    >
                                        {msgStr("doLogIn")}
                                    </button>
                                    <button
                                        className={clsx(
                                            getClassName("kcButtonClass"),
                                            getClassName("kcButtonDefaultClass"),
                                        )}
                                        onClick={() => window.history.back()}
                                    >
                                        {msgStr("doCancel")}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                    {realm.password && social.providers !== undefined && (
                        <div
                            id="kc-social-providers"
                            className={clsx(getClassName("kcFormSocialAccountContentClass"), getClassName("kcFormSocialAccountClass"))}
                        >
                            <ul
                                className={clsx(
                                    getClassName("kcFormSocialAccountListClass"),
                                    social.providers.length > 4 && getClassName("kcFormSocialAccountDoubleListClass")
                                )}
                            >
                                {social.providers.map(p => (
                                    <li key={p.providerId} className={getClassName("kcFormSocialAccountListLinkClass")}>
                                        <a href={p.loginUrl} id={`zocial-${p.alias}`} className={clsx("zocial", p.providerId)}>
                                            <span>{p.displayName}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </Template>
            {/* <div className="kcRegisterBanner">
                <span>{msgStr("registerBanner")}</span>
                <div style={{ display: 'flex', gap: '23px', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                    <img src={mintVernetztLogo} alt="mint-vernetzt" />
                    <img src={mintCampusLogo} alt="mint-campus" />
                </div>
            </div> */}
        </>
    );
}
