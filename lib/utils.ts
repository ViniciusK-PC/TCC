export const categoryMenuList = [
  {
    id: 1,
    title: "Furadeiras",
    src: "/furadeira icon.png",
    href: "/shop/smart-phones"
  },
  {
    id: 2,
    title: "Serra Marmore",
    src: "/serram icon.png",
    href: "/shop/tablets"
  },
  {
    id: 3,
    title: "Serra Circular",
    src: "/serrac icon.png",
    href: "/shop/mouses"
  },
  {
    id: 4,
    title: "Martelo Rompedor",
    src: "/martelor icon.png",
    href: "/shop/cameras"
  },
  {
    id: 5,
    title: "Esmerilhadeiras",
    src: "/esmerilhadeira icon.png",
    href: "/shop/watches"
  },
  {
    id: 6,
    title: "Aparador De Canto",
    src: "/ap icon.png",
    href: "/shop/laptops"
  },
  {
    id: 7,
    title: "Cortadores De Grama",
    src: "/cort icon.png",
    href: "/shop/computers"
  },
  {
    id: 8,
    title: "Podador de cerca viva",
    src: "/pd icon.png",
    href: "/shop/printers"
  },
  {
    id: 9,
    title: "Triturador de Galhos",
    src: "/trit icon.png",
    href: "/shop/earbuds"
  },
  {
    id: 10,
    title: "Acessorios",
    src: "/acess icon.png",
    href: "/shop/headphones"
  },
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About Singitronic", href: "#" },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "#" },
  ],
  buy: [
    { name: "Singitronic Loyalty Card", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at Singitronic", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
