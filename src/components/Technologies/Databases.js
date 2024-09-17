import './styles.scss';

function Databases({ active }) {
    return (
        <div role="tabpanel" className={`tab-panel ${active ? 'active' : ''}`}>
            <div className="tab-panel-content">
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=tZpfUsCnSsbj&format=png&color=000000"
                        alt="Bitcoin"
                    />
                    <p>Bitcoin</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=100818&format=png&color=000000"
                        alt="Ethereum"
                    />
                    <p>Ethereum</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=7QgGjOrGgWQa&format=png&color=000000"
                        alt="EVM"
                    />
                    <p>EVM</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=LhueiMPUoxw4&format=png&color=000000"
                        alt="Polygon"
                    />
                    <p>Polygon</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=Hwt1cYEVXpuE&format=png&color=000000"
                        alt="Cosmos"
                    />
                    <p>Cosmos</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=vcnG8K0MxaDs&format=png&color=000000"
                        alt="PolkaDot"
                    />
                    <p>PolkaDot</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=xnZMZXqLEDk1&format=png&color=000000"
                        alt="Cardano"
                    />
                    <p>Cardano</p>
                </div>                
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/?size=100&id=NgbFFSOCkrnB&format=png&color=000000"
                        alt="Solana"
                    />
                    <p>Solana</p>
                </div>

                
            </div>
        </div>
    );
}

export default Databases;
