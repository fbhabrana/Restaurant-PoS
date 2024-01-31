// Categories.js
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";

const Categories = () => {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-white text-center"></h1>
      <Tabs value="html" orientation="vertical">
        <TabsHeader className="w-64 bg-green-500 text-white">
          <Tab
            value={"Header"}
            className="h-16 text-2xl font-bold mb-4 text-green-500 text-center"
          >
            Categories
          </Tab>
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="h-16 text-2xl text-green-500 "
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </>
  );
};

export default Categories;
