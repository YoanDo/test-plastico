function capitalize(s) {
  if (!s) return null;

  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

export default capitalize;
