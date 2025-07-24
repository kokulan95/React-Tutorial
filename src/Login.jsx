import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {


        const form = document.getElementById("form");
        const onEnter = (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                btnSubmit.click();
            }
        };
        form.addEventListener("keyup", onEnter);

        return () => {
            form.removeEventListener("keyup", onEnter);
        };
    }, []);

    const handleSubmit = () => {
        // Simulate login success and navigate to main
        navigate("/main");
    };

    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row">
                <div className="col-sm-2 col-lg-3"></div>

                <div className="col-sm-8 col-lg-6">
                    <form id="form">
                        <div className="card shadow pb-0 ms-3 me-3">
                            <fieldset>
                                <legend className="card-header bg-dark">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="text-white m-0">Login</h3>
                                        <a
                                            href="/hilfe/hilfetext/login/schueler"
                                            target="_blank"
                                            title="Hilfe zum Login"
                                            className="text-white ms-2"
                                        >
                                            <i className="fas fa-question-circle"></i>
                                        </a>
                                    </div>
                                </legend>

                                <div className="card-body">
                                    <div
                                        id="iewarning"
                                        className="text-center alert-danger pt-2 pb-2 mb-4 rounded"
                                    >
                                        <h5>Willkommen zur Fortgeschrittenen Webentwicklung!</h5>
                                        <p>
                                            Hier findest du viele praxisnahe Beispiele, die die zentralen Konzepte von
                                            React demonstrieren.
                                            Nutze bitte einen modernen Browser wie Edge oder Firefox, um die Inhalte
                                            optimal darstellen zu können.
                                        </p>

                                    </div>

                                    <div className="form-group pb-2">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="email"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                            <label htmlFor="email">eMail oder Benutzername</label>
                                            <div id="feedbackemail" className="invalid-feedback"/>
                                        </div>
                                    </div>

                                    <div className="form-group pb-2">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="passwort"
                                                name="password"
                                                required
                                            />
                                            <label htmlFor="password">Passwort</label>
                                            <div
                                                id="feedbackpassword"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        id="btnsubmit"
                                        type="button"
                                        onClick={handleSubmit}
                                        className="btn btn-secondary"
                                    >
                                        <i className="fas fa-sign-in-alt"></i> Einloggen
                                    </button>

                                    <br/>
                                    <br/>

                                    <p className="pt-3 mb-0 link-container d-flex flex-column gap-2">
                                        <a href="/personen/fluglehrer" target="_self">
                                            <i className="fas fa-user fa-fw"></i> Als Mitarbeiter
                                            registrieren
                                        </a>
                                        <a href="/login/forgetpassword" target="_self">
                                            <i className="fas fa-key fa-fw"></i> Passwort vergessen
                                        </a>
                                    </p>
                                </div>

                                <div className="card-footer text-center bg-dark text-white">
                                    <small>
                                        Viel Spaß beim Entdecken von React! Diese Sammlung von Beispielen soll dir
                                        helfen,
                                        zentrale Konzepte besser zu verstehen und selbst kreativ zu werden.
                                    </small>
                                </div>

                            </fieldset>
                        </div>
                    </form>
                </div>

                <div className="col-sm-2 col-lg-3"></div>
            </div>
        </div>
    );
}

export default Login;
