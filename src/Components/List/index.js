import React from "react";
import DataTable from "react-data-table-component";
import { Card } from "rebass";

function List({ data: { attributes, list } }) {
  return (
    <Card>
      <DataTable
        title='Users List'
        columns={attributes}
        data={list}
        pagination
      />
    </Card>
  );
}

export default List;
