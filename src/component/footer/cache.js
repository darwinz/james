import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CacheButton = ({cachingEnabled, toggleCaching}) => {
  const icon = cachingEnabled ? 'fa fa-circle' : 'fa fa-circle-o';
  const message = cachingEnabled ? 'Caching enabled' : 'Caching disabled';

  return <div className="cache-button">
    <button title="Toggle caching" onClick={toggleCaching}>
      <i className={icon} />
      <span className="message">{message}</span>
    </button>
  </div>;
};

CacheButton.propTypes = {
  cachingEnabled: PropTypes.bool.isRequired,
  toggleCaching: PropTypes.func.isRequired
};


import { toggleCaching } from '../../actions/proxy.js';
import { getProxyState } from '../../reducers/proxy.js';

const mapStateToProps = (state) => {
  const { cachingEnabled } = getProxyState(state);
  return {
    cachingEnabled
  };
};

const mapDispatchToProps = {
  toggleCaching
};

export default connect(mapStateToProps, mapDispatchToProps)(CacheButton);
