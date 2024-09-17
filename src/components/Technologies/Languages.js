import './styles.scss';

function Languages({ active }) {
    return (
        <div role="tabpanel" className={`tab-panel ${active ? 'active' : ''}`}>
            <div className="tab-panel-content">
                <div className="tab-panel-content-item">
                    <img
                        src="https://docs.iden3.io/logo-dark.svg"
                        alt="circom"
                        width="90px"
                    />
                    <p>Circom</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=meGB5Ip7aLFG&format=png&color=000000"
                        alt="rust"
                    />
                    <p>Rust</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=kGaP6llzaOqq&format=png&color=000000"
                        alt="solidity"
                    />
                    <p>Solidity</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios/100/null/javascript--v2.png"
                        alt="javascript"
                    />
                    <p>Javascript</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios-filled/100/null/python.png"
                        alt="python"
                    />
                    <p>Python</p>
                </div>
            </div>
        </div>
    );
}

export default Languages;
