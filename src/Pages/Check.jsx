import Checkout from '../Components/Checkout';
import Summary from '../Components/Summary';

function Check() {
    return (

        <div className="App">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Summary />
                <Checkout />
            </div>

        </div>
    );
}

export default Check;
