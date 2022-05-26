{
  const addModal = (e:<html.Element>) => {
    console.log(e.path);
    console.log('haha');
  };

  const button: NodeList | null = document.querySelectorAll('.btn');
  if (button != null) {
    console.log(button);
    button.forEach((item) => console.log(item));
    button.forEach(() => addEventListener('click', addModal));
  }
}
