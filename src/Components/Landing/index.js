import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Box, Flex, Card } from "rebass";
import List from "../List";

// redux Action
import { loadList } from "../../Redux/actions/lists";
import Details from "../Details";

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsShown: false,
      details: null,
    };
  }

  async componentDidMount() {
    const { loadList } = this.props;
    loadList();
  }
  showDetails = (e) => {
    this.setState({ detailsShown: true, details: e });
  };

  hideDetails = () => {
    this.setState({ detailsShown: false });
  };
  render() {
    const { listObj } = this.props;
    const { list, loading } = listObj;
    const { detailsShown, details } = this.state;
    return (
      <Fragment>
        <Card maxWidth='100%' px={20} py={20}>
          <Flex justifyContent='space-around' flexWrap='wrap'>
            <Box width='85%'>
              {!loading && !detailsShown && (
                <List data={list} onRowClick={this.showDetails} />
              )}
              {detailsShown && details && (
                <Details details={details} goBack={this.hideDetails} />
              )}
            </Box>
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
