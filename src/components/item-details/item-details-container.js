import React from 'react';
import ItemDetails from './item-details-view';

export default class ItemDetailsContainer extends React.Component {
  state = {
    item: null,
    image: null,
    loading: false,
    error: false,
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
