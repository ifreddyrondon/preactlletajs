import { h, Component } from 'preact';
import formatMoney from './../../lib/formatMoney'
import style from './style';

const NET_FACTOR = 1.1111111111111112;
const GROSS_FACTOR = 0.9;

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      billValue: null,
      billNet: 0,
      billGross: 0,
    };
  }

  handleBillKeyUp = () => {
    this.setState({
      billNet: +this.state.billValue * NET_FACTOR,
      billGross: +this.state.billValue * GROSS_FACTOR,
    })
  };

  render(props, state) {
    return (
      <div class={style.home}>
        <div class={style.inputLeta}>
          <input type="number" placeholder="$$$"
                 value={state.billValue}
                 onKeyUp={this.handleBillKeyUp}
                 onInput={this.linkState('billValue')}
                 required/>
        </div>
        <div class={style.infoLeta}>
          <h3>Líquido</h3>
          <p>Si lo pactado fue en valores líquidos, <br />
            deberás hacer la boleta por <label>${ formatMoney(state.billNet) }</label> y recibirás:
            <label> ${ formatMoney(state.billValue) }</label> en efectivo.
          </p>

          <h3>Bruto</h3>
          <p>
            Si lo pactado fue en valores brutos, <br />
            deberás hacer la boleta por <label>${ formatMoney(state.billValue) }</label> y recibirás:
            <label> ${ formatMoney(state.billGross) }</label> en efectivo.
          </p>
        </div>
      </div>
    );
  }
}
