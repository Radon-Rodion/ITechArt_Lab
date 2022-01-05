/* eslint-disable no-restricted-globals */
function confirmAction(action: () => void) {
  const res = confirm("Are you sure want to delete this card?");
  if (res) {
    action();
  }
}

export default confirmAction;
