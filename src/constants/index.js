import RemoBell from "../assets/doorBells/remo_bell.jpeg";
import RemoMiniBell from "../assets/doorBells/remo_mini_bell.jpeg";
import BlinkBell from "../assets/doorBells/blink_bell.jpeg";
import BlinkMiniBell from "../assets/doorBells/blink_mini_bell.jpeg";
import RingBell from "../assets/doorBells/ring_bell_mini.jpeg";
import RingMiniBell from "../assets/doorBells/ring_bell_mini.jpeg";

const categories = [
  {
    id: 1,
    label: "Door Bells",
    title: "Smart Door Bells",
    items: [
      {
        id: "db1",
        name: "Remo Doorbell",
        price: 99.99,
        manufacturer: "Remo",
        discount: 15,
        accessories: ["a1", "a2", "a3", "a4"],
        image: RemoBell,
      },
      {
        id: "db2",
        name: "Remo Doorbell Mini",
        price: 59.99,
        manufacturer: "Remo",
        discount: 10,
        accessories: ["a1", "a2", "a3", "a4"],
        image: RemoMiniBell,
      },
      {
        id: "db3",
        name: "Blink Doorbell",
        price: 449.99,
        manufacturer: "Blink",
        discount: 50,
        accessories: ["a5", "a6"],
        image: BlinkBell,
      },
      {
        id: "db4",
        name: "Blink Doorbell Mini",
        price: 300.99,
        manufacturer: "Blink",
        discount: 25,
        accessories: ["a5", "a6"],
        image: BlinkMiniBell,
      },
      {
        id: "db5",
        name: "Ring Doorbell",
        price: 349.99,
        manufacturer: "Ring",
        discount: 30,
        accessories: ["a7", "a8"],
        image: RingBell,
      },
      {
        id: "db6",
        name: "Ring Doorbell Mini",
        price: 299.99,
        manufacturer: "Ring",
        discount: 15,
        accessories: ["a7", "a8"],
        image: RingMiniBell,
      },
    ],
  },
  {
    id: 2,
    label: "Door Locks",
    title: "Smart Door Locks",
    items: [],
  },
  {
    id: 3,
    label: "Speakers",
    title: "Smart Speakers",
    items: [],
  },
  {
    id: 4,
    label: "Lightings",
    title: "Smart Lightings",
    items: [],
  },
  {
    id: 5,
    label: "Thermostats",
    title: "Smart Thermostats",
    items: [],
  },
  {
    id: 6,
    label: "Accessories",
    title: "Smart Accessories",
    items: [
      {
        id: "a1",
        name: "Door Bell Stand",
        price: 15,
        manufacturer: "Remo",
        discount: 2,
      },
      {
        id: "a2",
        name: "Door Bell Powerkit",
        price: 14,
        manufacturer: "Remo",
        discount: 1,
      },
      {
        id: "a3",
        name: "Door Bell Warranty 3 years",
        price: 10,
        manufacturer: "Remo",
        discount: 1,
      },
      {
        id: "a4",
        name: "Door Bell Warranty 5 years",
        price: 12,
        manufacturer: "Remo",
        discount: 1,
      },
      {
        id: "a5",
        name: "Blink Door Bell Warranty 5 years",
        price: 12,
        manufacturer: "Blink",
        discount: 1,
      },
      {
        id: "a6",
        name: "Blink Door Bell Warranty 3 years",
        price: 10,
        manufacturer: "Blink",
        discount: 1,
      },
      {
        id: "a7",
        name: "Ring Door Bell Warranty 3 years",
        price: 10,
        manufacturer: "Ring",
        discount: 1,
      },
      {
        id: "a8",
        name: "Ring Door Bell Warranty 5 years",
        price: 12,
        manufacturer: "Ring",
        discount: 1,
      },
    ],
  },
];

const userTypes = {
  CUSTOMER: "customer",
  STORE_MANAGER: "storemanager",
  SALES_MANAGER: "salesmanager",
};

export { categories, userTypes };
