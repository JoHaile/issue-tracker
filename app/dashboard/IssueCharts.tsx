"use client";

import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card } from "@radix-ui/themes";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
function IssueCharts({ open, closed, inProgress }: Props) {
  const statuses: { label: string; value: number }[] = [
    { label: "Open Issues", value: open },
    { label: "In Progress Issues", value: inProgress },
    { label: "Closed Issues", value: closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={statuses}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={80} fill="#3b9eff" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default IssueCharts;
