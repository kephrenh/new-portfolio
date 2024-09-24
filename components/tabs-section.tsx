"use client";

import React, { useState, useTransition } from "react";
import { TabButton } from "@/components/tab-button";

type tabDataProps = { title: string; id: string; content: React.ReactNode };

const TAB_DATA: tabDataProps[] = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>OpenClassrooms</li>
        <li>Trailhead by Salesforce</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Intégrateur Web</li>
        <li>Administrateur Salesforce</li>
      </ul>
    ),
  },
  {
    title: "Compétences",
    id: "competences",
    content: (
      <ul className="pl-2 list-disc">
        <li>HTML / CSS</li>
        <li>SASS</li>
        <li>JavaScript / TypeScript</li>
        <li>MongoDB / ExpressJS / ReactJS / NodeJS</li>
        <li>NextJS</li>
      </ul>
    ),
  },
];

export const TabsSection = () => {
  const [tab, setTab] = useState("education");
  // eslint-disable-next-line
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <>
      <div className="flex flex-row justify-start mt-8">
        {TAB_DATA.map((tabData) => (
          <TabButton
            key={tabData.id}
            selectTab={() => handleTabChange(tabData.id)}
            active={tab === tabData.id}>
            {" "}
            {tabData.title}{" "}
          </TabButton>
        ))}
      </div>
      <div className="px-4 text-gray-600 mt-4">{TAB_DATA.find((t) => t.id === tab)!.content}</div>
    </>
  );
};
