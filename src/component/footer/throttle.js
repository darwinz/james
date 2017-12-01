import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Throttle = (props) => {
  const {throttleRate, throttleEnabled, setThrottleRate, toggleThrottle} = props;

  const icon = throttleEnabled ? 'fa fa-circle' : 'fa fa-circle-o';
  const message = throttleEnabled ? 'Throttle to (kBps):' : 'Throttling disabled';

  let input = null;
  if (throttleEnabled) {
    const onChange = (event) => setThrottleRate(parseInt(event.target.value, 10));
    input = <input type="text" defaultValue={throttleRate} onChange={onChange} />;
  }

  return <div className="throttle">
    <button title="Toggle throttling" onClick={toggleThrottle}>
      <i className={icon} />
      <span className="message">{message}</span>
    </button>
    {input}
  </div>;
};

Throttle.propTypes = {
  toggleThrottle: PropTypes.func.isRequired,
  setThrottleRate: PropTypes.func.isRequired,
  throttleEnabled: PropTypes.bool,
  throttleRate: PropTypes.number
};


import {
  toggleThrottling as toggleThrottle,
  setThrottleRate
} from '../../actions/proxy.js';
import { getProxyState } from '../../reducers/proxy.js';

const mapStateToProps = (state) => {
  const { throttleEnabled, throttleRate } = getProxyState(state);

  return {
    throttleEnabled,
    throttleRate
  };
};

const mapDispatchToProps = {
  toggleThrottle,
  setThrottleRate
};

export default connect(mapStateToProps, mapDispatchToProps)(Throttle);
