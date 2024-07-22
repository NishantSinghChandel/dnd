const createdOn = new Date();
export const data = [
  {
    id: "1",
    name: "Library installation",
    description: "install all the required libraries.",
    type: "Todo",
    priority: "Medium",
    data: [
      {
        type: "Todo",
        message: "",
        created_on: createdOn,
      },
    ],
  },
  {
    id: "2",
    name: "Husky setup",
    description: "install husky for pre-commit hooks",
    type: "Todo",
    priority: "Low",
    data: [
      {
        type: "Todo",
        message: "",
        created_on: createdOn,
      },
    ],
  },
  {
    id: "3",
    name: "Typescript interface",
    description: "declare all necessary ts interface",
    type: "Todo",
    priority: "Low",
    data: [
      {
        type: "Todo",
        message: "",
        created_on: createdOn,
      },
    ],
  },
  {
    id: "4",
    name: "Setup tailwindCSS",
    description: "set tailwind config, redefine font-sizes and theme",
    type: "In Progress",
    priority: "Medium",
    data: [
      {
        type: "In Progress",
        message: "font size added",
        created_on: createdOn,
      },
    ],
  },
  {
    id: "5",
    name: "Define package.json scripts && add devDependencies",
    description: "Defined required scripts for deployment",
    type: "Done",
    priority: "High",
    data: [
      {
        type: "Done",
        message: "dev task is done, its deployed on dev server",
        created_on: createdOn,
      },
    ],
  },
];
