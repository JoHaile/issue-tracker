import React from "react";

interface Props {
  params: { id: string };
}

function editIssuePage({ params }: Props) {
  return <div>EditIssue {params.id}</div>;
}

export default editIssuePage;
