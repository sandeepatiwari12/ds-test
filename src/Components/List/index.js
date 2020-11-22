import React from "react";
import DataTable from "react-data-table-component";
import { Card } from "rebass";
import PropTypes from 'prop-types'

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

List.propTypes = {
  data: PropTypes.any.isRequired,
  onRowClick: PropTypes.func
}

export default List;
