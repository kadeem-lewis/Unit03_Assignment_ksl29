//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 03 Assignment

export const Icons = {
  pokeball: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <circle cx="32" cy="32" r="30" style={{ fill: "#d1d8db" }} />
      <path
        d="M32 2C15.431 2 2 15.431 2 32h60C62 15.431 48.569 2 32 2z"
        style={{ fill: "#ec473f" }}
      />
      <path
        d="M2 32c0 .673.03 1.338.074 2h59.853c.043-.662.073-1.327.073-2s-.03-1.338-.074-2H2.074A30.095 30.095 0 0 0 2 32z"
        style={{ fill: "#2c2f37" }}
      />
      <circle cx="32" cy="32" r="11" style={{ fill: "#657b88" }} />
      <circle cx="32" cy="32" r="7" style={{ fill: "#fff" }} />
    </svg>
  ),
  caretDown: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.63em"
      height="1em"
      viewBox="0 0 320 512"
    >
      <path
        fill="currentColor"
        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301 191.9 288 191.9L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
      ></path>
    </svg>
  ),
  pokedex: (props) => {},
};
