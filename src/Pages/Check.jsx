import styled from 'styled-components';
import Checkout from '../Components/Checkout';
import Summary from '../Components/Summary';

function Check() {
    return (

        <div className="App">
            <Container>
                <Summary />
                <Checkout />
            </Container>

        </div>
    );
}
const Container = styled.div`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items:center;
        
    }

`;
export default Check;
