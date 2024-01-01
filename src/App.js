import logoIcon from './assets/img/icon.png';
import destkopIcon from './assets/img/desktoppng.png';
import dashboard from './assets/img/dashboard-1.png'
// import phoneIcon from './assets/img/phone.png';
// import iosIcon from './assets/img/ios.png';
// import androidIcon from './assets/img/googleplay.png'
import asignIcon from './assets/img/assign.svg'
import connectedIcon from './assets/img/connected.svg'
import searchIcon from './assets/img/search.svg'
import vaultIcon from './assets/img/vault.svg'
import messagingIcon from './assets/img/messaging.svg'
import mailIcon from './assets/img/mail.svg'
import securityIcon from './assets/img/security.svg'
import dataIcon from './assets/img/data.svg'
import textIcon from './assets/img/text.svg'

import winApp from './assets/release/fiistore.io-Setup-0.0.1.exe'
import macApp from './assets/release/fiistore.io-0.0.1.dmg'

function App() {

  return (
    <>
      <header className="align--center pt3">
        <div className="container--lg border--bottom pb3">
          <img className="logo mb1 reveal-on-scroll is-revealin" src={logoIcon} alt="Carta" width="100" />
          <h1 className="mb1">fiistore.io</h1>
          <img className="mb3" src={dashboard} alt="Carta" />
          <div>
              <img className="" src={destkopIcon} alt="Carta" width="100" />
              <p className="mb1">Télécharger pour ordinateur</p>
              <div>
                  <span className="mr1">
                    <a href={macApp} className="link">
                      <img className="download" src="https://firebasestorage.googleapis.com/v0/b/fiistore.appspot.com/o/download_mac.png?alt=media&token=6176119e-73c8-4241-9c9e-b512e82ea17d" alt="Download on the App Store" />
                    </a>
                  </span>
                  <span>
                    <a href={winApp} className="link">
                      <img className="download" src="https://firebasestorage.googleapis.com/v0/b/fiistore.appspot.com/o/windows-button-download.png?alt=media&token=df23ebd4-20a4-44b9-ae30-decff8c43acf" alt="Download on Google Play" />
                    </a>
                  </span>
              </div>
          </div>
          {/* <div className="mt3">
              <img className="" src={phoneIcon} alt="Carta" width="100" />
              <p className="mb1">Télécharger pour téléphone</p>
              <div>
                  <span className="mr1">
                    <a href="/#" className="link">
                      <img className="download" src={iosIcon} alt="Download on the App Store" />
                    </a>
                  </span>
                  <span>
                    <a href="/#" className="link">
                      <img className="download" src={androidIcon} alt="Download on Google Play" />
                    </a>
                  </span>
              </div>
          </div> */}
        </div>
      </header>
      <main>
        <div className="container pt3 mt2 text--gray align--center">
            <p className="mb3">Idéal pour les entreprises comptant plusieurs employés.</p>
            <div className="grid-row">
                <div className="grid-column span-one-third mb3 reveal-on-scroll is-revealin">
                    <img className="illustration--small mb1" src={asignIcon} alt="Assign to others" />
                    <p>Assigner à d'autres personnes</p>
                </div>
                <div className="grid-column span-one-third mb3 reveal-on-scroll is-revealin">
                    <img className="illustration--small mb1" src={connectedIcon} alt="Stay connected" />
                    <p>Rester connecté</p>
                </div>
                <div className="grid-column span-one-third mb3 reveal-on-scroll is-revealin">
                    <img className="illustration--small mb1" src={searchIcon} alt="Powerful search" />
                    <p>Recherche performante</p>
                </div>
                <div className="grid-column span-one-third mb3 reveal-on-scroll is-revealin">
                    <img className="illustration--small mb1" src={vaultIcon} alt="Put in a vault" />
                    <p>Placer dans un coffre-fort</p>
                </div>
                <div className="grid-column span-one-third mb3 reveal-on-scroll is-revealin">
                    <img className="illustration--small mb1" src={messagingIcon} alt="Fast messaging" />
                    <p>Messagerie rapide</p>
                </div>
                <div className="grid-column span-one-third mb3 reveal-on-scroll is-revealin">
                    <img className="illustration--small mb1" src={mailIcon} alt="Share with others" />
                    <p>Partager avec d'autres</p>
                </div>
            </div>
          </div>

          <div className="container--lg pt1 pb1">

              <div className="grid-row grid-row--center">
                  <div className="grid-column mt3 mb2 order-2">
                      <div className="border--bottom pb2 mb2">
                          <h2>Données d'utilisation</h2>
                          <p>Nous prenons la sécurité de vos données très au sérieux et utilisons des mesures techniques et organisationnelles pour les protéger contre l'accès non autorisé ou illégal, la perte, l'altération ou la destruction.</p>
                      </div>
                      <p className="italic text--gray mb1">Si vous avez des questions sur l'utilisation de vos données, n'hésitez pas à nous contacter</p>
                      <p className="bold">service@fiistore.io</p>
                  </div>
                  <div className="grid-column span-1"></div>
                  <div className="grid-column mt3 mb2 order-1 reveal-on-scroll is-revealin">
                      <img src={dataIcon} alt="Usage data" />
                  </div>
              </div>

              <div className="grid-row grid-row--center">
                  <div className="grid-column mt3 mb2 reveal-on-scroll is-revealin">
                      <img src={securityIcon} alt="Absolute security" />
                  </div>
                  <div className="grid-column span-1"></div>
                  <div className="grid-column mt3 mb2">
                      <div className="border--bottom pb2 mb2">
                          <h2>Sécurité renforcée</h2>
                          <p>La sécurité de vos données est notre priorité absolue. Chez fiistore.io, nous comprenons l'importance de protéger vos informations personnelles et prenons des mesures rigoureuses pour assurer la sécurité de notre plateforme et de vos données à chaque instant.</p>
                      </div>
                      <p className="italic text--gray mb1">Notre équipe de sécurité surveille en permanence nos systèmes pour détecter et prévenir toute activité suspecte. Nous utilisons également des services de surveillance avancés pour nous alerter de tout comportement anormal.</p>
                      <p className="bold">Si vous avez des questions sur nos pratiques de sécurité ou si vous suspectez une faille de sécurité, veuillez contacter immédiatement notre équipe de sécurité à security@fiistore.io</p>
                  </div>
              </div>

          </div>
          {/* <div className="container--lg pt3 pb3 mb2 align--center">
              <p className="mb2">Mentioned in</p>
              <span><img className="mentioned" src="./img/mentioned.svg" alt="New York Times, TC, Product Hunt, Recode"></span>
          </div> */}

          <div className="bg--dark-gray align--center pt3 pb3">
              <div className="container pt2 pb2">
                  <img className="cta-image mb2 reveal-on-scroll is-revealin" src={textIcon} alt="Text the app" />
                  <p className="h3 text--white mb1 bold">Nous vous enverrons l'application</p>
                  <p className="text--white mb3">Il vous suffit d'insérer votre numéro ou e-email ci-dessous. Les tarifs de messagerie&nbsp;s'appliquent.</p>
                  <div className="inline-block mr1 no-mr-on-mobile" style={{ width:'280px', maxWidth: '100%' }}>
                      <input className="form-control" disabled type="tel" placeholder="Email ou numéro" />
                  </div>
                  <button disabled className="btn btn--secondary">Envoyer</button>
              </div>
          </div>

      </main>

      {/* <footer className="pt1 pb3 align--center-on-mobile">
          <div className="container">
              <div className="grid-row"> */}
                  {/* <div className="grid-column mt2 span-half">
                      <div className="mb1">
                          <span>
                              <a href="https://www.apple.com/ios/app-store/" className="link"><img className="download" src="./img/ios.png" alt="Download on the App Store" /></a>
                          </span>
                          <span>
                              <a href="https://play.google.com/store" className="link"><img className="download" src="./img/googleplay.png" alt="Download on Google Play" /></a>
                          </span>
                      </div>
                      <p className="small">Design by <a href="https://www.papayatemplates.com" className="link link--text">Papaya</a>. Illustrations from&nbsp;<a href="https://undraw.co/" className="link link--text">Undraw</a>.</p>
                  </div> */}
                  {/* <div className="grid-column mt2 span-half align--right align--center-on-mobile">
                      <ul className="no-bullets list--inline">
                          <li className="mr1"><a href="" className="link"><img className="icon" src="./img/youtube.svg" alt="YouTube"></a></li>
                          <li className="mr1"><a href="" className="link"><img className="icon" src="./img/twitter.svg" alt="Twitter"></a></li>
                          <li><a href="" className="link"><img className="icon" src="./img/facebook.svg" alt="Facebook"></a></li>
                      </ul>
                  </div> */}
              {/* </div>
          </div>
      </footer> */}
    </>
  );
}

export default App;
