import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemDetails from './item-details-view';

function ItemDetailsContainer(props) {
  const { itemId, getData, getImageUrl } = props;

  const [state, setState] = useState({
    item: null,
    image: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (itemId !== null) {
      setState((st) => ({ ...st, loading: true }));

      let cancelled = false;

      getData(itemId)
        .then(
          (item) =>
            !cancelled &&
            setState((st) => ({ ...st, item, loading: false, image: getImageUrl(item) })),
        )
        .catch(
          () => !cancelled && setState((st) => ({ ...st, error: true, loading: false })),
        );

      return () => (cancelled = true);
    }
  }, [itemId, getData, getImageUrl]);

  return <ItemDetails {...props} {...state} />;
}

ItemDetailsContainer.defaultProps = {
  type: 'an item',
};

ItemDetailsContainer.propTypes = {
  itemId: PropTypes.string,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default ItemDetailsContainer;
