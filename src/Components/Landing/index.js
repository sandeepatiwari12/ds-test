import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Box, Flex, Card } from "rebass";
import List from "../List";

// redux Action
import { loadList } from "../../Redux/actions/lists";

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { loadList } = this.props;
    loadList();
  }

  render() {
    const { listObj } = this.props;
    const { list, loading } = listObj;
    return (
      <Fragment>
        <Card maxWidth='100%' px={20} py={20}>
          <Flex justifyContent='space-around' flexWrap='wrap'>
            <Box width={1}>{!loading && <List data={list} />}</Box>
          </Flex>
        </Card>
      </Fragment>
    );
  }
}

Landing.propTypes = {
  loadList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listObj: state.listData,
});
export default connect(mapStateToProps, { loadList })(Landing);
