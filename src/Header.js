import Logo from './assets/logo.png';
import Github from './assets/github.png';

import './App.css';
import { Button } from './Button';

 function Header() {
    return (
        <div className="header">
            <div>
                <img src={Logo} alt="Logo From SyBridge" className="logo" />
            </div>
            <div className="header-item asap-condensed-semibold">
                <a href='https://github.com/thiagolucio/sybridge' target='_blank' rel="noreferrer">
                    <img src={Github} alt="Logo From SyBridge" className="github" />
                </a>
                <Button variant="default" text="ADD NEW FILE" />
            </div>
        </div>
    );
}
export default Header