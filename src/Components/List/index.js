import React from "react";
import DataTable from "react-data-table-component";
import { Card } from "rebass";

function List({ data: { attributes, list }, onRowClick }) {
  return (
    <Card>
      <DataTable
        title='Users List'
        columns={attributes}
        data={list}
        pagination
        onRowClicked={(e) => onRowClick(e)}
      />
    </Card>
  );
}

export default List;
