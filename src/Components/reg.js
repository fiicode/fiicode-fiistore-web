import { useEffect, useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
import '../assets/css/now-ui-kit.css';
import './reg.css'
import firebase from './firebaseConfig';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import loginIcon from '../assets/img/login3.jpg';
import { registerUserByEmail, registerUserByPhone, searchAccountExist } from '../utils/helpers';
import passwordIcon from './password.png'
import userIcon from './user.png'
import successSignIcon from './success.png'
import existIcon from './exist.png'

type AuthResult = {
  user: firebase.User;
};

const Reg = () => {
    const [loading, setLoading] = useState(false)
    const [newAuth, setNewAuth] = useState('');
    // const [credentialResponse, setCredentialResponse] = useState();
    const [accountExist, setAccountExist] = useState('');
    const [infoAccount, setInfoAccount] = useState(null);
    const [authUserInfo, setAuthUserInfo] = useState('')
    const [error, setError] = useState('')
    const [userToken, setUserToken] = useState('')

    useEffect(() => {
        const checkAccountExist = async (phone) => {
            try {
                const data = {
                    phone,
                };
                const res = await searchAccountExist(data);
                if (res?.status) {
                    setInfoAccount(res);
                    setAccountExist('exist');
                    if (
                        accountExist === 'exist' &&
                        newAuth &&
                        res?.hasPassword
                    ) {
                        setError(
                        'Ce numéro est déjà associé à un mot de passe, veuillez saisir le mot de passe'
                        );
                    }
                } else {
                    setAccountExist('no-exist');
                }
                return res;
            } catch (e) {
                console.log(e);
            }
        };
        const uiConfig = {
            // signInSuccessUrl: '#',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            ],
            tosUrl: '/',
            privacyPolicyUrl: '/',
            callbacks: {
                signInSuccessWithAuthResult(authResult: AuthResult) {
                    const { user } = authResult;
                    if (user?.phoneNumber) {
                        setNewAuth(user?.phoneNumber);
                        if (user?.providerData?.length > 0) {
                            setAuthUserInfo(user?.providerData[0]);
                        }
                        checkAccountExist(user?.phoneNumber);
                    }

                    if (user?.email) {
                        setNewAuth(user?.email)
                        if (user?.providerData?.length > 0) {
                            setAuthUserInfo(user?.providerData[0]);
                        }
                        checkAccountExist(user?.email);
                    }

                    return false;
                },
            },
        };
        const authContainer = document.getElementById('firebaseui-auth-container');
        if (!firebaseui.auth.AuthUI.getInstance() && authContainer) {
            const ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }, [accountExist, newAuth]);

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const emailInput = form.querySelector('#email_auth');
        const emailValue = emailInput.value;
        if (newAuth !== emailValue || authUserInfo?.email !== emailValue) {
            setError('Informations non valide')
            return;
        }
        try {
            const data = new FormData(form);
            const user = await registerUserByEmail(data);
            setUserToken(user)
            // https://fiddle.electronjs.org/launch?target=electron/v28.2.2/
            window.location.href = `fiistore-io://auth?token=${user?.token}`
        } catch (e) { 
            const firstErrorMessage = e?.errors?.find(error => error.message)?.message;
            if (firstErrorMessage) {
                setError(firstErrorMessage)
            }
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const phoneNumberInput = form.querySelector('#phone_number');
        const phoneNumberValue = phoneNumberInput.value;
        if (newAuth !== phoneNumberValue || authUserInfo?.uid !== phoneNumberValue) {
            setError('Informations non valide')
            return;
        }
        try {
            const data = new FormData(form);
            const user = await registerUserByPhone(data);
            setUserToken(user)
            //fiistore-io://auth?token=KL6nb2HVD2QN4rRcD3UcbIpsgfmdpV82E6DkYhS28sU
            window.location.href = `fiistore-io://auth?token=${user?.token}`
        } catch (e) { 
            const firstErrorMessage = e?.errors?.find(error => error.message)?.message;
            if (firstErrorMessage) {
                setError(firstErrorMessage)
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="page-header clear-filter" filter-color="orange">
            <div
                className="page-header-image"
                style={{ backgroundImage: `url(${loginIcon})` }}
            />
            <div className="content">
                <div className="container">
                    <div className="center-block w-auto-xs p-y-md title-poppins">
                        {userToken?.token || accountExist === 'exist' ? (
                            <>
                                    <div
                                        className="p-a-md box-color r box-shadow-z1 text-color account-section box-dasboard"
                                        style={{ borderRadius: '20px' }}
                                    >
                                        {accountExist === 'exist' ? (
                                            <>
                                                <img src={existIcon} width={200} alt="Success" />
                                            <p className="text-warn">Ce compte existe déjà pour <b className="text--white">{infoAccount?.user?.name}</b></p>
                                            </>
                                        ) : (   
                                            <>
                                                <img src={successSignIcon} width={200} alt="Success" />
                                                <p className="text-success">Votre compte a été créé avec succès</p>
                                            </>
                                        )}
                                        <p className="text--white">retourner sur <a href="#/">l'application</a> pour se connecter avec <b className="text-light-gray">{newAuth}</b> et son mot de passe</p>
                                    </div>
                            </>
                        ) : (
                            <>
                                {accountExist === 'no-exist' ? (
                                    <div
                                        className="p-a-md box-color r box-shadow-z1 text-color account-section box-dasboard"
                                        style={{ borderRadius: '20px' }}
                                    >
                                        <div className="dividar mb-3">
                                            <span className="lg">Terminer l'inscription</span>
                                        </div>
                                        {error ? (
                                            <div className="alert alert-danger mt-3">
                                                <button type="button" onClick={() => setError('')} className="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                {error}
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                        {newAuth && authUserInfo?.email ? (
                                            <form
                                                className="form"
                                                onSubmit={handleSubmitEmail}
                                            >
                                                <div className="form-group icon-left mt-2">
                                                    <div className="input_group">
                                                        <input
                                                            type="hidden"
                                                            className="form-control-login"
                                                            name="email_auth"
                                                            id="email_auth"
                                                            placeholder="Numéro ou Email"
                                                            required
                                                            defaultValue={newAuth}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <div className="input_group d-flex">
                                                        <input
                                                            type="text"
                                                            className="form-control-login col-7"
                                                            name="name"
                                                            id="name"
                                                                placeholder="Prénom"
                                                            defaultValue={authUserInfo?.displayName}
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            className="form-control-login ml-1 col-5"
                                                            name="last_name"
                                                            id="last_name"
                                                            placeholder="Nom"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group icon-left mt-1">
                                                    <div className="input_group">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            className="form-control-login"
                                                            placeholder="Mot de passe"
                                                            required
                                                        />
                                                        <div className="icon">
                                                                {/* <i className="ri-lock-password-line" /> */}
                                                            <img src={passwordIcon} alt="icon field passowrd" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group icon-left mt-1">
                                                    <div className="input_group">
                                                        <input
                                                            type="password"
                                                            name="password_confirmation"
                                                            className="form-control-login"
                                                            placeholder="Confirmer le mot de passe"
                                                            required
                                                        />
                                                        <div className="icon">
                                                            <img src={passwordIcon} alt="icon field passowrd" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="display-actions mt-2">
                                                    <button
                                                        type="submit"
                                                        className="btn white btn-sm-arrow btn-shadow visited"
                                                    >
                                                        <p>
                                                        {loading
                                                            ? 'création encours..'
                                                            : 'Créer votre compte'}
                                                        </p>
                                                        <div className="ico">
                                                            <img src={userIcon} alt="icon field passowrd" />
                                                        </div>
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            <form
                                                className="form"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="form-group icon-left mt-2">
                                                    <div className="input_group">
                                                        <input
                                                            type="hidden"
                                                            className="form-control-login"
                                                            name="phone_number"
                                                            id="phone_number"
                                                            placeholder="Numéro ou Email"
                                                            required
                                                            defaultValue={newAuth}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <div className="input_group d-flex">
                                                        <input
                                                            type="text"
                                                            className="form-control-login col-7"
                                                            name="name"
                                                            id="name"
                                                            placeholder="Prénom"
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            className="form-control-login ml-1 col-5"
                                                            name="last_name"
                                                            id="last_name"
                                                            placeholder="Nom"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group icon-left mt-1">
                                                    <div className="input_group">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            className="form-control-login"
                                                            placeholder="Mot de passe"
                                                            required
                                                        />
                                                        <div className="icon">
                                                                {/* <i className="ri-lock-password-line" /> */}
                                                            <img src={passwordIcon} alt="icon field passowrd" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group icon-left mt-1">
                                                    <div className="input_group">
                                                        <input
                                                            type="password"
                                                            name="password_confirmation"
                                                            className="form-control-login"
                                                            placeholder="Confirmer le mot de passe"
                                                            required
                                                        />
                                                        <div className="icon">
                                                            <img src={passwordIcon} alt="icon field passowrd" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="display-actions mt-2">
                                                    <button
                                                        type="submit"
                                                        className="btn white btn-sm-arrow btn-shadow visited"
                                                    >
                                                        <p>
                                                        {loading
                                                            ? 'création encours..'
                                                            : 'Créer votre compte'}
                                                        </p>
                                                        <div className="ico">
                                                            <img src={userIcon} alt="icon field passowrd" />
                                                        </div>
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        className="p-a-md box-color r box-shadow-z1 text-color account-section box-dasboard"
                                        style={{ borderRadius: '20px' }}
                                    >
                                        <div className="text-center pb-1 mb-3">
                                            <div className="dividar mb-4">
                                                <span className="lg">S'inscrire avec</span>
                                            </div>
                                            {error ? (
                                                <div className="alert alert-danger">
                                                    <button type="button" onClick={() => setError('')} className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    {error}
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                            {/* <div>
                                                <GoogleLogin
                                                    // theme="filled_black"
                                                    shape="pill"
                                                    onSuccess={(credentialResponse) => {
                                                        setCredentialResponse(credentialResponse);
                                                    }}
                                                    onError={() => {
                                                        console.log('Login Failed');
                                                    }}
                                                />
                                            </div> */}
                                            <div className="mt-2">
                                                <div id="firebaseui-auth-container" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Reg