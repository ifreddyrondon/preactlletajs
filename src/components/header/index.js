import { h, Component } from 'preact';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <svg width="80px" height="80px" viewBox="-256 -256 512 512" style="display: inline-block; margin: -0.25em 0px 0px; vertical-align: middle;"><path style="transition: all 1s ease; transform: rotate(420deg);" d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z" fill="white"></path><ellipse cx="0" cy="0" stroke-dasharray="406.98035602302747 40.01964397697253" stroke-dashoffset="46256.35073482034" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="#673ab8" transform="rotate(52)"></ellipse><ellipse cx="0" cy="0" stroke-dasharray="416.790944474614 30.209055525386027" stroke-dashoffset="-32478.119179839163" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="#673ab8" transform="rotate(-52)"></ellipse><circle cx="0" cy="0" r="34" fill="#673ab8"></circle></svg>
        <h1>Preactlleta</h1>
        <p>Calcula tu boleta de honorarios</p>
      </header>
    );
  }
}
