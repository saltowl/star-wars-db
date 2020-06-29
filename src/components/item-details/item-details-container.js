import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from './item-details-view';

export default class ItemDetailsContainer extends React.Component {
  state = {
    item: null,
    image: null,
    loading: false,
    error: false,
  };

  static defaultProps = {
    type: 'an item',
  };

  static propTypes = {
    itemId: PropTypes.string,
    getData: PropTypes.func.isRequired,
    getImageUrl: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (itemId === null) {
      return;
    }

    getData(itemId)
      .then((item) => this.setState({ item, loading: false, image: getImageUrl(item) }))
      .catch((err) => this.setState({ error: true, loading: false }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  render() {
    return <ItemDetails {...this.props} {...this.state} />;
  }
}
