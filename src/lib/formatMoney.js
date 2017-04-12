import accounting from 'accounting';

export default function formatMoney(value) {
  return accounting.formatMoney(value, '', 0, '.');
}
