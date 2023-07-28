// ejected using 'npx eject-keycloak-page'
import { useEffect, useMemo, useRef, useState } from "react";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

import mintCampusLogo from "../assets/MINT-Campus-Logo.png";
import mintVernetztLogo from "../assets/Mintvernetzt-Logo.png";

export default function Register(
    props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const agreementLabelRef = useRef(null);

    const [agreementChecked, setAgreementChecked] = useState(false);

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    });

    const {
        url,
        messagesPerField,
        register,
        realm,
        passwordRequired,
        recaptchaRequired,
        recaptchaSiteKey,
    } = kcContext;

    const { msg, msgStr } = i18n;
    const { registrationEmailAsUsername } = realm;

    const schema = useMemo(
        () =>
            yup.object({
                firstName: yup.string().required(msgStr("error-empty")),
                lastName: yup.string().required(msgStr("error-empty")),
                email: yup
                    .string()
                    .email(msgStr("error-invalid-email"))
                    .required(msgStr("error-empty")),
                username: registrationEmailAsUsername ? yup.string() : yup.string().required(msgStr("error-empty")),
                password: yup.string().required(msgStr("error-empty")),
                "password-confirm": yup
                    .string()
                    .required(msgStr("error-empty"))
                    .oneOf([yup.ref("password")], "Your passwords do not match."),
            }),
        [registrationEmailAsUsername]
    );

    const {
        formState: { errors, isDirty },
        handleSubmit,
        register: registerField,
        unregister: unregisterField,
    } = useForm({
        defaultValues: {
            firstName: register.formData.firstName ?? "",
            lastName: register.formData.lastName ?? "",
            email: register.formData.email ?? "",
            password: "",
            "password-confirm": "",
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const observer = new MutationObserver((mutations, mutationInstance) => {
            const termsOfUseLink =
                document.querySelector<HTMLAnchorElement>("a#terms-of-use");
            const privacyPolicy =
                document.querySelector<HTMLAnchorElement>("a#privacy-policy");
            if (termsOfUseLink && privacyPolicy) {
                termsOfUseLink.setAttribute("href", "https://mintcampus.org/nutzungsbedingungen/");
                termsOfUseLink.setAttribute("target", "_blank");
                termsOfUseLink.style.color = "#f6688e";
                termsOfUseLink.style.fontWeight = "bold";
                termsOfUseLink.style.textDecoration = "underline";
                termsOfUseLink.innerHTML = msgStr("termsTitle");

                privacyPolicy.setAttribute("href", "https://mintcampus.org/datenschutzerklaerung/");
                privacyPolicy.setAttribute("target", "_blank");
                privacyPolicy.style.color = "#f6688e";
                privacyPolicy.style.fontWeight = "bold";
                privacyPolicy.style.textDecoration = "underline";
                privacyPolicy.innerHTML = msgStr("privacyPolicyTitle");

                mutationInstance.disconnect();
            }
        });
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });

        document.body.classList.add("register");

        return () => {
            observer.disconnect();
            document.body.classList.remove("register");
        };
    }, []);

    useEffect(() => {
        if (!registrationEmailAsUsername) {
            registerField("username");
        } else {
            unregisterField("username");
        }
    }, [registrationEmailAsUsername, registerField, unregisterField]);

    const submit: SubmitHandler<yup.InferType<typeof schema>> = (_values, event) => {
        event?.target.submit()
    };

    return (
        <>
            <Template
                {...{ kcContext, i18n, doUseDefaultCss, classes }}
                displayInfo
                headerNode={msg("registerTitle")}
                infoNode={
                    <div id="back-to-login">
                        <span>
                            {msg("alreadyHaveAccount")}
                            <a href={url.loginUrl}>{msg("doLogIn")}</a>
                        </span>
                    </div>
                }
            >
                <form
                    id="kc-register-form"
                    className={getClassName("kcFormClass")}
                    onSubmit={handleSubmit(submit)}
                    action={url.registrationAction}
                    method="post"
                >
                    <div
                        className={clsx(
                            getClassName("kcFormGroupClass"),
                            messagesPerField.printIfExists(
                                "firstName",
                                getClassName("kcFormGroupErrorClass")
                            ),
                            {
                                [getClassName("kcFormGroupErrorClass")]: !!errors.firstName,
                            }
                        )}
                    >
                        <div className={getClassName("kcInputWrapperClass")}>
                            <input
                                {...registerField("firstName")}
                                type="text"
                                id="firstName"
                                className={getClassName("kcInputClass")}
                                placeholder={msgStr("firstName") + "*"}
                            />
                        </div>
                    </div>

                    <div
                        className={clsx(
                            getClassName("kcFormGroupClass"),
                            messagesPerField.printIfExists(
                                "lastName",
                                getClassName("kcFormGroupErrorClass")
                            ),
                            {
                                [getClassName("kcFormGroupErrorClass")]: !!errors.lastName,
                            }
                        )}
                    >
                        <div className={getClassName("kcInputWrapperClass")}>
                            <input
                                {...registerField("lastName")}
                                type="text"
                                id="lastName"
                                className={getClassName("kcInputClass")}
                                placeholder={msgStr("lastName") + "*"}
                            />
                        </div>
                    </div>
                    <div
                        className={clsx(
                            getClassName("kcFormGroupClass"),
                            messagesPerField.printIfExists(
                                "email",
                                getClassName("kcFormGroupErrorClass")
                            ),
                            {
                                [getClassName("kcFormGroupErrorClass")]: !!errors.email,
                            }
                        )}
                    >
                        <div className={getClassName("kcInputWrapperClass")}>
                            <input
                                {...registerField("email")}
                                type="text"
                                id="email"
                                className={getClassName("kcInputClass")}
                                autoComplete="email"
                                placeholder={msgStr("email") + "*"}
                            />
                        </div>
                    </div>
                    {!realm.registrationEmailAsUsername && (
                        <div
                            className={clsx(
                                getClassName("kcFormGroupClass"),
                                messagesPerField.printIfExists(
                                    "username",
                                    getClassName("kcFormGroupErrorClass")
                                ),
                                {
                                    [getClassName("kcFormGroupErrorClass")]: !!errors.username,
                                }
                            )}
                        >
                            <div className={getClassName("kcInputWrapperClass")}>
                                <input
                                    {...registerField("username")}
                                    type="text"
                                    id="username"
                                    className={getClassName("kcInputClass")}
                                    name="username"
                                    defaultValue={register.formData.username ?? ""}
                                    autoComplete="username"
                                    placeholder={msgStr("username") + "*"}
                                />
                            </div>
                        </div>
                    )}
                    {passwordRequired && (
                        <>
                            <div
                                className={clsx(
                                    getClassName("kcFormGroupClass"),
                                    messagesPerField.printIfExists(
                                        "password",
                                        getClassName("kcFormGroupErrorClass")
                                    ),
                                    {
                                        [getClassName("kcFormGroupErrorClass")]: !!errors.password,
                                    }
                                )}
                            >
                                <div className={getClassName("kcInputWrapperClass")}>
                                    <input
                                        {...registerField("password")}
                                        type="password"
                                        id="password"
                                        className={getClassName("kcInputClass")}
                                        autoComplete="new-password"
                                        placeholder={msgStr("password") + "*"}
                                    />
                                </div>
                            </div>

                            <div
                                className={clsx(
                                    getClassName("kcFormGroupClass"),
                                    messagesPerField.printIfExists(
                                        "password-confirm",
                                        getClassName("kcFormGroupErrorClass")
                                    ),
                                    {
                                        [getClassName("kcFormGroupErrorClass")]:
                                            !!errors["password-confirm"],
                                    }
                                )}
                            >
                                <div className={getClassName("kcInputWrapperClass")}>
                                    <input
                                        {...registerField("password-confirm")}
                                        type="password"
                                        id="password-confirm"
                                        className={getClassName("kcInputClass")}
                                        placeholder={msgStr("passwordConfirm") + "*"}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    <div className={getClassName("kcFormGroupClass")}>
                        <div className={getClassName("kcInputWrapperClass")}>
                            <div id="kc-agreement">
                                <div>
                                    <input
                                        id="agreement"
                                        name="agreement"
                                        type="checkbox"
                                        checked={agreementChecked}
                                        onChange={(event) =>
                                            setAgreementChecked(event.target.checked)
                                        }
                                        required={isDirty && !Object.keys(errors).length}
                                    />
                                </div>
                                <div>
                                    <label ref={agreementLabelRef} htmlFor="agreement">
                                        {msg("registerTermsAgreement")}{" "}
                                        {msg("registerPrivacyPolicyAgreement")}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {recaptchaRequired && (
                        <div className="form-group">
                            <div className={getClassName("kcInputWrapperClass")}>
                                <div
                                    className="g-recaptcha"
                                    data-size="compact"
                                    data-sitekey={recaptchaSiteKey}
                                ></div>
                            </div>
                        </div>
                    )}
                    {!!Object.keys(errors).length && (
                        <div className="kcFormError">
                            {errors.firstName?.message ??
                                errors.lastName?.message ??
                                errors.email?.message ??
                                errors.password?.message ??
                                errors["password-confirm"]?.message ??
                                ""}
                        </div>
                    )}
                    <div className={getClassName("kcFormGroupClass")}>
                        <div
                            id="kc-form-buttons"
                            className={getClassName("kcFormButtonsClass")}
                        >
                            <button
                                className={clsx(
                                    getClassName("kcButtonClass"),
                                    getClassName("kcButtonPrimaryClass")
                                )}
                                id="kc-register"
                                type="submit"
                            >
                                {msgStr("doRegister")}
                            </button>
                            <button
                                className={clsx(
                                    getClassName("kcButtonClass"),
                                    getClassName("kcButtonDefaultClass")
                                )}
                                onClick={() => window.history.back()}
                            >
                                {msgStr("doCancel")}
                            </button>
                        </div>
                    </div>
                </form>
            </Template>
            <div className="kcRegisterBanner">
                <span>{msgStr("registerBanner")}</span>
                <div style={{ display: 'flex', gap: '23px', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                    <img src={mintVernetztLogo} alt="mint-vernetzt" />
                    <img src={mintCampusLogo} alt="mint-campus" />
                </div>
            </div>
        </>
    );
}
