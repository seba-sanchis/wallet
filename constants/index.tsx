import { FaFileInvoice, FaHome, FaUser, FaWallet } from "react-icons/fa";
import { FaBarsStaggered, FaChartColumn, FaRepeat } from "react-icons/fa6";

export const navigation = [
  {
    name: "Pricing",
    url: "/pricing",
  },
];

export const menu = [
  {
    icon: <FaHome size={16} />,
    name: "Home",
    url: "/home",
  },
  {
    icon: <FaBarsStaggered size={16} />,
    name: "Balances",
    url: "/balances",
  },
  {
    icon: <FaRepeat size={16} />,
    name: "Transactions",
    url: "/transactions",
  },
  {
    icon: <FaUser size={16} />,
    name: "Customers",
    url: "/customers",
  },
  {
    icon: <FaWallet size={16} />,
    name: "Payments",
    url: "/payments",
  },
  {
    icon: <FaFileInvoice size={16} />,
    name: "Billing",
    url: "/billing",
  },
  {
    icon: <FaChartColumn size={16} />,
    name: "Reporting",
    url: "/reporting",
  },
];

export const dashboard = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "Balances",
    url: "/balances",
  },
  {
    name: "Transactions",
    url: "/transactions",
  },
  {
    name: "Reporting",
    url: "/reporting",
  },
];

export const expenses = [
  // Healthcare
  {
    id: "FARMACIA VASSALLO",
    category: "healthcare",
    description: "Farmacia Vassallo",
    payment: "credit_card",
    type: "expense",
  },
  // Home
  {
    id: "0150921601000001926812",
    category: "home",
    description: "Alquiler",
    payment: "bank_transfer",
    type: "expense",
  },
  {
    id: "0170347220000030163234",
    category: "home",
    description: "Expensas",
    payment: "bank_transfer",
    type: "expense",
  },
  // Insurance
  {
    id: "0000027092676-002-000",
    category: "insurance",
    description: "La Caja Seguros",
    payment: "credit_card",
    type: "expense",
  },
  {
    id: "0000028821236-004-000",
    category: "insurance",
    description: "La Caja Seguros",
    payment: "credit_card",
    type: "expense",
  },
  // Supermarket
  {
    id: "WWW.CARREFOUR.COM.AR",
    category: "supermarket",
    description: "Carrefour",
    payment: "credit_card",
    type: "expense",
  },
  // Transportation
  {
    id: "960003682555202",
    category: "transportation",
    description: "Autopistas del Sol",
    payment: "credit_card",
    type: "expense",
  },
  {
    id: "WWW.MSM.GOV.AR",
    category: "transportation",
    description: "Municipalidad de San Miguel",
    payment: "credit_card",
    type: "expense",
  },
  {
    id: "SHELL - DEHEZA 1428",
    category: "transportation",
    description: "Shell",
    payment: "credit_card",
    type: "expense",
  },
  {
    id: "PLANTA VICENTE LOPEZ",
    category: "transportation",
    description: "Verificación Técnica Vehicular",
    payment: "credit_card",
    type: "expense",
  },
  // Utilities
  {
    id: "004241233254",
    category: "utilities",
    description: "Edenor",
    payment: "debit_card",
    type: "expense",
  },
  {
    id: "19273186",
    category: "utilities",
    description: "Naturgy",
    payment: "debit_card",
    type: "expense",
  },
  {
    id: "215569",
    category: "utilities",
    description: "Municipalidad de San Isidro",
    payment: "debit_card",
    type: "expense",
  },
  {
    id: "1003254775510001",
    category: "utilities",
    description: "Personal Flow",
    payment: "debit_card",
    type: "expense",
  },
  // Pending to use: Clothing, Education, Entertainment, Investments, Miscellaneous, Travel
];

export const revenue = [
  {
    id: "20351080087",
    category: "work",
    description: "Marcos Zulian",
    payment: "bank_transfer",
    type: "revenue",
  },
  {
    id: "27376357541",
    category: "work",
    description: "Ariana Andrada",
    payment: "bank_transfer",
    type: "revenue",
  },
  {
    id: "20176113694",
    category: "work",
    description: "Roberto Gomez",
    payment: "bank_transfer",
    type: "revenue",
  },
  // Pending to use: Investment
];
